import s from './style.module.scss';
import { useState } from 'react';
import { Button } from '@shared/ui';
import { getRandomPostApi } from './api';
import { PostType } from '@entities/post/types';

export const RandomPostPage = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>('');

  const getPost = async () => {
    setLoading(true);
    try {
      const post = await getRandomPostApi();

      setPost(post);
      setErr('');
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={s.section}>
      <h1>Random post</h1>
      {post ? (
        <p>{post.title}</p>
      ) : (
        <Button disabled={isLoading} onClick={getPost}>
          Get random post
        </Button>
      )}
      {isLoading && <p>Loading...</p>}
      {err && <span>{err}</span>}
    </section>
  );
};
