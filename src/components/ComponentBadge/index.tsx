import { Atom } from 'lucide-react';
import { tv } from 'tailwind-variants';
import ReactRendered from '../ReactRendered';

const componentBadge = tv({
	base: 'absolute top-1 right-1 p-1 rounded-md text-xs pl-2 pr-2 flex',
});

type ComponentBadgeProps = {
	name: string;
	className?: string;
};

function ComponentBadge({ name, className }: ComponentBadgeProps) {
	return (
		<div className={componentBadge({ className })}>
			<Atom className="w-4 h-4 mr-1 text-blue-500" />
			{name}
			<ReactRendered big className="text-slate-50 underline" />
		</div>
	);
}

export default ComponentBadge;
