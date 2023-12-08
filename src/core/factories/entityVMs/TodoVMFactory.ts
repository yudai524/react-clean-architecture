import { inject, injectable } from 'inversify'
import { v4 as uuidv4 } from 'uuid'
import * as types from '@core/types'
import { Todo } from '@core/types'
import symbols from '@core/symbols'
import TodoVM from '@core/entityVMs/TodoVM'

@injectable()
export default class TodoVMFactory implements types.ITodoVMFactory {
  @inject(symbols.ICreateTodoUseCase) public createTodoUseCase: types.ICreateTodoUseCase

  @inject(symbols.IUpdateTodoUseCase) public updateTodoUseCase: types.IUpdateTodoUseCase

  @inject(symbols.IDeleteTodoUseCase) public deleteTodoUseCase: types.IDeleteTodoUseCase

  @inject(symbols.IToggleTodoCompletionUseCase) public toggleTodoCompletionUseCase: types.IToggleTodoCompletionUseCase

  public create(input: types.TodoVMFactoryInput): types.ITodoVM {
    const entity: Todo = input.entity || {
      id: uuidv4(),
      title: '',
      summary: '',
      createdAt: new Date().toISOString(),
      updatedAt: null,
      completedAt: null,
    }
    return new TodoVM(entity, {
      createTodoUseCase: this.createTodoUseCase,
      updateTodoUseCase: this.updateTodoUseCase,
      deleteTodoUseCase: this.deleteTodoUseCase,
      toggleTodoCompletionUseCase: this.toggleTodoCompletionUseCase,
      callbacks: input.callbacks,
    })
  }
}
