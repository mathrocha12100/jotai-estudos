import ComponentRenderedTag from '../../../../components/ComponentRenderedTag';
import { useFormContext } from '../contexts/FormContext';

function FormTop() {
	const { form } = useFormContext();

	const { login, email } = form;

	return (
		<div className="flex flex-col mb-2">
			<div className="flex justify-between">
				<span className="text-lg text-slate-50">{login}</span>

				<ComponentRenderedTag emerald />
			</div>
			<span className="text-sm text-slate-400">{email}</span>
		</div>
	);
}

export default FormTop;
