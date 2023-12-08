import 'reflect-metadata'
import { Container } from 'inversify'
import symbols from '@core/symbols'
import { ITodoStore } from '@core/types/stores'
import TodoStore from '@core/stores/TodoStore'
import { ITodoListService } from '@core/types/services'
import AppGraphQLAPIGateway from '@core/gateways/AppGraphQLAPIGateway'
import { IAppErrorFactory, IUseCaseOutputFactory } from '@core/types/factories/entities'
import UseCaseOutputFactory from '@core/factories/entities/UseCaseOutputFactory'
import AppErrorFactory from '@core/factories/entities/AppErrorFactory'
import { ITodoListVMFactory, ITodoVMFactory } from '@core/types/factories/entityVMs'
import TodoListVMFactory from '@core/factories/entityVMs/TodoListVMFactory'
import TodoVMFactory from '@core/factories/entityVMs/TodoVMFactory'
import {
  ICreateDraftTodoUseCase,
  ICreateTodoUseCase,
  IDeleteTodoUseCase,
  IFetchTodoListsUseCase,
  IHandleErrorUseCase,
  IToggleTodoCompletionUseCase,
  IUpdateTodoUseCase,
} from '@core/types/useCases'
import FetchTodoListsInteractor from '@core/useCases/TodoList/FetchTodoListsInteractor'
import CreateTodoInteractor from '@core/useCases/TodoList/CreateTodoInteractor'
import UpdateTodoInteractor from '@core/useCases/TodoList/UpdateTodoInteractor'
import DeleteTodoInteractor from '@core/useCases/TodoList/DeleteTodoInteractor'
import ToggleTodoCompletionInteractor from '@core/useCases/TodoList/ToggleTodoCompletionInteractor'
import HandleErrorInteractor from '@core/useCases/Errors/HandleErrorInteractor'
import CreateDraftTodoInteractor from '@core/useCases/TodoList/CreateDraftTodoInteractor'

const container = new Container({ defaultScope: 'Singleton' })

container.bind<ITodoStore>(symbols.ITodoStore).to(TodoStore).inSingletonScope()
container.bind<ITodoListService>(symbols.ITodoListService).to(AppGraphQLAPIGateway).inSingletonScope()
container.bind<IUseCaseOutputFactory<never>>(symbols.IUseCaseOutputFactory).to(UseCaseOutputFactory).inSingletonScope()
container.bind<IAppErrorFactory>(symbols.IAppErrorFactory).to(AppErrorFactory).inSingletonScope()
container.bind<ITodoListVMFactory>(symbols.ITodoListVMFactory).to(TodoListVMFactory).inSingletonScope()
container.bind<ITodoVMFactory>(symbols.ITodoVMFactory).to(TodoVMFactory).inSingletonScope()
container.bind<IHandleErrorUseCase>(symbols.IHandleErrorUseCase).to(HandleErrorInteractor).inSingletonScope()
container.bind<IFetchTodoListsUseCase>(symbols.IFetchTodoListsUseCase).to(FetchTodoListsInteractor).inSingletonScope()
container.bind<ICreateTodoUseCase>(symbols.ICreateTodoUseCase).to(CreateTodoInteractor).inSingletonScope()
container.bind<IUpdateTodoUseCase>(symbols.IUpdateTodoUseCase).to(UpdateTodoInteractor).inSingletonScope()
container.bind<IDeleteTodoUseCase>(symbols.IDeleteTodoUseCase).to(DeleteTodoInteractor).inSingletonScope()
container
  .bind<IToggleTodoCompletionUseCase>(symbols.IToggleTodoCompletionUseCase)
  .to(ToggleTodoCompletionInteractor)
  .inSingletonScope()
container
  .bind<ICreateDraftTodoUseCase>(symbols.ICreateDraftTodoUseCase)
  .to(CreateDraftTodoInteractor)
  .inSingletonScope()

export { container }
