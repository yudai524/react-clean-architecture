import { IBaseEntityVM } from '@core/types/entityVMs/base'
import { Todo, TodoInput, TodoList } from '@core/types/entities'
import {
  CreateTodoUseCaseOutput,
  DeleteTodoUseCaseOutput,
  ToggleTodoCompletionUseCaseOutput,
  UpdateTodoUseCaseOutput,
} from '@core/types/useCases'

export interface ITodoListVM extends IBaseEntityVM<TodoList> {
  list: ITodoVM[]
}

export interface ITodoVM extends IBaseEntityVM<Todo> {
  isCompleted: boolean

  create(input: TodoInput): Promise<CreateTodoUseCaseOutput>

  update(input: TodoInput): Promise<UpdateTodoUseCaseOutput>

  delete(): Promise<DeleteTodoUseCaseOutput>

  toggleCompletion(): Promise<ToggleTodoCompletionUseCaseOutput>
}
