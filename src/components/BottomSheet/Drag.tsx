import { motion } from 'framer-motion';
import { DRAG_CONSTRAINTS } from './constants';
import { IUseDragControlHook } from './useDragControl';

type DragProps = {
	dragHandler: IUseDragControlHook;
	HeaderComponent?: JSX.Element;
};

function Drag({ dragHandler, HeaderComponent }: DragProps) {
	return (
		<motion.div
			drag="y"
			dragConstraints={DRAG_CONSTRAINTS}
			dragElastic={0}
			onDrag={dragHandler.handleDrag}
			onDragEnd={() => dragHandler.handleDragEnd()}
			className="rounded-t-md w-full pt-5 flex flex-col items-center justify-center cursor-grab bg-zinc-900"
		>
			<div className="w-[80px] h-[4px] bg-zinc-700 rounded-full" />
			{HeaderComponent && HeaderComponent}
		</motion.div>
	);
}

export default Drag;
