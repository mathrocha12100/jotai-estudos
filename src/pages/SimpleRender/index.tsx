import { useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import LoginForm from './LoginForm';
import ComponentBadge from '../../components/ComponentBadge';
import RenderInfo from '../../components/RenderInfo';

const SECRET_CODES = [
	'tropa da lala',
	'andamos de crocodilo mas nao aceitamos crocodilagem',
	'faz o l de lacoste',
	'e pra comecar o final de semana',
	'lacoste',
];

function SimpleRender() {
	const isSecretCodeSuccess = (text: string) => {
		return SECRET_CODES.includes(text.toLocaleLowerCase());
	};

	const [secretCode, setSecretGod] = useState('');

	return (
		<div className="relative flex justify-center flex-col items-center h-full gap-4 border-2 border-dashed border-yellow-400">
			<ComponentBadge
				name="SimpleRender"
				className="text-yellow-400 bg-zinc-800"
			/>
			<div className="bg-slate-950 relative p-4 rounded-md text-slate-100 flex flex-col">
				<ComponentBadge
					name="SimpleRender"
					className="text-yellow-400 bg-zinc-800"
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

				{isSecretCodeSuccess(secretCode) && (
					<div className="mt-4 mb-4">
						<h1 className="text-emerald-300 text-lg italic">
							Voce fez o L de lacoste 🐊
						</h1>
					</div>
				)}

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
