import { inject, injectable } from 'inversify'
import AppError from '@core/entities/AppError'
import symbols from '@core/symbols'
import * as types from '@core/types'

@injectable()
export default class AppErrorFactory implements types.IAppErrorFactory {
  @inject(symbols.IHandleErrorUseCase) private handleErrorUseCase: types.IHandleErrorUseCase

  public create(input: types.AppErrorFactoryInput): types.IAppError {
    return new AppError(
      {
        originalInstance: input.originalInstance,
      },
      {
        handleErrorUseCase: this.handleErrorUseCase,
      }
    )
  }
}
