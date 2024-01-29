import { Provider } from 'jotai';
import Form from '../../features/forms/jotai/components/Form';

function JotaiUserForm() {
	return (
		<Provider>
			<Form />
		</Provider>
	);
}

export default JotaiUserForm;
