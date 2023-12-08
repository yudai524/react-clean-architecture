import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'

@injectable()
export default class ToggleTodoCompletionInteractor implements types.IToggleTodoCompletionUseCase {
  @inject(symbols.ITodoListService) private todoListService: types.ITodoListService

  @inject(symbols.IAppErrorFactory) private errorFactory: types.IAppErrorFactory

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.ToggleTodoCompletionUseCaseOutputBase>

  async handle(input: types.ToggleTodoCompletionUseCaseInput): Promise<types.ToggleTodoCompletionUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({})
    const todoVM = input.todoVM
    const completedAt = todoVM.isCompleted ? null : new Date().toISOString()

    try {
      // Change local state first
      todoVM.setEntity({
        ...todoVM.entity,
        completedAt,
      })

      // Send request to complete task
      const todo = await this.todoListService.updateTodo({
        id: todoVM.id,
        attributes: {
          completedAt,
        },
      })

      // Save server response as local state
      input.todoVM.setEntity(todo)
    } catch (e) {
      // TODO: Revert to initial state on failure.
      output.error = this.errorFactory.create({
        originalInstance: e as Error,
      })
    }

    return output
  }
}
