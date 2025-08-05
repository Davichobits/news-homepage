import type { INewsProvider } from '../core/interfaces/INewsProvider';
import { NewsAPIProvider, FakeNewsProvider } from '../infrastructure/providers';

const provider: INewsProvider = new FakeNewsProvider();

export async function fetchNews(){
  return await provider.getLastestNews();
}