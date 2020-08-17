import { upload, compressImage } from 'qiniu-js'
import { getQiniuToken } from 'api/index'

export enum EBucket {
  ARTICLE = 'article' // 文章图片（默认）
}

class Upload {

  /**
   * 实际上传的逻辑
   * @private
   * @param {File} file
   * @param {string} key
   * @param {Function} [onProgress]
   * @param {boolean} [compress]
   */
  private async uploadToQiniu(file: File, key: string, onProgress?: Function) {
    const qnRes = await getQiniuToken()
    const token = qnRes?.data?.token
    const domain = qnRes?.data?.domain
    if (!token) {
      return Promise.reject('无法获取上传token')
    }
    return new Promise((resolve, reject) => {
      const observable = upload(file, key, token)
      const observer = {
        next(progress: any) {
          console.log('正在上传: ', progress)
          onProgress && onProgress(progress)
        },
        error(err: Error) {
          console.log('上传出错：', err)
          reject(err)
        },
        complete(res: any) {
          console.log('上传结束: ', res)
          resolve({ ...res, domain, serverPath: `${domain}${res?.key}` })
        }
      }
      observable.subscribe(observer)
    })
  }

  /**
   * 压缩图片
   * @param {File} file
   * @param {object} opts
   * @returns
   */
  public compressImg(file: File, opts?: object) {
    const options = {
      quality: 0.90,
      noCompressIfLarger: true,
      ...opts
    }
    return compressImage(file, options)
  }

  /**
   * 上传文件到七牛云
   * @param {File} file
   * @param {EBucket} bucket
   * @param {Function} [onProgress]
   * @param {boolean} [compress]
   * @returns
   */
  public upload(file: File, bucket: EBucket, onProgress?: Function) {
    return new Promise((resolve, reject) => {
      try {
        const key = `${bucket}/${file.name}`
        this.uploadToQiniu(file, key, onProgress).then(res => {
          resolve(res)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

}

const UploadClass = new Upload()

export const compressImg = UploadClass.compressImg.bind(UploadClass)

export default UploadClass.upload.bind(UploadClass)
