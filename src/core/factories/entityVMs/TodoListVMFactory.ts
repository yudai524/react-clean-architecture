import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import TodoListVM from '@core/entityVMs/TodoListVM'
import symbols from '@core/symbols'

@injectable()
export default class TodoListVMFactory implements types.ITodoListVMFactory {
  @inject(symbols.ITodoVMFactory) private todoVMFactory: types.ITodoVMFactory

  public create(input: types.TodoListVMFactoryInput): types.ITodoListVM {
    const list = input.entity.list.map(item => this.todoVMFactory.create({ entity: item }))
    return new TodoListVM(input.entity, { list })
  }
}
