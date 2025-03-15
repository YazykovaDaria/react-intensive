import { fetchGet, BASE_URL } from '@shared/index';
import { PostType } from './types';

export const getPostApi = async (id: number): Promise<PostType> =>
  await fetchGet(`${BASE_URL}/posts/${id}`);
