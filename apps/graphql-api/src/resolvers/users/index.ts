import { getUser } from './queries/getUser';
import { getUsers } from './queries/getUsers';
import { createUser } from './mutations/createUser';
import { updateUser } from './mutations/updateUser';
import { deleteUser } from './mutations/deleteUser';
import { getUserByEmail } from './queries/getUserByEmail';

export const userResolvers = {
  Query: {
    getUser,
    getUsers,
    getUserByEmail,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};
