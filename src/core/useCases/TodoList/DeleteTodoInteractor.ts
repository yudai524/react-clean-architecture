import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'

@injectable()
export default class DeleteTodoInteractor implements types.IDeleteTodoUseCase {
  @inject(symbols.ITodoListService)
  private todoListService: types.ITodoListService

  @inject(symbols.IAppErrorFactory)
  private errorFactory: types.IAppErrorFactory

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.DeleteTodoUseCaseOutputBase>

  async handle(input: types.DeleteTodoUseCaseInput): Promise<types.DeleteTodoUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({})
    const todoVM = input.todoVM
    try {
      await this.todoListService.deleteTodo({
        id: todoVM.id,
      })
      todoVM.callbacks.onDelete(todoVM)
    } catch (e) {
      output.error = this.errorFactory.create({
        originalInstance: e as Error,
      })
    }

    return output
  }
}
