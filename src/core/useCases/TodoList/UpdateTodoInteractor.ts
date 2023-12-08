import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'

@injectable()
export default class UpdateTodoInteractor implements types.IUpdateTodoUseCase {
  @inject(symbols.ITodoListService) private todoListService: types.ITodoListService

  @inject(symbols.IAppErrorFactory) private errorFactory: types.IAppErrorFactory

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.UpdateTodoUseCaseOutputBase>

  async handle(input: types.UpdateTodoUseCaseInput): Promise<types.UpdateTodoUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({})
    try {
      const todo = await this.todoListService.updateTodo({
        id: input.todoVM.id,
        attributes: input.attributes,
      })
      input.todoVM.setEntity(todo)
    } catch (e) {
      output.error = this.errorFactory.create({
        originalInstance: e as Error,
      })
    }

    return output
  }
}
