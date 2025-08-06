import type { INewsProvider } from '@src/core/interfaces/INewsProvider';
import { NewsAPIProvider, FakeNewsProvider } from '@src/infrastructure/providers';

const provider: INewsProvider = new FakeNewsProvider();

export async function fetchNews(){
  return await provider.getLastestNews();
}