import type { INewsProvider } from '../../core/interfaces/INewsProvider';

export interface APINewsResponse {
  status:       string;
  totalResults: number;
  articles:     Article[];
}

export interface Article {
  source:      Source;
  author:      null | string;
  title:       string;
  description: null | string;
  url:         string;
  urlToImage:  null | string;
  publishedAt: Date;
  content:     string;
}

export interface Source {
  id:   null | string;
  name: string;
}

export class NewsAPIProvider implements INewsProvider {
  async getLastestNews() {
    const res = await fetch(`${import.meta.env.SITE}/api/news`)
    const data:APINewsResponse  = await res.json()
    return data.articles
      .filter(item => item.description && item.urlToImage)
      .map(item => {
      return ({
      title: item.title,
      content: item.description as string,
      url: item.urlToImage as string,
    })})
  }
}