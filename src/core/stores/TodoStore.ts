import { action, observable } from "mobx";
import { inject, injectable } from "inversify";
import * as types from "@core/types";
import symbols from "@core/symbols";

@injectable()
export default class TodoStore implements types.ITodoStore {
  @inject(symbols.IFetchTodoListsUseCase)
  private fetchTodoListsUseCase: types.IFetchTodoListsUseCase;

  @observable lists: types.ITodoListVM[] = [];

  async fetchTodoLists(input: {
    limit: number;
  }): Promise<types.FetchTodoListsUseCaseOutput> {
    const output = await this.fetchTodoListsUseCase.handle({
      limit: input.limit,
    });

    if (output.isSuccessful) {
      this._addTodoLists(output.data.lists);
    }

    return output;
  }

  @action
  _addTodoLists(lists: types.ITodoListVM[]): void {
    this.lists = this.lists.concat(lists);
  }
}
