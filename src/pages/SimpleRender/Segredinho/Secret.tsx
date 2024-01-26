const SECRET_CODES = [
	'tropa da lala',
	'andamos de crocodilo mas nao aceitamos crocodilagem',
	'faz o l de lacoste',
];

type SecretProps = {
	secret: string;
};

function Secret({ secret }: SecretProps) {
	const isSecretCodeSuccess = (text: string) => {
		return SECRET_CODES.includes(text.toLocaleLowerCase());
	};

	return isSecretCodeSuccess(secret) ? (
		<div className="mt-4 mb-4">
			<h1 className="text-emerald-300 text-lg italic">
				Voce fez o L de lacoste 🐊
			</h1>
		</div>
	) : null;
}

export default Secret;
