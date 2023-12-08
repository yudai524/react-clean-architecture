import { ICreateDraftTodoUseCase, ITodoListVM, ITodoVM, TodoList } from '@core/types'
import BaseEntityVM from '@core/entityVMs/BaseEntityVM'
import { action, makeObservable, observable } from 'mobx'

type Dependencies = {
  list?: ITodoVM[]
  createDraftTodoUseCase: ICreateDraftTodoUseCase
}

export default class TodoListVM extends BaseEntityVM<TodoList, Dependencies> implements ITodoListVM {
  @observable list: ITodoVM[]

  constructor(entity, deps) {
    super(entity, deps)
    if (deps.list) {
      this.list = deps.list
    }

    // TODO: Use decorator. Using makeObservable() to avoid disabling experimentalDecorators flag.
    makeObservable(this)
  }

  createDraftTodo = async () => {
    return this._deps.createDraftTodoUseCase.handle({
      callbacks: {
        onCreate: this.onCreateTodo,
        onDelete: this.onDeleteTodo,
      },
    })
  }

  @action
  setList = (list: ITodoVM[]) => {
    this.list = list
  }

  onDeleteTodo = (todoVM: ITodoVM) => {
    console.log('id:', todoVM.id)
    console.log('list:', this.list)
    this.list = this.list.filter((t) => t.id !== todoVM.id)
  }

  onCreateTodo = (todoVM: ITodoVM) => {
    this.list.push(todoVM)
  }
}
