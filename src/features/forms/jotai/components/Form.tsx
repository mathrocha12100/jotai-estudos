import { useSetAtom } from 'jotai';
import FormBody from './FormBody';
import FormTop from './FormTop';
import { FormEvent } from 'react';
import { defaultProfile, userProfile } from '../../../../atoms/form';
import ComponentRenderedTag from '../../../../components/ComponentRenderedTag';
import Debug from './Debug';
import AlertCard from '../../../../components/AlertCard';

export type UserProfile = {
	login: string;
	email: string;

	phone: string;
	description: string;
	password: string;
};

function Form() {
	const updateForm = useSetAtom(userProfile);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		window.alert('Dados salvos!');
	};

	const resetForm = () => {
		updateForm(defaultProfile);
	};

	return (
		<div className="flex justify-between gap-4 w-full">
			<div className="border-2 border-dashed p-0.5 w-full border-orange-700">
				<AlertCard message="Aqui usamos o jotai para montar um formulario, mas que fique claro que e so um exemplo, nao vamos substituir um `react-hook-form` pelo jotai!" />

				<div className="flex justify-start mb-4">
					<ComponentRenderedTag orange />
				</div>
				<form
					onSubmit={onSubmit}
					className="max-w-[500px] flex flex-col justify-between p-2 bg-slate-900 w-max-[400px]"
				>
					<div>
						<FormTop />
						<FormBody />
					</div>
					<div className="mt-4 flex gap-3">
						<button
							type="submit"
							className="bg-blue-700 rounded-md text-slate-50 p-1 pl-2 pr-2 "
						>
							Salvar
						</button>
						<button
							onClick={resetForm}
							className="rounded-md text-slate-50 p-1 pl-2 pr-2 "
							type="reset"
						>
							Cancelar
						</button>
					</div>
				</form>
			</div>
			<Debug />
		</div>
	);
}

export default Form;
