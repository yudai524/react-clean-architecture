import { IUseCaseOutput, Todo, TodoInput } from '@core/types/entities'
import { FetchTodoListsRequestInput } from '@core/types/services'
import { ITodoListVM, ITodoVM, ITodoVMCallBacks } from '@core/types/entityVMs'

// ============================================================
// FetchTodoListsUseCase
// ============================================================
export type FetchTodoListsUseCaseInput = FetchTodoListsRequestInput
export type FetchTodoListsUseCaseOutputBase = {
  lists: ITodoListVM[]
  hasNextPage: boolean
}
export type FetchTodoListsUseCaseOutput = IUseCaseOutput<FetchTodoListsUseCaseOutputBase>

export interface IFetchTodoListsUseCase {
  handle(input: FetchTodoListsUseCaseInput): Promise<FetchTodoListsUseCaseOutput>
}

// ============================================================
// CreateTodoUseCase
// ============================================================
export type CreateTodoUseCaseInput = {
  todoVM: ITodoVM
  attributes: TodoInput
}
export type CreateTodoUseCaseOutputBase = {}
export type CreateTodoUseCaseOutput = IUseCaseOutput<CreateTodoUseCaseOutputBase>

export interface ICreateTodoUseCase {
  handle(input: CreateTodoUseCaseInput): Promise<CreateTodoUseCaseOutput>
}

// ============================================================
// UpdateTodoUseCase
// ============================================================
export type UpdateTodoUseCaseInput = {
  todoVM: ITodoVM
  attributes: TodoInput
}
export type UpdateTodoUseCaseOutputBase = {}
export type UpdateTodoUseCaseOutput = IUseCaseOutput<UpdateTodoUseCaseOutputBase>

export interface IUpdateTodoUseCase {
  handle(input: UpdateTodoUseCaseInput): Promise<UpdateTodoUseCaseOutput>
}

// ============================================================
// DeleteTodoUseCase
// ============================================================
export type DeleteTodoUseCaseInput = {
  todoVM: ITodoVM
}
export type DeleteTodoUseCaseOutputBase = {}
export type DeleteTodoUseCaseOutput = IUseCaseOutput<DeleteTodoUseCaseOutputBase>

export interface IDeleteTodoUseCase {
  handle(input: DeleteTodoUseCaseInput): Promise<DeleteTodoUseCaseOutput>
}

// ============================================================
// ToggleTodoCompletionUseCase
// ============================================================
export type ToggleTodoCompletionUseCaseInput = {
  todoVM: ITodoVM
}
export type ToggleTodoCompletionUseCaseOutputBase = {}
export type ToggleTodoCompletionUseCaseOutput = IUseCaseOutput<ToggleTodoCompletionUseCaseOutputBase>

export interface IToggleTodoCompletionUseCase {
  handle(input: ToggleTodoCompletionUseCaseInput): Promise<ToggleTodoCompletionUseCaseOutput>
}

// ============================================================
// CreateDraftTodoUseCase
// ============================================================
export type CreateDraftTodoUseCaseInput = {
  callbacks: ITodoVMCallBacks
  entity?: Todo
}
export type CreateDraftTodoUseCaseOutputBase = {
  todoVM: ITodoVM
}
export type CreateDraftTodoUseCaseOutput = IUseCaseOutput<CreateDraftTodoUseCaseOutputBase>

export interface ICreateDraftTodoUseCase {
  handle(input: CreateDraftTodoUseCaseInput): Promise<CreateDraftTodoUseCaseOutput>
}
