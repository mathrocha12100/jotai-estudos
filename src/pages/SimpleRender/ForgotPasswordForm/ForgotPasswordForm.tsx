import { useState } from 'react';
import RenderInfo from '../../../components/RenderInfo';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';
import ForgotEmail from './ForgotEmail';

const code = `import { useState } from 'react';
import RenderInfo from '../../../components/RenderInfo';
import ComponentBadge, { ComponentBadgeJSX } from '../../../components/ComponentBadge';
import ForgotEmail from './ForgotEmail';

function ForgotPasswordForm() {
	const [input, setInput] = useState('');

	return (
		<div className="...">
			<ComponentBadge
				name="ForgotPasswordForm"
				className="..."
			/>
			<h1 className="...">Recuperar sua senha</h1>
			<input
				placeholder="Digite seu email"
				className="..."
				value={input}
				onChange={({ target }) => setInput(target.value)}
			/>

			<ForgotEmail />

			<div className="...">
				<RenderInfo
					className="..."
					componentTree="[ SimpleRender -> ForgotPasswordForm ]"
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
	code,
	path: 'src/pages/SimpleRender/ForgotPasswordForm/ForgotPasswordForm.tsx',
	title: 'ForgotPasswordForm.tsx',
	position: 'left',
};

function ForgotPasswordForm() {
	const [input, setInput] = useState('');

	return (
		<div className="relative flex flex-col p-4 rounded-md w-[500px] h-[360px] bg-slate-800 border-2 border-dashed border-green-500">
			<ComponentBadge
				name="ForgotPasswordForm"
				jsx={jsx}
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
