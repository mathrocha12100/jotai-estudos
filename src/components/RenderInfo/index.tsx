import { tv } from 'tailwind-variants';
import ReactRendered from '../ReactRendered';

const renderinfo = tv({
	base: 'text-[16px] text-purple-400',
});

type RenderInfoProps = {
	componentTree: string;
	className?: string;
};

function RenderInfo({ componentTree, className }: RenderInfoProps) {
	return (
		<div className="flex flex-col">
			<span className="text-orange-300">
				Component: <span className="text-yellow-400">{componentTree}</span>
			</span>
			<span className="text-slate-100">
				Renderizou <ReactRendered className={renderinfo({ className })} />x
			</span>
		</div>
	);
}

export default RenderInfo;
