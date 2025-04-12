import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { articleAPI, Article } from '@shared/api';

export const useGetArticles = () => {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: articleAPI.getArticles,
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (article: Article) => articleAPI.createArticle(article),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => articleAPI.deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
