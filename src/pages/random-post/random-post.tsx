import s from './style.module.scss';
import { Button } from '@shared/ui';

export const RandomPostPage = () => (
  <section className={s.section}>
    <h1>Random post</h1>
    <Button>Get random post</Button>
  </section>
);
