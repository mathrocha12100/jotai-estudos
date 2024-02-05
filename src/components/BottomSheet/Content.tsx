import { Variants, motion, useMotionValue, useSpring } from 'framer-motion';
import Drag from './Drag';
import { DEFAULT_MIN_HEIGHT, SPRING_CONFIG } from './constants';
import { BottomSheetProps } from '.';
import useDragControl from './useDragControl';

function BottomSheetContent({
	children,
	setOpen,
	config = { allowMaximize: false, minHeight: DEFAULT_MIN_HEIGHT },
	HeaderComponent,
}: Omit<BottomSheetProps, 'open'>) {
	const defaultHeight = config?.minHeight || DEFAULT_MIN_HEIGHT;

	const height = useMotionValue(defaultHeight);
	const heightSpringAnimation = useSpring(height, SPRING_CONFIG);

	const dragHandler = useDragControl({
		config: {
			allowMaximize: !!config?.allowMaximize,
			minHeight: defaultHeight,
		},
		height,
		setOpen,
	});

	const sheetVariants: Variants = {
		closed: { height: 0, opacity: 0 },
		closing: { height: -300, opacity: 0 },
		open: {
			height: defaultHeight,
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="fixed bottom-0 w-[400px]"
			variants={sheetVariants}
			initial="closed"
			animate="open"
			exit="closing"
			style={{
				overflow: 'hidden',
				height: heightSpringAnimation,
				scaleY: 0.999,
				scaleX: 0.999,
			}}
		>
			<div className="h-full flex flex-col">
				<Drag HeaderComponent={HeaderComponent} dragHandler={dragHandler} />
				<motion.div className="flex flex-col gap-2 bg-zinc-800 min-h-fit h-full overflow-y-auto">
					{children}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default BottomSheetContent;
