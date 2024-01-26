import ReactDOM from 'react-dom/client';
import router from './routes';
import './main.css';
import { RouterProvider } from 'react-router-dom';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />,
);
