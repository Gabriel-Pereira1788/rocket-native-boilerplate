import { User, UserApi } from './authTypes';

function toUser(userApi: UserApi): User {
  return {
    id: userApi.id,
    email: userApi.email,
    name: userApi.name,
    password: userApi.password,
  };
}

export const authAdapter = {
  toUser,
};
