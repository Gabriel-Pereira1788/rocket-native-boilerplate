import { User, UserApi } from './authTypes';

function toUser(userApi: UserApi): User {
  return {
    id: userApi.id,
    email: userApi.email,
    username: userApi.username,
  };
}

export const authAdapter = {
  toUser,
};
