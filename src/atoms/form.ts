/**
 * APENAS EXEMPLOS NAO USEM ATOMS PARA FORMS!
 */

import { atom } from 'jotai';
import { UserProfile } from '../features/forms/jotai/components/Form';
import { faker } from '@faker-js/faker';
import { selectAtom } from 'jotai/utils';
import deepEquals from 'fast-deep-equal';

const name = faker.person.firstName();

export const defaultProfile: UserProfile = {
	description: faker.person.bio(),
	email: `${name}@email.com`,
	login: faker.internet.displayName({ firstName: name }),
	password: faker.internet.password(),
	phone: faker.phone.imei(),
};

export const userProfile = atom<UserProfile>(defaultProfile);

const userProfileTopSelector = ({ email, login }: UserProfile) => ({
	email,
	login,
});

export const userProfileTop = selectAtom(
	userProfile,
	userProfileTopSelector,
	deepEquals,
);
