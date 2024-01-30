import { useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import LoginForm from './LoginForm/LoginForm';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';
import RenderInfo from '../../components/RenderInfo';
import Secret from './Segredinho/Secret';

const code = `import { useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import LoginForm from './LoginForm/LoginForm';
import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';
import RenderInfo from '../../components/RenderInfo';
import Secret from './Segredinho/Secret';

function SimpleRender() {
	const [secretCode, setSecretGod] = useState('');

	return (
		<div className="...">
			<ComponentBadge
				name="SimpleRender"
				className="..."
			/>
			<div className="...">
				<ComponentBadge
					name="SimpleRender"
					className="..."
					jsx={jsx}
				/>

				<span className="...">
					Esse card esta esta no pai master dessa pagina
				</span>

				<input
					placeholder="Digite a frase secreta para descobrir um segredo"
					className="..."
					value={secretCode}
					onChange={({ target }) => setSecretGod(target.value)}
				/>

				<Secret secret={secretCode} />

				<RenderInfo className="..." componentTree="[ SimpleRender ]" />
			</div>
			<div className="...">
				<ForgotPasswordForm />
				<LoginForm />
			</div>
		</div>
	);
}
`;

const jsx: ComponentBadgeJSX = {
	title: 'index.tsx',
	path: 'src/pages/SimpleRender/index.tsx',
	position: 'right',
	code,
};

function SimpleRender() {
	const [secretCode, setSecretGod] = useState('');

	return (
		<div className="relative flex justify-center flex-col items-center min-h-screen gap-4 border-2 border-dashed border-yellow-400">
			<ComponentBadge
				name="SimpleRender"
				className="text-yellow-400 bg-zinc-800"
			/>
			<div className="bg-slate-950 relative p-4 rounded-md text-slate-100 flex flex-col">
				<ComponentBadge
					name="SimpleRender"
					className="text-yellow-400 bg-zinc-800"
					jsx={jsx}
				/>

				<span className="pb-4 border-b-1 mt-4 border-slate-100/40">
					Esse card esta esta no pai master dessa pagina
				</span>

				<input
					placeholder="Digite a frase secreta para descobrir um segredo"
					className="mt-4 mb-4 pl-2 outline-none p-1 bg-slate-900 placeholder:text-sm text-slate-300 rounded-md border-1 border-slate-700 text-md"
					value={secretCode}
					onChange={({ target }) => setSecretGod(target.value)}
				/>

				<Secret secret={secretCode} />

				<RenderInfo className="text-yellow-400" componentTree="[ SimpleRender ]" />
			</div>
			<div className="flex gap-4">
				<ForgotPasswordForm />
				<LoginForm />
			</div>
		</div>
	);
}

export default SimpleRender;
