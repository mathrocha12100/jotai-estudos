import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';

function TodoListPage() {
	return (
		<div className="flex justify-center w-full p-4">
			<TodoProvider>
				<TodoList />
			</TodoProvider>
		</div>
	);
}

export default TodoListPage;
