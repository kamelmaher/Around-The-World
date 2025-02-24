/** @format */

import { Country } from "../types/CountryType";
export const regions = ["Africa", "Asia", "America", "Europe", "Oceania"];
export const filterByRegion = (val: string, countries: Country[]) => {
  let found = false;
  regions.map((region) => {
    if (val.toLocaleLowerCase() == region.toLocaleLowerCase()) found = true;
  });

  if (val == "" || val == "All" || !found) return countries;
  const FilteredByRegion = countries.filter(
    (country) => country.region.toLowerCase() == val.toLowerCase()
  );
  return FilteredByRegion;
};
