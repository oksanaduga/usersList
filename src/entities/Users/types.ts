import { type IRole, type IUser } from '@/entities/User/index'

export interface IUsersBackend {
  id: string
  name: string
  email: string
  role: IRole
  subscription: {
    plan: {
      type: string
    }
    tokens: number
  }
}

export interface UsersApi {
  data: IUsersBackend[]
  pages: number
}

export interface UsersMappingData {
  users: IUser[]
  pages: number
}

export interface UserApiQueryParams {
  page: string
  tokensOrder: string
}
