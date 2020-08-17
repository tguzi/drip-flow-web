import React, { SFC } from 'react'
import { PopoverBox, PopoverContent } from './styled'

interface IProps {
  content: React.ReactNode;
}

const Popover: SFC<IProps> = ({
  content,
  children
}) => {
  return (
    <PopoverBox>
      {children}
      <PopoverContent className="content">
        {content}
      </PopoverContent>
    </PopoverBox>
  )
}

export default Popover
