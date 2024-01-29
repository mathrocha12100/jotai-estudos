import { ComponentProps } from 'react';

type InputProps = {
	label: string;
} & ComponentProps<'input'>;

function Input({ label, ...props }: InputProps) {
	return (
		<div className="flex flex-col">
			<span className="text-slate-100">{label}</span>
			<input
				className="placeholder:text-sm outline-none text-slate-200 p-1 bg-slate-800 border-1 border-slate-700 rounded-md"
				{...props}
			/>
		</div>
	);
}

export default Input;
