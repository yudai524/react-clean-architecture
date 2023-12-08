import { ITodoListVM } from '@core/types/entityVMs'
import { FetchTodoListsUseCaseOutput } from '@core/types/useCases'

export interface ITodoStore {
  lists: ITodoListVM[]
  fetchTodoLists(input: { limit: number }): Promise<FetchTodoListsUseCaseOutput>
}
