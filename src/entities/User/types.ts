export enum IRole {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface IUser {
  id?: string
  name?: string
  email?: string
  role?: IRole
  tokens?: number
  subscription?: string
}
