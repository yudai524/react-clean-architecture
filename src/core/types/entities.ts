export * from "../gateways/lib/__generated__/sdk";

export type Primitive =
  | number
  | string
  | boolean
  | bigint
  | symbol
  | null
  | undefined;

export type IOriginalErrorInstance = Error & {
  extra?: Record<string, unknown>;
};

export interface IAppErrorBase {
  originalInstance: null | IOriginalErrorInstance;
  messageForUI?: null | string;
  code?: ErrorCode;
  tags?: {
    [key: string]: Primitive;
  };
  extra?: Record<string, unknown>;
}

export enum ErrorCode {
  DEFAULT = "DEFAULT",
  NOT_AUTHORIZED_ERROR = "NOT_AUTHORIZED_ERROR",
}

export interface IAppError {
  base: IAppErrorBase;
  code: ErrorCode;
  message: string;
}

export interface IUseCaseOutput<T = any> {
  data: T;
  error: null | IAppError;
  isSuccessful: boolean;
}

export interface IBaseEntity {
  id: string;
}
