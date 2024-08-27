import { UserApi } from './authTypes';

const mockUsersAuthenticated: UserApi[] = [
  {
    id: new Date().getMilliseconds(),
    name: 'John doe',
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
export const authApi = {
  signIn,
};
