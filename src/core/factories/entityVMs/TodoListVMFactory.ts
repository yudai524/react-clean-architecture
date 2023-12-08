import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import TodoListVM from '@core/entityVMs/TodoListVM'
import symbols from '@core/symbols'

@injectable()
export default class TodoListVMFactory implements types.ITodoListVMFactory {
  @inject(symbols.ITodoVMFactory) private todoVMFactory: types.ITodoVMFactory

  @inject(symbols.ICreateDraftTodoUseCase) public createDraftTodoUseCase: types.ICreateDraftTodoUseCase

  public create(input: types.TodoListVMFactoryInput): types.ITodoListVM {
    const todoList = new TodoListVM(input.entity, { list: [], createDraftTodoUseCase: this.createDraftTodoUseCase })
    const list = input.entity.list.map((item) =>
      this.todoVMFactory.create({
        entity: item,
        callbacks: {
          onDelete: todoList.onDeleteTodo,
          onCreate: todoList.onCreateTodo,
        },
      })
    )
    todoList.setList(list)
    return todoList
  }
}
