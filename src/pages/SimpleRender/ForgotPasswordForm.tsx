import { useState } from 'react';
import RenderInfo from '../../components/RenderInfo';
import ComponentBadge from '../../components/ComponentBadge';

function ForgotEmail() {
	return (
		<div className="relative mt-4 flex flex-col text-xs rounded-md border-2 border-dashed border-purple-400 p-2">
			<ComponentBadge
				name="ForgotEmail"
				className="text-purple-400 bg-slate-700"
			/>

			<button className="text-green-400 mb-4" type="button">
				Esqueci meu e-mail
			</button>

			<RenderInfo
				className="text-purple-400"
				componentTree="[ SimpleRender -> ForgotPasswordForm-> ForgotEmail ]"
			/>
		</div>
	);
}

function ForgotPasswordForm() {
	const [input, setInput] = useState('');

	return (
		<div className="relative flex flex-col p-4 rounded-md w-[500px] h-[360px] bg-slate-800 border-2 border-dashed border-green-500">
			<ComponentBadge
				name="ForgotPasswordForm"
				className="text-green-500 bg-slate-700"
			/>
			<h1 className="text-slate-100 text-lg mb-4">Recuperar sua senha</h1>
			<input
				placeholder="Digite seu email"
				className="placeholder:text-sm pl-2 outline-none p-1 bg-slate-900 text-slate-300 rounded-md border-1 border-slate-700 text-md"
				value={input}
				onChange={({ target }) => setInput(target.value)}
			/>

			<ForgotEmail />

			<div className="text-xs mt-4">
				<RenderInfo
					className="text-green-500"
					componentTree="[ SimpleRender -> ForgotPasswordForm ]"
				/>
			</div>

			<button
				type="button"
				className="bg-blue-600 rounded-md mt-auto text-slate-100"
			>
				Recuperar meu e-mail
			</button>
		</div>
	);
}

export default ForgotPasswordForm;
