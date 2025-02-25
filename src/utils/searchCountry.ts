/** @format */

import { Country } from "../types/CountryType";

export const searchCountry = (searchVal: string, countries: Country[]) => {
  if (searchVal == "") return countries;
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  return filteredCountries;
};
