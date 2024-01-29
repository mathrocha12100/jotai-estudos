import { useAtomValue } from 'jotai';
import { userProfileTop } from '../../../../atoms/form';
import ComponentRenderedTag from '../../../../components/ComponentRenderedTag';

function FormTop() {
	const { email, login } = useAtomValue(userProfileTop);

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
