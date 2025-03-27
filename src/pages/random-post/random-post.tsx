import s from './style.module.scss';
import { useState } from 'react';
import { Button } from '@shared/index';
import { getRandomPostApi } from './api';
import { PostType } from '@entities/post';

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
      if (err instanceof Error) {
        setErr(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={s.section}>
      <h1 className="title">Random post</h1>
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
