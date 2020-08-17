import React, { SFC, ChangeEvent } from 'react'
import toast from 'components/Toast'
import { Wrap, FileInput, ChildWrap } from './styled'
import uploadQiniu, { EBucket } from './qiniu'

type TProps = Partial<{
  accept: string;
  onchange: Function;
}>

const UploadOss: SFC<TProps> = ({
  onchange,
  children,
  accept,
}) => {

  // 校验文件格式
  function verifyFormat(file: File) {
    if (!accept) {
      return true
    }
    try {
      const list = accept?.split(',')
      return list?.includes(file.type)
    } catch (e) {
      return false
    }
  }

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e?.target?.files ?? []
    const file = files[0]
    if (verifyFormat(file)) {
      const filename = `${new Date().getTime()}-${file?.name}`
      console.log(filename)
      const res = await uploadQiniu(file, EBucket.ARTICLE)
      onchange && onchange(res)
    } else {
      toast('文件格式有误！')
    }
  }

  return (
    <Wrap>
      <ChildWrap>
        {children || '上传文件'}
      </ChildWrap>
      <FileInput
        name="file"
        type="file"
        onChange={onChange}
        accept={accept}
      />
    </Wrap>
  )
}

export default UploadOss
