import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'

@injectable()
export default class FetchTodoListsInteractor implements types.IFetchTodoListsUseCase {
  @inject(symbols.ITodoListService) private todoListService: types.ITodoListService

  @inject(symbols.IAppErrorFactory) private errorFactory: types.IAppErrorFactory

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.FetchTodoListsUseCaseOutputBase>

  @inject(symbols.ITodoListVMFactory) private todoListVMFactory: types.ITodoListVMFactory

  async handle(input: types.FetchTodoListsUseCaseInput): Promise<types.FetchTodoListsUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({
      defaultValue: {
        lists: [],
        hasNextPage: true,
      },
    })

    try {
      const { todoLists, hasNextPage } = await this.todoListService.fetchTodoLists(input)
      output.data.lists = todoLists.map((t) => this.todoListVMFactory.create({ entity: t }))
      output.data.hasNextPage = hasNextPage
    } catch (e) {
      output.error = this.errorFactory.create({
        originalInstance: e as Error,
      })
    }

    return output
  }
}
