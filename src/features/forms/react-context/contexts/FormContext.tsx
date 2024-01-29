import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';
import { UserProfile } from '../components/Form';
import { defaultProfile } from '../../../../atoms/form';

type FormContextProps = {
	setForm: Dispatch<SetStateAction<UserProfile>>;
	form: UserProfile;
};

const FormContext = createContext<FormContextProps>({} as FormContextProps);

function FormProvider({ children }: PropsWithChildren) {
	const [form, setForm] = useState<UserProfile>(defaultProfile);

	const value = useMemo<FormContextProps>(
		() => ({
			form,
			setForm,
		}),
		[form],
	);

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormContext() {
	const context = useContext(FormContext);

	return context;
}

export default FormProvider;
