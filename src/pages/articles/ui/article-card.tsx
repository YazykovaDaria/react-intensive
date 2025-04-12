import { Article, Button } from '@shared/index';
import { useDeleteArticle } from '@entities/article';
import s from './style.module.scss';

export const ArticleCard = ({ id, title, content }: Article) => {
  const { mutate: deleteArticle, isPending } = useDeleteArticle();

  return (
    <article className={s.card}>
      <h2>{title}</h2>
      <p>{`Type: ${content.type}`}</p>
      {content.type !== 'draft' && (
        <div>
          <p>Published {content.isNew && 'new article'}</p>
          <p>{content.description}</p>
        </div>
      )}
      <Button onClick={() => deleteArticle(id)} disabled={isPending}>
        Delete article
      </Button>
    </article>
  );
};
