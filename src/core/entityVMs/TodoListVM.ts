import { ITodoListVM, ITodoVM, TodoList, } from '@core/types'
import BaseEntityVM from "@core/entityVMs/BaseEntityVM";
import { observable } from "mobx";

type Dependencies = {
  list: ITodoVM[]
}

export default class TodoListVM extends BaseEntityVM<TodoList, Dependencies> implements ITodoListVM {
  @observable list: ITodoVM[]

  constructor(entity, deps) {
    super(entity, deps);
    this.list = deps.list
  }

  // TODO
}
