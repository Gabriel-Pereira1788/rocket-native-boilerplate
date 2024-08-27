export interface UserApi {
  name: string;
  email: string;
  password: string;
  id: number;
  createdDate: Date;
  updatedDate: Date;
}

export interface User extends Omit<UserApi, 'createdDate' | 'updatedDate'> {}
