export interface APINews {
  title: string,
  content: string,
  url: string,
}

export interface INewsProvider {
  getLastestNews(): Promise<APINews[]>
}