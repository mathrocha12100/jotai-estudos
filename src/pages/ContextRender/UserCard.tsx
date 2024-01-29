import { UserProps, FilterGender, useRenderContext } from './RenderContext';
import ComponentBadge from '../../components/ComponentBadge';

type UserCardProps = {
	user: UserProps;
	index: number;
};

function getUserGenderName(gender: FilterGender) {
	switch (gender) {
		case FilterGender.MALE: {
			return 'Homem';
		}
		case FilterGender.FEMALE: {
			return 'Mulher';
		}
		case FilterGender.OTHER: {
			return 'Outro';
		}
		default:
			return 'Outro';
	}
}

function UserCard({ user, index }: UserCardProps) {
	const { toggleInterest } = useRenderContext();

	return (
		<div className="p-4 relative bg-slate-900 rounded-md w-[200px] border-2 border-dashed border-green-400">
			<ComponentBadge
				name={`UserCard-${index}`}
				className="bg-slate-600 text-green-400"
			/>

			<div className="flex flex-col items-center">
				<img className="rounded-full w-40 h-40" alt={user.name} src={user.avatar} />
				<span className="text-slate-50">{user.name}</span>
				<span className="text-slate-300 text-xs">
					{getUserGenderName(user.gender)}
				</span>
			</div>
			<div className="flex">
				{user.hasInterest ? (
					<button
						className="p-1 border-1 border-slate-50/10 rounded-md mt-2 w-full text-slate-50 text-sm"
						type="button"
						onClick={() => toggleInterest(index)}
					>
						Nao tenho interesse
					</button>
				) : (
					<button
						className="p-1 bg-rose-600 rounded-md mt-2 w-full text-slate-50 font-bold text-sm"
						type="button"
						onClick={() => toggleInterest(index)}
					>
						Tenho interesse
					</button>
				)}
			</div>
		</div>
	);
}

export default UserCard;
