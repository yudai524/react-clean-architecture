const symbols = {
  ICreateDraftTodoUseCase: Symbol.for('ICreateDraftTodoUseCase'),
  IHandleErrorUseCase: Symbol.for('IHandleErrorUseCase'),
  IToggleTodoCompletionUseCase: Symbol.for('IToggleTodoCompletionUseCase'),
  IDeleteTodoUseCase: Symbol.for('IDeleteTodoUseCase'),
  IUpdateTodoUseCase: Symbol.for('IUpdateTodoUseCase'),
  ICreateTodoUseCase: Symbol.for('ICreateTodoUseCase'),
  IFetchTodoListsUseCase: Symbol.for('IFetchTodoListsUseCase'),
  ITodoVMFactory: Symbol.for('ITodoVMFactory'),
  ITodoListVMFactory: Symbol.for('ITodoListVMFactory'),
  IAppErrorFactory: Symbol.for('IAppErrorFactory'),
  IUseCaseOutputFactory: Symbol.for('IUseCaseOutputFactory'),
  ITodoListService: Symbol.for('ITodoListService'),
  ITodoStore: Symbol.for('ITodoStore'),
}

export default symbols
