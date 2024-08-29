import { UserApi } from './authTypes';

const mockUsersAuthenticated: UserApi[] = [
  {
    id: new Date().getMilliseconds(),
    username: 'John doe',
    email: 'johndoe@email.com',
    password: 'johndoe123',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];

async function signIn({
  email,
  password,
}: Pick<UserApi, 'email' | 'password'>) {
  return new Promise<UserApi>((resolve, reject) => {
    const user = mockUsersAuthenticated.find(_user => {
      return _user.email === email && _user.password === password;
    });

    setTimeout(() => {
      if (user) {
        resolve(user);
      } else {
        reject('Invalid credentials');
      }
    }, 4000);
  });
}

async function signUp({
  email,
  username,
  password,
}: Pick<UserApi, 'email' | 'password' | 'username'>) {
  return new Promise<UserApi>(resolve => {
    const newUser = {
      id: new Date().getMilliseconds(),
      email,
      username,
      password,
      createdDate: new Date(),
      updatedDate: new Date(),
    };
    mockUsersAuthenticated.push(newUser);

    setTimeout(() => {
      resolve(newUser);
    }, 3000);
  });
}
export const authApi = {
  signIn,
  signUp,
};
