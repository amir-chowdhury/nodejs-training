import { INITIAL_USER_DATA } from './data/users'
import { User } from '../interfaces/users'

let USERS = INITIAL_USER_DATA

function getUser (id: string): User | undefined {
  return USERS.find(user => user.id === id)
}

function getUsers (): User[] {
  return USERS
}

function createUser (userData: Omit<User, 'id' | 'isDeleted'>): User {
  const user: User = {
    ...userData,
    id: (USERS.length + 1).toString(), // TODO: could cause race condition
    isDeleted: false
  }
  USERS = [...USERS, user]
  return user
}

function updateUser (id: string, userData: Partial<User>): User {
  const user = getUser(id)
  if (user !== undefined) {
    const updatedUser: User = { ...user, ...userData }
    const index = USERS.findIndex((user) => user.id === id)
    USERS = [...USERS.slice(0, index), updatedUser, ...USERS.slice(index + 1)]
    return updatedUser
  }
  throw Error(`user with id ${id} not found!`)
}

function deleteUser (id: string): User {
  const user = getUser(id)
  if (user !== undefined) {
    const deletedUser: User = { ...user, isDeleted: true }
    const index = USERS.findIndex((user) => user.id === id)
    USERS = [...USERS.slice(0, index), deletedUser, ...USERS.slice(index + 1)]
    return deletedUser
  }
  throw Error(`user with id ${id} not found`)
}

function getAutoSuggestUsers (loginSubString: string, limit: number): User[] {
  return USERS
    .filter(o => o.login.includes(loginSubString))
    .sort((a, b) => {
      if (a.login < b.login) { return -1 }
      if (a.login > b.login) { return 1 }
      return 0
    })
    .slice(0, limit)
}

export const UserService = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getAutoSuggestUsers
}
