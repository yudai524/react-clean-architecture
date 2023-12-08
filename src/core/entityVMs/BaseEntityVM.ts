import { IBaseEntity, IBaseEntityVM } from "@core/types";
import { action, computed, makeObservable, observable } from "mobx";

export default class BaseEntityVM<E = IBaseEntity, D = {}>
  implements IBaseEntityVM<E>
{
  @computed get id(): string {
    return this.entity.id;
  }

  @computed get isDraft(): boolean {
    if (this.entity?.id) {
      return false;
    }

    return true;
  }

  @observable public entity: E & IBaseEntity;

  protected _deps: D;

  constructor(entity: E & IBaseEntity, deps: D) {
    this.entity = entity;
    this._deps = deps;

    // TODO: Use decorator
    makeObservable(this);
  }

  @action
  public setEntity(entity: E & IBaseEntity) {
    this.entity = entity;
  }
}
