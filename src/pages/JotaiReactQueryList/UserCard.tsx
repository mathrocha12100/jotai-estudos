import { faker } from '@faker-js/faker';

export type UserProps = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

type UserCardProps = {
	user: UserProps;
};

function UserCard({ user }: UserCardProps) {
	const randomAvatar = faker.image.avatarGitHub();

	return (
		<div className="p-2 rounded-md bg-zinc-800 mb-2 flex flex-col">
			<div className="flex items-center mb-3">
				<img className="h-6 w-6 rounded-full" src={randomAvatar} alt={user.email} />
				<div className="flex flex-col ml-2">
					<span className="text-slate-100">{user.name}</span>
					<span className="text-slate-300 text-xs">{user.email}</span>
				</div>
			</div>
			<div className="border-t-1 pt-2 border-zinc-200/20 flex flex-col">
				<span className="text-slate-100">{user.company.name}</span>
				<span className="text-slate-300 text-xs">{user.company.catchPhrase}</span>
			</div>
		</div>
	);
}

export default UserCard;
