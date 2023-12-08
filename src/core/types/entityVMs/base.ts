import { IBaseEntity } from "@core/types/entities";

export interface IBaseEntityVM<T = IBaseEntity> {
  id: string
  isDraft: boolean
  entity: T
  setEntity(entity: T): void
}
