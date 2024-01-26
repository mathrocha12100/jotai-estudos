import { tv } from 'tailwind-variants';

const componentBadge = tv({
	base: 'absolute top-1 right-1 p-1 rounded-md text-xs pl-2 pr-2',
});

type ComponentBadgeProps = {
	name: string;
	className?: string;
};

function ComponentBadge({ name, className }: ComponentBadgeProps) {
	return <div className={componentBadge({ className })}>{name}</div>;
}

export default ComponentBadge;
