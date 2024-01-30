import ComponentBadge from '../../../components/ComponentBadge';
import RenderInfo from '../../../components/RenderInfo';

function ForgotEmail() {
	return (
		<div className="relative mt-4 flex flex-col text-xs rounded-md border-2 border-dashed border-purple-400 p-2">
			<ComponentBadge
				name="ForgotEmail"
				className="text-purple-400 bg-slate-700"
			/>

			<button className="text-green-400 mb-4" type="button">
				Esqueci meu e-mail
			</button>

			<RenderInfo
				className="text-purple-400"
				componentTree="[ SimpleRender -> ForgotPasswordForm-> ForgotEmail ]"
			/>
		</div>
	);
}

export default ForgotEmail;
