import { useState } from 'react';
import RenderInfo from '../../../components/RenderInfo';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';
import ForgotPassword from './ForgotPassword';

const code = `import { useState } from 'react';
import RenderInfo from '../../../components/RenderInfo';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';
import ForgotPassword from './ForgotPassword';

function LoginForm() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="...">
			<ComponentBadge name="LoginForm" className="..." />
			<h1 className="...">Entrar no site</h1>
			<input
				placeholder="Digite seu email"
				className="..."
				value={input}
				onChange={({ target }) => setInput(target.value)}
			/>
			<input
				placeholder="Digite sua senha"
				className="..."
				value={password}
				type="password"
				onChange={({ target }) => setPassword(target.value)}
			/>

			<ForgotPassword />

			<div className="...">
				<RenderInfo
					componentTree="[SimpleRender -> LoginForm]"
					className="..."
				/>
			</div>

			<button
				type="button"
				className="..."
			>
				Recuperar meu e-mail
			</button>
		</div>
	);
}`;

const jsx: ComponentBadgeJSX = {
	title: 'LoginForm.tsx',
	path: 'src/pages/SimpleRender/LoginForm/LoginForm.tsx',
	position: 'right',
	code,
};

function LoginForm() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="flex flex-col p-4 rounded-md w-[500px] h-[360px] bg-slate-800 relative border-2 border-dashed border-sky-500">
			<ComponentBadge
				jsx={jsx}
				name="LoginForm"
				className="bg-slate-700 text-sky-500"
			/>
			<h1 className="text-slate-100 text-lg mb-4">Entrar no site</h1>
			<input
				placeholder="Digite seu email"
				className="placeholder:text-sm outline-none p-1 bg-slate-900 text-slate-300 rounded-md border-1 border-slate-700 text-md pl-2"
				value={input}
				onChange={({ target }) => setInput(target.value)}
			/>
			<input
				placeholder="Digite sua senha"
				className="placeholder:text-sm mt-2 outline-none p-1 bg-slate-900 text-slate-300 rounded-md border-1 border-slate-700 text-md pl-2"
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
