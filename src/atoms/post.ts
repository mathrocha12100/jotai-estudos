import { atom } from 'jotai';
import { selectAtom, splitAtom } from 'jotai/utils';
import { PostItemProps } from '../pages/PostListJotai/Post';
import { faker } from '@faker-js/faker';
import { PrimitiveAtom } from 'jotai/vanilla';
import deepEquals from 'fast-deep-equal';

export const generateRandomPosts = (ammount: number) => {
	return Array.from({ length: ammount }).map(
		() =>
			({
				liked: false,
				comments: [
					faker.lorem.paragraph(),
					faker.lorem.paragraph(),
					faker.lorem.paragraph(),
				],
				avatar: faker.image.avatar(),
				description: faker.person.bio(),
				login: faker.person.fullName(),
			}) as PostItemProps,
	);
};

export const posts = atom<PostItemProps[]>(generateRandomPosts(2));
export const splitPosts = splitAtom(posts);

const postTopDataSelector = ({
	avatar,
	liked,
	login,
	description,
}: PostItemProps) => ({
	avatar,
	liked,
	login,
	description,
});

/**
 * IMPORTANTE!
 * As funcoes que retornam os dados ou a `equilityFn` NAO PODEM ser declaradas inline no `selectAtom`, se voce
 * declarar uma funcao inline no `selectAtom` ele vai causar um loop infinito no React
 */

/**
 * no caso e necessario usar uma funcao de `equalityFn` estou usando a lib `fast-deep-equal` pra
 * ja fazer isso automaticamente, mas basicamente isso vai dizer para esse seletor se os dados devem
 * ser atualizados ou nao, semelhante a `equalityFn` de um `React.memo`
 */
export const postTopData = (postAtom: PrimitiveAtom<PostItemProps>) =>
	selectAtom(postAtom, postTopDataSelector, deepEquals);

const selectComments = (post: PostItemProps) => post.comments;

export const postCommentsData = (postAtom: PrimitiveAtom<PostItemProps>) =>
	selectAtom(postAtom, selectComments);
