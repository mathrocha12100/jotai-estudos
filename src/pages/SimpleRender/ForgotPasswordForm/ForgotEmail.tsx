import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';
import RenderInfo from '../../../components/RenderInfo';

const code = `import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../../components/ComponentBadge';
import RenderInfo from '../../../components/RenderInfo';

function ForgotEmail() {
	return (
		<div className="...">
			<ComponentBadge
				name="ForgotEmail"
				className="..."
				jsx={jsx}
			/>

			<button className="..." type="button">
				Esqueci meu e-mail
			</button>

			<RenderInfo
				className="..."
				componentTree="[ SimpleRender -> ForgotPasswordForm-> ForgotEmail ]"
			/>
		</div>
	);
}
`;

const jsx: ComponentBadgeJSX = {
	title: 'ForgotEmail.tsx',
	path: 'src/pages/SimpleRender/ForgotPasswordForm/ForgotEmail.tsx',
	position: 'left',
	code,
};

function ForgotEmail() {
	return (
		<div className="relative mt-4 flex flex-col text-xs rounded-md border-2 border-dashed border-purple-400 p-2">
			<ComponentBadge
				name="ForgotEmail"
				className="text-purple-400 bg-slate-700"
				jsx={jsx}
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
