import { faker } from '@faker-js/faker';
import { SetStateAction } from 'jotai';
import {
	Dispatch,
	PropsWithChildren,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';

export enum FilterGender {
	MALE = 1,
	FEMALE = 2,
	OTHER = 3,
	ALL = 4,
}

export type FiltersProps = {
	hasInterest: boolean;
	gender: FilterGender;
	name: string | null;
};

export type UserProps = {
	name: string;
	hasInterest: boolean;
	gender: FilterGender;
	avatar: string;
};

type RenderContextProps = {
	users: UserProps[];
	setUsers: Dispatch<SetStateAction<UserProps[]>>;

	filters: FiltersProps;
	setFilters: Dispatch<SetStateAction<FiltersProps>>;
	toggleInterest: (index: number) => void;
	getFilteredList: () => UserProps[];
};

const RenderContext = createContext({} as RenderContextProps);

const generateGender = () => {
	const rand = Math.floor(Math.random() * 31);

	if (rand <= 10) {
		return FilterGender.FEMALE;
	}

	if (rand <= 20) {
		return FilterGender.MALE;
	}

	return FilterGender.OTHER;
};

function isStringsSimilar(str1: string, str2: string) {
	return str1.indexOf(str2) !== -1;
}

const generateRandomUsers = (amount: number) => {
	return Array.from({ length: amount }).map(() => ({
		avatar: faker.internet.avatar(),
		name: faker.person.firstName(),
		hasInterest: false,
		gender: generateGender(),
	})) as UserProps[];
};

function RenderProvider({ children }: PropsWithChildren) {
	const [users, setUsers] = useState<UserProps[]>(generateRandomUsers(20));
	const [filters, setFilters] = useState<FiltersProps>({
		gender: FilterGender.ALL,
		hasInterest: false,
		name: null,
	});

	const toggleInterest = (index: number) => {
		setUsers((state) =>
			state.map((user, currentIndex) => {
				if (index === currentIndex) {
					return {
						...user,
						hasInterest: !user.hasInterest,
					};
				}

				return user;
			}),
		);
	};

	const canFilterByGender = () => {
		return filters.gender !== FilterGender.ALL;
	};

	const getFilteredList = () => {
		return users.filter((user) => {
			const hasInterst = filters.hasInterest ? user.hasInterest : true;
			const gender = canFilterByGender() ? user.gender === filters.gender : true;
			const text = filters.name
				? isStringsSimilar(user.name.toLowerCase(), filters.name.toLowerCase())
				: true;

			return hasInterst && gender && text;
		});
	};

	const value = useMemo<RenderContextProps>(
		() => ({
			filters,
			users,
			setFilters,
			setUsers,
			toggleInterest,
			getFilteredList,
		}),
		[filters, users],
	);

	return (
		<RenderContext.Provider value={value}>{children}</RenderContext.Provider>
	);
}

export function useRenderContext() {
	const context = useContext(RenderContext);

	return context;
}

export default RenderProvider;
