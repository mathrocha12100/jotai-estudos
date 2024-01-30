import ComponentBadge from '../../../components/ComponentBadge';
import RenderInfo from '../../../components/RenderInfo';

function ForgotPassword() {
	return (
		<div className="relative mt-4 flex flex-col text-xs rounded-md border-2 border-dashed border-red-500 p-2">
			<ComponentBadge
				name="ForgotPassword"
				className="bg-slate-700 text-red-500"
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
