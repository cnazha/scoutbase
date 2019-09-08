export interface IUser {
  id: number;
  name: string;
}

export interface IAuthUser {
  token: string;
  user: IUser;
}
