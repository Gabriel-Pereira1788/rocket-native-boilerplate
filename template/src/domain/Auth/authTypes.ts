export interface UserApi {
  username: string;
  email: string;
  password: string;
  id: number;
  createdDate: Date;
  updatedDate: Date;
}

export interface User
  extends Omit<UserApi, 'createdDate' | 'updatedDate' | 'password'> {}
