export type UserPostData = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type UserPostProps = {
	post: UserPostData;
};

function UserPost({ post }: UserPostProps) {
	return (
		<div className="p-3 bg-neutral-800 mb-2 rounded-md">
			<span className="text-slate-100">{post.title}</span>
			<p className="text-slate-400 text-sm">{post.body}</p>
		</div>
	);
}

export default UserPost;
