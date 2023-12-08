import {
  CreateTodoRequestInput,
  DeleteTodoRequestInput,
  Todo,
  TodoList,
  UpdateTodoRequestInput,
} from '@core/types/entities'

export type FetchTodoListsRequestInput = { limit: number }
export type FetchTodoListsRequestOutput = {
  todoLists: TodoList[]
  hasNextPage: boolean
}

export interface ITodoListService {
  fetchTodoLists(input: FetchTodoListsRequestInput): Promise<FetchTodoListsRequestOutput>

  createTodo(input: CreateTodoRequestInput): Promise<Todo>

  updateTodo(input: UpdateTodoRequestInput): Promise<Todo>

  deleteTodo(input: DeleteTodoRequestInput): Promise<Todo>
}
