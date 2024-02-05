import { rtkApi } from '@/shared/api/rtkApi'
import { type UserApiQueryParams, type UsersApi, type UsersMappingData } from './types'

const usersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UsersMappingData, UserApiQueryParams>({
      query: ({ page, tokensOrder }) => `user/list?page=${page}&orderBy=${tokensOrder}`,
      transformResponse: (rawResult: UsersApi, meta, arg: UserApiQueryParams): UsersMappingData => {
        const mappingUserList = rawResult.data.map((user) => ({
          email: user.email,
          id: user.id,
          name: user.name,
          role: user.role,
          subscription: user.subscription.plan.type,
          tokens: user.subscription.tokens
        }))

        const mappingResult = {
          users: mappingUserList,
          pages: rawResult.pages
        }

        return mappingResult
      }
    })
  })
})

export const useGetUsers = usersApi.useGetUsersQuery
