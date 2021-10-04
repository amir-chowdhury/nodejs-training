import { Request, Response } from 'express'
import { User } from '../interfaces/users'
import { UserService } from '../services'

function getUser (req: Request, res: Response): void {
  const { id } = req.params
  const user = UserService.getUser(id)
  if (user === undefined) {
    res.status(404).json({ message: `user with id ${id} not found!` })
  } else {
    res.json(user)
  }
}

function updateUser (req: Request, res: Response): void {
  const { id } = req.params
  const userData: Partial<User> = req.body
  const user = UserService.updateUser(id, userData)
  res.json(user)
}

function deleteUser (req: Request, res: Response): void {
  const { id } = req.params
  const user = UserService.deleteUser(id)
  res.json(user)
}

function getUsers (req: Request, res: Response): void {
  const users = UserService.getUsers()
  res.json(users)
}

function createUser (req: Request, res: Response): void {
  const { login, password, age } = req.body
  const user = UserService.createUser({ login, password, age })
  res.status(201).json(user)
}

function getAutoSuggestUsers (req: Request, res: Response): void {
  const { q, limit } = req.query
  const users = UserService.getAutoSuggestUsers(String(q), Number(limit))
  res.json(users)
}

export const UserController = {
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  createUser,
  getAutoSuggestUsers
}
