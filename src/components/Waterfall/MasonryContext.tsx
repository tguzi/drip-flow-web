import { createContext } from 'react'

interface IContext {
  inlineCollapsed: boolean;
}

const MasonryContenxt = createContext<IContext>({
  inlineCollapsed: false
})

export default MasonryContenxt
