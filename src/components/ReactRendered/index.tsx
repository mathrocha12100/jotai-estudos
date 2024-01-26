import './animation.css';
import useRenderCount from '../../hooks/useRenderCount';
import { tv, VariantProps } from 'tailwind-variants';

const reactRendered = tv({
	base: 'pl-1.5 pr-1.5',
	variants: {
		normal: {
			true: 'roll-out',
		},
		big: {
			true: 'roll-out-big',
		},
	},
	defaultVariants: {
		normal: true,
	},
});

type ReactRenderedProps = {
	className?: string;
} & VariantProps<typeof reactRendered>;

function ReactRendered({ className, ...rest }: ReactRenderedProps) {
	const renders = useRenderCount();

	return (
		<code key={Math.random()} className={reactRendered({ className, ...rest })}>
			{renders}
		</code>
	);
}

export default ReactRendered;
