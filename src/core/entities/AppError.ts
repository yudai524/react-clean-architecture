import { ErrorCode, IAppError, IAppErrorBase } from '@core/types/entities'
import { IHandleErrorUseCase } from '@core/types/useCases'

type Deps = {
  handleErrorUseCase: IHandleErrorUseCase
}

export default class AppError implements IAppError {
  base: IAppErrorBase

  private _deps: Deps

  get message(): string {
    return this.base.messageForUI || ''
  }

  get code(): ErrorCode {
    return this.base.code || ErrorCode.DEFAULT
  }

  constructor(base: IAppErrorBase, deps: Deps) {
    this.base = base
    this._deps = deps
    this._handleOriginalInstance()
  }

  private _handleOriginalInstance(): void {
    this._deps.handleErrorUseCase.handle({ base: this.base })
  }
}
