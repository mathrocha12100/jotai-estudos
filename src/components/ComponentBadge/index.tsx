import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Atom } from 'lucide-react';
import { tv } from 'tailwind-variants';
import ReactRendered from '../ReactRendered';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { memo, useRef } from 'react';

const componentBadge = tv({
	base: 'absolute top-1 right-1 p-1 rounded-md text-xs pl-2 pr-2 flex',
});

export type ComponentBadgeJSX = {
	path: string;
	title: string;
	code: string;
};

type ComponentBadgeProps = {
	name: string;
	className?: string;
	jsx?: ComponentBadgeJSX;
};

/**
 * Como fiz rapido e esse `SyntaxHighlighter` eh pesadinho coloquei esse `memo`
 * pra "resolver" uns problemas de performance
 */
const CodeShow = memo(({ jsx }: Pick<ComponentBadgeProps, 'jsx'>) => {
	if (!jsx?.code) return null;

	return (
		<SyntaxHighlighter showLineNumbers language="tsx" style={dracula}>
			{jsx.code}
		</SyntaxHighlighter>
	);
});

function ComponentBadge({ name, className, jsx }: ComponentBadgeProps) {
	const shouldShowCode = useRef<HTMLDivElement>(null);

	const isSomeCodeRendered = () => {
		return !!document.querySelector('.component-badge__show');
	};

	const showCode = () => {
		if (!shouldShowCode.current || isSomeCodeRendered()) return;

		shouldShowCode.current.classList.remove('hidden');
		shouldShowCode.current.classList.add('flex');
		shouldShowCode.current.classList.add('component-badge__show');
	};

	const hideCode = () => {
		if (!shouldShowCode.current) return;

		shouldShowCode.current.classList.remove('flex');
		shouldShowCode.current.classList.remove('component-badge__show');
		shouldShowCode.current.classList.add('hidden');
	};

	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation> */}
			<div onMouseOver={showCode} className={componentBadge({ className })}>
				<Atom className="w-4 h-4 mr-1 text-blue-500" />
				{name}
				<ReactRendered big className="text-slate-50 underline" />
			</div>
			{jsx && (
				<div
					ref={shouldShowCode}
					onMouseLeave={hideCode}
					className="relative w-full hidden"
				>
					<div className="absolute p-2 bg-slate-900 top-6 right-0 z-40 flex-col rounded-md border-1 border-slate-400/45 overflow-auto max-h-[600px] max-w-[900px]">
						<div className="flex items-center">
							<Atom className="w-5 h-5 mr-1 text-blue-500" />
							<h1 className="text-slate-100 text-lg font-bold">{jsx.title}</h1>
						</div>
						<span className="text-slate-400 text-sm">{jsx.path}</span>
						<CodeShow jsx={jsx} />
					</div>
				</div>
			)}
		</>
	);
}

export default ComponentBadge;
