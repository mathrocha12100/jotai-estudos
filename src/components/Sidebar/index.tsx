import { useAtom, useAtomValue } from 'jotai';
import { Menu } from 'lucide-react';
import { sidebarIsOpen } from '../../atoms/sidebar';
import { tv } from 'tailwind-variants';
import { ROUTES } from './routes';
import { useGlobalAtom } from '../../hooks/jotai-global';
import { global__showDebugIds } from '../../atoms/global';

const sidebar = tv({
	base:
		'w-[25vw] overflow-y-auto min-h-screen bg-zinc-800 p-2 select-none flex flex-col justify-between',
	variants: {
		closed: {
			true: 'w-[4vw]',
		},
	},
});

const debug = tv({
	base:
		'outline-none p-1 pl-2 pr-2 font-bold text-rose-500 rounded-md border-1 border-orange-400 border-dashed',
	variants: {
		on: {
			true: 'text-emerald-400 font-bold',
		},
	},
});

function SidebarFooter() {
	const [showDebug, setShowDebug] = useGlobalAtom(global__showDebugIds);
	const isOpen = useAtomValue(sidebarIsOpen);

	const statusText = showDebug ? 'ON' : 'OFF';
	const buttonText = isOpen ? 'DEBUG' : '';

	return (
		<div className="flex items-center justify-center border-t-1 pt-2 border-slate-100/20">
			<button
				onClick={() => setShowDebug(!showDebug)}
				className={debug({ on: showDebug })}
				type="button"
			>
				{buttonText} {statusText}
			</button>
		</div>
	);
}

function SidebarHeader() {
	const [isOpen, setIsOpen] = useAtom(sidebarIsOpen);

	return (
		<div className="flex items-center justify-between pb-2 border-b-1 border-slate-100/20">
			{isOpen && <span className="text-slate-100">Jotai Testing</span>}

			<button type="button" onClick={() => setIsOpen(!isOpen)}>
				<Menu className="text-slate-100" />
			</button>
		</div>
	);
}

function SidebarList() {
	const isPageActive = (currentPath: string) => {
		const path = window.location.pathname.substring(1);

		return path === currentPath;
	};

	return (
		<div className="mt-2">
			{ROUTES.map(({ group, routes }) => (
				<div key={group} className="border-b-1  pb-2 pt-2 border-slate-100/20">
					<span className="text-slate-50 font-semibold">{group}</span>
					<div className="mt-1 ml-3 flex flex-col">
						{routes.map(({ name, path }) => (
							<a
								key={path}
								className="mb-1 text-slate-300 text-sm italic flex items-center p-1 w-full hover:font-bold hover:bg-slate-400/30 rounded-md"
								href={path}
							>
								{isPageActive(path) && (
									<div className="w-2 h-2 bg-emerald-400 mr-2 rounded-full" />
								)}
								{name}
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

function Sidebar() {
	const isOpen = useAtomValue(sidebarIsOpen);

	return (
		<div id="global__sidebar" className={sidebar({ closed: !isOpen })}>
			<div className="flex flex-col">
				<SidebarHeader />
				{isOpen && <SidebarList />}
			</div>
			<SidebarFooter />
		</div>
	);
}

export default Sidebar;
