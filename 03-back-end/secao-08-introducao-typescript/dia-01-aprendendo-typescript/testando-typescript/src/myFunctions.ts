import { User } from './types/User';

export const getUserNames = (userList: User[]): string[] => userList.map((user: User) => user.name);

export const getTopUsers = (userList: User[], reps: number): string[] => userList.filter((user) => user.repositories >= reps).map((user) => user.name);

export const isMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce((prev, curr) => prev.repositories > curr.repositories ? prev : curr);
  return mostActiveUser.name === name;
};