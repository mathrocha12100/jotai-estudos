import { AlertTriangle } from 'lucide-react';

type AlertCardProps = {
	message: string;
};

function AlertCard({ message }: AlertCardProps) {
	return (
		<div className="p-2 bg-orange-400 rounded-md">
			<div className="flex gap-2">
				<AlertTriangle className="text-slate-100" />
				<span className="font-bold text-slate-50">AVISO</span>
			</div>
			<p className="text-rose-700">{message}</p>
		</div>
	);
}

export default AlertCard;
