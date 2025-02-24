import { ReactNode, useState } from "react"
import { menuContext } from "../Hooks/useMenu"
type MenuProviderProps = {
  children: ReactNode
}
const MenuProvider = ({ children }: MenuProviderProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleChangeMenu = () => setShowMenu(prev => !prev)
  return (
    <menuContext.Provider value={{ showMenu, handleChangeMenu }}>
      {children}
    </menuContext.Provider>
  )
}

export default MenuProvider
