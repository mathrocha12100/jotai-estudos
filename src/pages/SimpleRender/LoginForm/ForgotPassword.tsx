import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';
import RenderInfo from '../../../components/RenderInfo';

import code from './ForgotPassword?raw';

const jsx: ComponentBadgeJSX = {
	path: 'src/pages/SimpleRender/LoginForm/ForgotPassword.tsx',
	code,
	title: 'ForgotPassword.tsx',
	position: 'right',
};

function ForgotPassword() {
	return (
		<div className="relative mt-4 flex flex-col text-xs rounded-md border-2 border-dashed border-red-500 p-2">
			<ComponentBadge
				name="ForgotPassword"
				className="bg-slate-700 text-red-500"
				jsx={jsx}
			/>

			<button className="text-green-400 mb-4" type="button">
				Esqueci minha senha
			</button>

			<RenderInfo
				componentTree="[SimpleRender -> LoginForm -> ForgotPassword]"
				className="text-red-500"
			/>
		</div>
	);
}

export default ForgotPassword;
