export type User = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
}

export type NewUser = Omit<User, 'id'>;

export type UserLogin = {
  email: string;
  password: string;
}

export type UserInfo = Omit<User, 'password'>;