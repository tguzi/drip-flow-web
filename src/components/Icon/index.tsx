import React, { SFC } from 'react'

interface IProp {
  ico: string;
  prefix?: string;
}

const Icon: SFC<IProp> = ({ ico, prefix }) => <span className={`my__icon ${prefix} ${prefix}-${ico}`} />

Icon.defaultProps = {
  prefix: 'fa'
}

export default Icon
