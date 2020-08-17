import toast from 'components/Toast'

// 简单到response封装
const useResponse = async (request: any) => {
  let success
  let error
  let res
  try {
    res = await request
    if (res.code === 200) {
      success = res.data
    } else {
      toast(res.message)
    }
  } catch (e) {
    error = e
    toast(`请求失败：${e.message}`)
  }
  return [success, error, res?.message, res?.code]
}

export default useResponse
