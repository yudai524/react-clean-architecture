import { Todo, TodoList } from '@core/types/entities'
import { ITodoListVM, ITodoVM, ITodoVMCallBacks } from '@core/types/entityVMs'

export type TodoVMFactoryInput = {
  entity?: Todo
  callbacks: ITodoVMCallBacks
}

export interface ITodoVMFactory {
  create(input: TodoVMFactoryInput): ITodoVM
}

export type TodoListVMFactoryInput = {
  entity: TodoList
}

export interface ITodoListVMFactory {
  create(input: TodoListVMFactoryInput): ITodoListVM
}
