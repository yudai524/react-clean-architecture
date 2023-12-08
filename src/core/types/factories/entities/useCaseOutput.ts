import { IUseCaseOutput } from '@core/types/entities'

// UseCaseOutputFactory
export type UseCaseOutputFactoryInput<T> = {
  defaultValue?: T
}

export interface IUseCaseOutputFactory<T> {
  create(input: UseCaseOutputFactoryInput<T>): IUseCaseOutput<T>
}
