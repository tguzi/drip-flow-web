import { post } from 'utils/request'

export const login = (params: any) => post('/user/login', { data: params })
