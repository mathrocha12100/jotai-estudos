import { Provider, useAtomValue } from 'jotai';
import { usersQuery } from '../../atoms/reactQueryList';
import UserCard from './UserCard';
import { useGlobalAtomValue } from '../../hooks/jotai-global';
import { global__showDebugIds } from '../../atoms/global';

function DebugData() {
	const data = useAtomValue(usersQuery);

	return (
		<div className="w-full bg-zinc-900 p-2 overflow-auto text-orange-400">
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

function ListDebugData() {
	const shouldShow = useGlobalAtomValue(global__showDebugIds);

	if (!shouldShow) return null;

	return <DebugData />;
}

function JotaiReactQueryList() {
	const { data, isLoading } = useAtomValue(usersQuery);

	if (isLoading) return <h1>Loading</h1>;

	return (
		<div className="w-[500px] ml-auto mr-auto">
			<div className="flex flex-col">
				{data?.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
}

function Page() {
	return (
		<Provider>
			<div className="flex gap-4 w-full p-2">
				<JotaiReactQueryList />
				<ListDebugData />
			</div>
		</Provider>
	);
}

export default Page;
