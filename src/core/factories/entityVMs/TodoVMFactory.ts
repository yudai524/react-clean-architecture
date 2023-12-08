import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'
import TodoVM from '@core/entityVMs/TodoVM'

@injectable()
export default class TodoVMFactory implements types.ITodoVMFactory {
  @inject(symbols.ICreateTodoUseCase) public createTodoUseCase: types.ICreateTodoUseCase

  @inject(symbols.IUpdateTodoUseCase) public updateTodoUseCase: types.IUpdateTodoUseCase

  @inject(symbols.IDeleteTodoUseCase) public deleteTodoUseCase: types.IDeleteTodoUseCase

  @inject(symbols.IToggleTodoCompletionUseCase) public toggleTodoCompletionUseCase: types.IToggleTodoCompletionUseCase

  public create(input: types.TodoVMFactoryInput): types.ITodoVM {
    return new TodoVM(input.entity, {
      createTodoUseCase: this.createTodoUseCase,
      updateTodoUseCase: this.updateTodoUseCase,
      deleteTodoUseCase: this.deleteTodoUseCase,
      toggleTodoCompletionUseCase: this.toggleTodoCompletionUseCase,
    })
  }
}
