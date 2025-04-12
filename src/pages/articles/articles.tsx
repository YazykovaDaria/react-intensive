import { useGetArticles } from '@entities/article';
import { ArticleCard } from './ui/article-card';
import s from './style.module.scss';

export const ArticlesPage = () => {
  const { data: articles, status, isPending } = useGetArticles();

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (status !== 'success') {
    return <span>You don't have any articles yet</span>;
  }

  return (
    <section>
      <h2>Articles</h2>
      <ul className={s.cards}>
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
