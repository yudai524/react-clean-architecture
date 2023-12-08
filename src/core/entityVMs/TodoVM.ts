import {
  CreateTodoUseCaseOutput,
  DeleteTodoUseCaseOutput,
  ICreateTodoUseCase,
  IDeleteTodoUseCase,
  ITodoVM,
  ITodoVMCallBacks,
  IToggleTodoCompletionUseCase,
  IUpdateTodoUseCase,
  Todo,
  TodoInput,
  ToggleTodoCompletionUseCaseOutput,
  UpdateTodoUseCaseOutput,
} from "@core/types";
import BaseEntityVM from "@core/entityVMs/BaseEntityVM";
import { computed, makeObservable } from "mobx";

type Dependencies = {
  createTodoUseCase: ICreateTodoUseCase;
  updateTodoUseCase: IUpdateTodoUseCase;
  deleteTodoUseCase: IDeleteTodoUseCase;
  toggleTodoCompletionUseCase: IToggleTodoCompletionUseCase;
  callbacks: ITodoVMCallBacks;
};

export default class TodoVM
  extends BaseEntityVM<Todo, Dependencies>
  implements ITodoVM
{
  callbacks: ITodoVMCallBacks;

  @computed
  get isCompleted(): boolean {
    return !!this.entity.completedAt;
  }

  // TODO: Use decorator
  constructor(entity: Todo, deps: Dependencies) {
    super(entity, deps);
    this.callbacks = deps.callbacks;
    makeObservable(this);
  }

  async create(input: TodoInput): Promise<CreateTodoUseCaseOutput> {
    return this._deps.createTodoUseCase.handle({
      todoVM: this,
      attributes: input,
    });
  }

  async update(input: TodoInput): Promise<UpdateTodoUseCaseOutput> {
    return this._deps.updateTodoUseCase.handle({
      todoVM: this,
      attributes: input,
    });
  }

  async delete(): Promise<DeleteTodoUseCaseOutput> {
    return this._deps.deleteTodoUseCase.handle({ todoVM: this });
  }

  async toggleCompletion(): Promise<ToggleTodoCompletionUseCaseOutput> {
    return this._deps.toggleTodoCompletionUseCase.handle({ todoVM: this });
  }
}
