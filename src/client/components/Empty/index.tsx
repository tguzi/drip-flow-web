import React, { SFC } from 'react'
import { Container, ImgBox, Img, Description, SlotBox } from './styled'
import EmptyImg from '../../static/imgs/empty.svg'

interface Props {
  image?: string
  imageStyle?: string
  description?: string
}

const Empty: SFC<Props> = ({ image, imageStyle, description, children }) => {
  return (
    <Container>
      <ImgBox style={imageStyle}>
        <Img src={image} />
      </ImgBox>
      {description && <Description>{description}</Description>}
      {children && <SlotBox>{children}</SlotBox>}
    </Container>
  )
}

Empty.defaultProps = {
  image: EmptyImg,
  description: '暂无数据',
}

export default Empty
