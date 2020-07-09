import { post } from 'utils/request'

export const login = (params: any) => post('/api/user/login', { data: params })
