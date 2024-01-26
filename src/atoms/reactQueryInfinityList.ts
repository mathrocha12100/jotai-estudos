import { atomWithInfiniteQuery } from 'jotai-tanstack-query';
import api from '../services/api';
import { UserPostData } from '../pages/JotaiReactQueryInfinity/UserPost';

export const postsAtom = atomWithInfiniteQuery(() => ({
	queryKey: ['posts-infinity'],
	queryFn: ({ pageParam }) =>
		api.get<UserPostData[]>(`/posts?_page=${pageParam}`).then((res) => res.data),
	getNextPageParam: (lastPage, allPages, lastPageParam) => lastPageParam + 1,
	initialPageParam: 1,
}));
