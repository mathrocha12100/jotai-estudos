import { tv, VariantProps } from 'tailwind-variants';
import { generateRandomID } from '../../utils/random';
import { global__showDebugIds } from '../../atoms/global';
import { useGlobalAtomValue } from '../../hooks/jotai-global';

const idStyles = tv({
	base: 'p-1 bg rounded-md flex items-center justify-center',
	variants: {
		cyan: {
			true: 'bg-cyan-700',
		},
		emerald: {
			true: 'bg-emerald-700',
		},
		orange: {
			true: 'bg-orange-700',
		},
	},
	defaultVariants: {
		cyan: true,
	},
});

type RandomIDProps = {
	className?: string;
} & VariantProps<typeof idStyles>;

function RandomID({ className, ...rest }: RandomIDProps) {
	const shouldShow = useGlobalAtomValue(global__showDebugIds);

	if (!shouldShow) return;

	return (
		<div className={className}>
			<div className={idStyles({ ...rest })}>
				<code className="italic text-slate-100 text-sm">
					[{generateRandomID()}]
				</code>
			</div>
		</div>
	);
}

export default RandomID;
