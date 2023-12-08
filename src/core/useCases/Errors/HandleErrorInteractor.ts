import { inject, injectable } from 'inversify'
import * as types from '@core/types'
import symbols from '@core/symbols'

@injectable()
export default class HandleErrorInteractor implements types.IHandleErrorUseCase {
  // @inject(symbols.IErrorTrackingService) private errorTrackingService: IErrorTrackingService

  @inject(symbols.IUseCaseOutputFactory)
  private useCaseOutputFactory: types.IUseCaseOutputFactory<types.HandleErrorUseCaseOutputBase>

  async handle(input: types.HandleErrorUseCaseInput): Promise<types.HandleErrorUseCaseOutput> {
    const output = this.useCaseOutputFactory.create({})

    // TODO: Error handling logic here. eg., Sending an error to Sentry. Discarding the user session.
    // this.errorTrackingService.reportError(input.base.originalInstance)

    return output
  }
}
