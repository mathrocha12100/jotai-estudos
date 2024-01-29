import Input from './Input';
import { UserProfile } from './Form';
import ComponentRenderedTag from '../../../../components/ComponentRenderedTag';
import { useFormContext } from '../contexts/FormContext';

function FormBody() {
	const { form, setForm } = useFormContext();

	const handleChangeField = (
		field: keyof Pick<UserProfile, 'description' | 'phone' | 'password'>,
		value: string,
	) => {
		setForm((state) => ({
			...state,
			[field]: value,
		}));
	};

	return (
		<div className="flex flex-col">
			<div className="w-full h-0.5 bg-slate-100/10 mb-2" />
			<div className="flex justify-end">
				<ComponentRenderedTag cyan />
			</div>
			<Input
				onChange={({ target }) => handleChangeField('phone', target.value)}
				value={form.phone}
				type="tel"
				label="Phone"
			/>
			<Input
				onChange={({ target }) => handleChangeField('description', target.value)}
				value={form.description}
				label="Description"
			/>
			<Input
				value={form.password}
				onChange={({ target }) => handleChangeField('password', target.value)}
				type="password"
				placeholder="Your super secret password"
				label="Password"
			/>
		</div>
	);
}

export default FormBody;
