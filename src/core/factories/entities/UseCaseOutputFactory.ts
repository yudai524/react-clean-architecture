import { injectable } from 'inversify'
import { IUseCaseOutput } from '@core/types/entities'
import { IUseCaseOutputFactory, UseCaseOutputFactoryInput } from '@core/types/factories/entities'
import UseCaseOutput from '@core/entities/UseCaseOutput'

@injectable()
export default class UseCaseOutputFactory<T> implements IUseCaseOutputFactory<T> {
  public create(input: UseCaseOutputFactoryInput<T>): IUseCaseOutput<T> {
    return new UseCaseOutput(input?.defaultValue)
  }
}
