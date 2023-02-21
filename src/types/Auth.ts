import { IUser } from "./User";

export interface ISignUpPayload {
  email: string;
  password: string;
  firstName: string;
  secondName: string;
}

export interface ISignInPayload {
  email: string;
  password: string;
}

export interface IServerError<T = Record<string, unknown>> {
  code: string;
  message?: string;
  data: T;
}

export interface IAuth {
  token: string;
  data: IUser;
}
