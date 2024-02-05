import { useState } from 'react';
import BottomSheet from '../../components/BottomSheet';
import {
	Gem,
	Info,
	Megaphone,
	MessageSquareWarning,
	Quote,
	Send,
	Star,
	UserRoundX,
} from 'lucide-react';
import { faker } from '@faker-js/faker';

type ItemProps = {
	Icon: React.ComponentType<{
		className?: string;
	}>;
	text: string;
};

function Item({ Icon, text }: ItemProps) {
	return (
		<div className="flex p-1 items-center pl-3 pr-3 mt-2">
			<Icon className="text-zinc-300 mr-2" />
			<span className="text-xl text-zinc-300">{text}</span>
		</div>
	);
}

export function CommentTest() {
	return (
		<div className="flex p-4 mb-2">
			<img
				className="mr-2 w-[62px] h-[62px] rounded-full"
				src={faker.image.avatar()}
				alt="x"
			/>

			<span className="text-slate-300 text-sm">{faker.lorem.paragraph()}</span>
		</div>
	);
}

function HeaderExample() {
	return (
		<div className="p-2 pl-4 pr-4 pb-4 flex items-center justify-between w-full border-b-1 border-zinc-600">
			<span className="text-slate-300 text-2xl">Comentarios</span>
			<button type="button">
				<Info className="text-zinc-100 w-6 h-6" />
			</button>
		</div>
	);
}

function Motion() {
	const [open, setOpen] = useState(false);

	return (
		<div className="p-4 h-full w-full flex justify-center items-center">
			<button
				onClick={() => setOpen(true)}
				className="p-4 flex items-center text-slate-900 bg-emerald-400 rounded-md font-bold"
				type="button"
			>
				Abrir bottom-sheet <Star className="ml-2" />
			</button>
			<BottomSheet
				open={open}
				setOpen={setOpen}
				HeaderComponent={<HeaderExample />}
				config={{
					allowMaximize: true,
					minHeight: 600,
				}}
			>
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />
				<CommentTest />

				{/* <Item Icon={Star} text="Adicionar aos favoritar" />
				<Item Icon={Gem} text="Presentear" />
				<Item Icon={Quote} text="Enviar depoimento real" />
				<div className="h-[1px] w-full bg-zinc-600 mt-2 mb-2" />
				<Item Icon={MessageSquareWarning} text="Denunciar" />
				<Item Icon={UserRoundX} text="Bloquear" />
				<Item Icon={Megaphone} text="Envie sugestoes" /> */}
			</BottomSheet>
		</div>
	);
}

export default Motion;
