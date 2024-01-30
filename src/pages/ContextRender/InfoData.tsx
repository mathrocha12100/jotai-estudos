import ComponentBadge, {
	ComponentBadgeJSX,
} from '../../components/ComponentBadge';
import { FilterGender, useRenderContext } from './RenderContext';

type Statistic = {
	amount: number;
	likes: number;
};

type StatisticsData = {
	men: Statistic;
	woman: Statistic;
	other: Statistic;
};

const code = `import ComponentBadge, { ComponentBadgeJSX } from '../../components/ComponentBadge';
import { FilterGender, useRenderContext } from './RenderContext';

type Statistic = {
	amount: number;
	likes: number;
};

type StatisticsData = {
	men: Statistic;
	woman: Statistic;
	other: Statistic;
};

function InfoData() {
	const { getFilteredList } = useRenderContext();

	const users = getFilteredList();

	const getAllData = () => {
		const data: StatisticsData = {
			men: { amount: 0, likes: 0 },
			other: { amount: 0, likes: 0 },
			woman: { amount: 0, likes: 0 },
		};

		for (let i = 0; i < users.length; i++) {
			const user = users[i];

			const interestAdd = user.hasInterest ? 1 : 0;

			if (user.gender === FilterGender.MALE) {
				data.men.amount++;
				data.men.likes += interestAdd;
			}

			if (user.gender === FilterGender.FEMALE) {
				data.woman.amount++;
				data.woman.likes += interestAdd;
			}
			if (user.gender === FilterGender.OTHER) {
				data.other.amount++;
				data.other.likes += interestAdd;
			}
		}

		return data;
	};

	const statistics = getAllData();

	return (
		<div className="relative border-2 border-dashed border-pink-400 flex flex-col p-3 bg-slate-900 rounded-md text-slate-50 mt-2">
			<ComponentBadge name="InfoData" className="text-pink-400 bg-slate-700" />
			<span>
				QTD HOMENS {statistics.men.amount} | LIKES {statistics.men.likes}
			</span>
			<span>
				QTD MULHERES {statistics.woman.amount} | LIKES {statistics.woman.likes}
			</span>
			<span>
				QTD OUTROS {statistics.other.amount} | LIKES {statistics.other.likes}
			</span>
		</div>
	);
}`;

const jsx: ComponentBadgeJSX = {
	title: 'InfoData.tsx',
	path: 'src/pages/ContextRender/InfoData.tsx',
	code,
};

function InfoData() {
	const { getFilteredList } = useRenderContext();

	const users = getFilteredList();

	const getAllData = () => {
		const data: StatisticsData = {
			men: { amount: 0, likes: 0 },
			other: { amount: 0, likes: 0 },
			woman: { amount: 0, likes: 0 },
		};

		for (let i = 0; i < users.length; i++) {
			const user = users[i];

			const interestAdd = user.hasInterest ? 1 : 0;

			if (user.gender === FilterGender.MALE) {
				data.men.amount++;
				data.men.likes += interestAdd;
			}

			if (user.gender === FilterGender.FEMALE) {
				data.woman.amount++;
				data.woman.likes += interestAdd;
			}
			if (user.gender === FilterGender.OTHER) {
				data.other.amount++;
				data.other.likes += interestAdd;
			}
		}

		return data;
	};

	const statistics = getAllData();

	return (
		<div className="relative border-2 border-dashed border-pink-400 flex flex-col p-3 bg-slate-900 rounded-md text-slate-50 mt-2">
			<ComponentBadge
				jsx={jsx}
				name="InfoData"
				className="text-pink-400 bg-slate-700"
			/>
			<span>
				QTD HOMENS {statistics.men.amount} | LIKES {statistics.men.likes}
			</span>
			<span>
				QTD MULHERES {statistics.woman.amount} | LIKES {statistics.woman.likes}
			</span>
			<span>
				QTD OUTROS {statistics.other.amount} | LIKES {statistics.other.likes}
			</span>
		</div>
	);
}

export default InfoData;
