import { useAtom } from 'jotai';
import { postsAtom } from '../../atoms/reactQueryInfinityList';
import UserPost from './UserPost';

const InfinityList = () => {
	const [{ data, fetchNextPage, isPending, isError }] = useAtom(postsAtom);

	if (isPending || !data?.pages.length) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<div className="flex flex-col w-[500px]">
			{data?.pages.map((page, index) => (
				<div key={index}>
					{page.map((post) => (
						<UserPost key={post.id} post={post} />
					))}
				</div>
			))}
			<button
				className="bg-emerald-400 rounded-md"
				type="button"
				onClick={() => fetchNextPage()}
			>
				Next Page
			</button>
		</div>
	);
};

export default InfinityList;
