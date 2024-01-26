import { useState } from 'react';
import RenderInfo from '../../components/RenderInfo';
import ComponentBadge from '../../components/ComponentBadge';

function ForgotPassword() {
	return (
		<div className="relative mt-4 flex flex-col text-xs rounded-md border-2 border-dashed border-red-500 p-2">
			<ComponentBadge
				name="ForgotPassword"
				className="bg-slate-700 text-red-500"
			/>

			<button className="text-green-400 mb-4" type="button">
				Esqueci minha senha
			</button>

			<RenderInfo
				componentTree="[SimpleRender -> LoginForm -> ForgotPassword]"
				className="text-red-500"
			/>
		</div>
	);
}

function LoginForm() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="flex flex-col p-4 rounded-md w-[400px] h-[360px] bg-slate-800 relative border-2 border-dashed border-sky-500">
			<ComponentBadge name="LoginForm" className="bg-slate-700 text-sky-500" />
			<h1 className="text-slate-100 text-lg mb-4">Entrar no site</h1>
			<input
				placeholder="Digite seu email"
				className="outline-none p-1 bg-slate-900 text-slate-300 rounded-md border-1 border-slate-700 text-md pl-2"
				value={input}
				onChange={({ target }) => setInput(target.value)}
			/>
			<input
				placeholder="Digite sua senha"
				className="mt-2 outline-none p-1 bg-slate-900 text-slate-300 rounded-md border-1 border-slate-700 text-md pl-2"
				value={password}
				type="password"
				onChange={({ target }) => setPassword(target.value)}
			/>
			<ForgotPassword />

			<div className="text-xs mt-4">
				<RenderInfo
					componentTree="[SimpleRender -> LoginForm]"
					className="text-sky-500"
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

export default LoginForm;
