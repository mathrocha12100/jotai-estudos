import Form from '../../features/forms/react-context/components/Form';
import FormProvider from '../../features/forms/react-context/contexts/FormContext';

function ContextUserForm() {
	return (
		<FormProvider>
			<Form />
		</FormProvider>
	);
}

export default ContextUserForm;
