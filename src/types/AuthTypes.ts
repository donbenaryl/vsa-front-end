export interface IUser {
  email: string;
  username?: string;
  password: string;
  rememberMe?: boolean;
}

export interface IChangePasswordParams {
  old_password: string;
  new_password: string;
  re_password: string;
}

export interface INewUser {
  email: string;
  password: string;
  re_password: string;
}