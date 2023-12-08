import { IUseCaseOutput } from '@core/types/entities'

export default class UseCaseOutput<T> implements IUseCaseOutput<T> {
  error = null

  data = null

  constructor(defaultValue?: T) {
    this.data = defaultValue
  }

  get isSuccessful(): boolean {
    // エラーが無ければ成功
    if (this.error === null) {
      return true
    }

    return false
  }
}
