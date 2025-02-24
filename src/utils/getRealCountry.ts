/** @format */

import { Country } from "../types/CountryType";
import { intial } from "../types/intialType";

export const getRealCountry = (country: intial): Country => {
  let countryLanguages: string[] = [];
  let countryCurrencies: string[] = [];
  if (country.languages) {
    countryLanguages = Object.keys(country.languages).map(
      (key) => country.languages[key]
    );
  }
  if (country.currencies) {
    countryCurrencies = Object.keys(country.currencies).map(
      (key) => country.currencies[key].name
    );
  }
  return {
    name: country.name.common,
    nativeName: country.name.official,
    population: country.population,
    region: country.region,
    capital: country.capital,
    currency: countryCurrencies,
    flag: country.flags.png,
    langs: countryLanguages,
  };
};
