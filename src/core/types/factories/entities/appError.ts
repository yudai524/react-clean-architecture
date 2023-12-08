import { ErrorCode, IAppError } from '@core/types/entities'

// AppErrorFactory
export type AppErrorFactoryInput = {
  originalInstance: Error
  code?: ErrorCode
}

export interface IAppErrorFactory {
  create(input: AppErrorFactoryInput): IAppError
}
