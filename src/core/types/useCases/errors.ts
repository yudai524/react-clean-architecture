import { IAppErrorBase, IUseCaseOutput } from '@core/types/entities'

// ============================================================
// HandleErrorUseCase
// ============================================================
export type HandleErrorUseCaseInput = {
  base: IAppErrorBase
}
export type HandleErrorUseCaseOutputBase = {}
export type HandleErrorUseCaseOutput = IUseCaseOutput<HandleErrorUseCaseOutputBase>
export interface IHandleErrorUseCase {
  handle(input: HandleErrorUseCaseInput): Promise<HandleErrorUseCaseOutput>
}
