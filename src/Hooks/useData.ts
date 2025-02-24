/** @format */

import { createContext, useContext } from "react";
import { Country } from "../types/CountryType";
type dataContextType = {
  countries: Country[];
  isLoading: boolean;
  searchVal: string;
  handleSearchVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  regionVal: string;
  handleRegionVal: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
};
export const dataContext = createContext<dataContextType | null>(null);

export const useData = () => {
  const context = useContext(dataContext);
  if (context) return context;
  else throw new Error();
};
