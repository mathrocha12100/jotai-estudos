import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';

type SecretProps = {
	secret: string;
};

const SECRET_CODES = [
	'tropa da lala',
	'andamos de crocodilo mas nao aceitamos crocodilagem',
	'faz o l de lacoste',
];

const code = `import ComponentBadge, { ComponentBadgeJSX } from '../../../components/ComponentBadge';

type SecretProps = {
	secret: string;
};

const SECRET_CODES = [
	't**** ** lala', // censurado
	'******* de crocodilo *** *** a******os crocodilagem', // censurado
	'f*z * * ** lacoste', // censurado
];

function Secret({ secret }: SecretProps) {
	const isSecretCodeSuccess = (text: string) => {
		return SECRET_CODES.includes(text.toLocaleLowerCase());
	};

	return (
		<div className="mt-4 mb-4 relative border-2 border-dashed border-pink-500 min-h-[40px] p-2">
			<ComponentBadge name="Secret" className="p-1 bg-slate-600 text-pink-500" />
			{isSecretCodeSuccess(secret) && (
				{/*O Conteudo daqui e segredo :P*/}
			)}
		</div>
	);
}`;

const jsx: ComponentBadgeJSX = {
	title: 'Secret.tsx',
	path: 'src/pages/SimpleRender/Segredinho/Secret.tsx',
	position: 'right',
	code,
};

function Secret({ secret }: SecretProps) {
	const isSecretCodeSuccess = (text: string) => {
		return SECRET_CODES.includes(text.toLocaleLowerCase());
	};

	return (
		<div className="mt-4 mb-4 relative border-2 border-dashed border-pink-500 min-h-[40px] p-2">
			<ComponentBadge
				jsx={jsx}
				name="Secret"
				className="p-1 bg-slate-600 text-pink-500"
			/>
			{isSecretCodeSuccess(secret) && (
				<div className="mt-6">
					<h1 className="text-emerald-300 text-lg italic">
						Agora voce faz parte da tropa da lacoste 🐊
					</h1>
				</div>
			)}
		</div>
	);
}

export default Secret;
