import { get } from 'utils/request'

// 获取七牛云token
export const getQiniuToken = () => get('/common/getUploadToken')
