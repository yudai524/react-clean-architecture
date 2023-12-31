import { inject, injectable } from "inversify";
import * as types from "@core/types";
import symbols from "@core/symbols";

@injectable()
export default class CreateTodoInteractor implements types.ICreateTodoUseCase {
  @inject(symbols.ITodoListService)
  private todoListService: types.ITodoListService;

  @inject(symbols.IAppErrorFactory)
  private errorFactory: types.IAppErrorFactory;

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.CreateTodoUseCaseOutputBase>;

  async handle(
    input: types.CreateTodoUseCaseInput,
  ): Promise<types.CreateTodoUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({});
    const todoVM = input.todoVM;
    try {
      const todo = await this.todoListService.createTodo({
        attributes: input.attributes,
      });
      todoVM.setEntity(todo);
      todoVM.callbacks.onCreate(todoVM);
    } catch (e) {
      output.error = this.errorFactory.create({
        originalInstance: e as Error,
      });
    }

    return output;
  }
}
