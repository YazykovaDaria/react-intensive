import { getPostApi } from '@entities/post';

const POSTS_COUNT = 100;

export const getRandomPostApi = async () => {
  const randomId = Math.floor(Math.random() * POSTS_COUNT) + 1;
  try {
    const response = await getPostApi(randomId);
    return response;
  } catch (error) {
    throw new Error(`Get post error: ${error}`);
  }
};
