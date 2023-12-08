import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'

@injectable()
export default class CreateDraftTodoInteractor implements types.ICreateDraftTodoUseCase {
  @inject(symbols.ITodoVMFactory) private todoVMFactory: types.ITodoVMFactory

  @inject(symbols.IAppErrorFactory) private errorFactory: types.IAppErrorFactory

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.CreateDraftTodoUseCaseOutputBase>

  async handle(input: types.CreateDraftTodoUseCaseInput): Promise<types.CreateDraftTodoUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({
      defaultValue: {
        todoVM: null,
      },
    })
    try {
      output.data.todoVM = this.todoVMFactory.create({
        entity: input?.entity,
        callbacks: input.callbacks,
      })
    } catch (e) {
      output.error = this.errorFactory.create({
        originalInstance: e as Error,
      })
    }

    return output
  }
}
