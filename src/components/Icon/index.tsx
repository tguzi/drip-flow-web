import React, { SFC } from 'react'
import { ReactSVG } from 'react-svg'
import styled from 'styled-components'

interface IProps {
  src: string;
}

type TProps = Partial<{
  width: string;
  height: string;
  style: object;
  handleClick: Function;
}> & IProps

const Wrap = styled.div`
  flex: none;
  position: relative;
  cursor: pointer;
  user-select: none;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Icon: SFC<TProps> = ({
  src,
  width,
  height,
  style,
  handleClick,
}) => (
  <Wrap
    className="tgu__icon"
    onClick={(e) => {
      handleClick && handleClick(e)
    }}
  >
    <ReactSVG src={src} style={{ width, height, ...style }} />
  </Wrap>
)

Icon.defaultProps = {
  width: 'auto',
  height: 'auto',
  style: {},
  handleClick: () => {},
}

export default Icon