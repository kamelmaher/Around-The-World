import { ReactNode, useState } from "react"
import { menuContext } from "../Hooks/useMenu"
type MenuProviderProps = {
  children: ReactNode
}
const MenuProvider = ({ children }: MenuProviderProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleChangeMenu = (e: boolean) => setShowMenu(e)
  return (
    <menuContext.Provider value={{ showMenu, handleChangeMenu }}>
      {children}
    </menuContext.Provider>
  )
}

export default MenuProvider
