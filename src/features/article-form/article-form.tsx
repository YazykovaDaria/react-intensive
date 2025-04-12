/* eslint-disable @typescript-eslint/no-explicit-any */
import s from './style.module.scss';
import { useCreateArticle } from '@entities/article';
import { useNavigate } from 'react-router';
import { routes } from '@shared/index';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { articleSchema, CreateArticleValues } from './schema';
import { Input, Textarea, Button, Checkbox } from '@shared/index';
import { Article } from '@shared/index';

const defaultValues: CreateArticleValues = {
  title: '',
  content: {
    type: 'draft',
  },
};

export const ArticleForm = () => {
  const navigate = useNavigate();
  const { status, mutate } = useCreateArticle();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues,
    resolver: zodResolver(articleSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (article: CreateArticleValues) => {
    try {
      await mutate(article as Article);
      navigate(routes.articles.getLink());
    } catch (error) {
      console.log(error);
    }
  };

  const typeValue = watch('content.type');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.field}>
        <Input type="text" {...register('title')} placeholder="title" />
        {errors.title && (
          <span className={s.error}>{errors.title.message}</span>
        )}
      </div>

      <div className={s.field}>
        <p>Type</p>
        <select {...register('content.type')} className={s.select}>
          <option value="draft">draft</option>
          <option value="published">published</option>
        </select>
      </div>

      {typeValue === 'published' && (
        <>
          <div className={s.field}>
            <Textarea
              {...register('content.description')}
              rows={3}
              placeholder="content"
            />
            {(errors.content as any)?.description && (
              <span className={s.error}>
                {
                  (errors.content as { description?: { message?: string } })
                    .description?.message
                }
              </span>
            )}
          </div>
          <Checkbox
            {...register('content.isNew')}
            defaultChecked={false}
            label="Is new?"
          ></Checkbox>
        </>
      )}

      <Button type="submit" disabled={status === 'pending'}>
        Create
      </Button>
    </form>
  );
};
