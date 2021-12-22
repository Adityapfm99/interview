export type TodoItem = {
	id: string;
	title: string;
	done: boolean;
	dueDate: Date;
};

const todos: TodoItem[] = [
	{
		id: '1',
		title: 'Buy Groceries',
		done: false,
		dueDate: new Date('2022-01-01'),
	},
	{
		id: '2',
		title: 'Mop the floor',
		done: false,
		dueDate: new Date('2022-02-01'),
	},
	{
		id: '3',
		title: 'Wash the car',
		done: true,
		dueDate: new Date('2022-03-01'),
	},
];

/**
 * Gets all todos
 * @returns TodoItem[]
 */
export async function getTodos() {
	return todos;
}

/**
 * Adds a todo item
 * @returns TodoItem[]
 */
export async function createTodo(todoItem: Omit<TodoItem, 'id'>) {
	todos.push({ ...todoItem, id: todos.length.toString() });
	return todos;
}

/**
 * Toggles a todo item to done / not done
 * @returns TodoItem[]
 */
export async function completeTodo(todoId: string) {
	const todoToComplete = todos.find((todo) => todo.id === todoId);
	if (!todoToComplete) {
		throw new Error(`Todo item with id: ${todoId} does not exist!`);
	}
	todoToComplete.done = !todoToComplete.done;
	return todos;
}
