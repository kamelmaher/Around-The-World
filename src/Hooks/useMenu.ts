/** @format */

import { createContext, useContext } from "react";

type MenuContext = {
  showMenu: boolean;
  handleChangeMenu: () => void;
};

export const menuContext = createContext<MenuContext | null>(null);

export const useMenu = () => {
  const context = useContext(menuContext);
  if (!context) throw new Error();
  return context;
};
