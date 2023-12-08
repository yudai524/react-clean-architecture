import { action, makeObservable, observable } from "mobx";
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

  // TODO: Use decorator
  constructor() {
    makeObservable(this);
  }

  @action
  _addTodoLists(lists: types.ITodoListVM[]): void {
    const newLists = lists.filter((newList) => {
      const isDuplicate = this.lists.some((list) => list.id === newList.id);
      return !isDuplicate;
    });

    this.lists = this.lists.concat(newLists);
  }
}
