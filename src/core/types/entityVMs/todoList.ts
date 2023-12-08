import { IBaseEntityVM } from '@core/types/entityVMs/base'
import { Todo, TodoInput, TodoList } from '@core/types/entities'
import {
  CreateDraftTodoUseCaseOutput,
  CreateTodoUseCaseOutput,
  DeleteTodoUseCaseOutput,
  ToggleTodoCompletionUseCaseOutput,
  UpdateTodoUseCaseOutput,
} from '@core/types/useCases'

export interface ITodoListVM extends IBaseEntityVM<TodoList> {
  list: ITodoVM[]

  createDraftTodo(): Promise<CreateDraftTodoUseCaseOutput>
}

export type ITodoVMCallBacks = {
  onCreate: (todoVM: ITodoVM) => void
  onDelete: (todoVM: ITodoVM) => void
}

export interface ITodoVM extends IBaseEntityVM<Todo> {
  isCompleted: boolean

  callbacks: ITodoVMCallBacks

  create(input: TodoInput): Promise<CreateTodoUseCaseOutput>

  update(input: TodoInput): Promise<UpdateTodoUseCaseOutput>

  delete(): Promise<DeleteTodoUseCaseOutput>

  toggleCompletion(): Promise<ToggleTodoCompletionUseCaseOutput>
}
