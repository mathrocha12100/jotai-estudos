import { atomWithQuery } from 'jotai-tanstack-query';
import api from '../services/api';
import { UserProps } from '../pages/JotaiReactQueryList/UserCard';

export const usersQuery = atomWithQuery<UserProps[]>(() => ({
	queryKey: ['users-list'],
	queryFn: () => api.get('/users').then((res) => res.data),
}));
