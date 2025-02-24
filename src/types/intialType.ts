/** @format */
export type intial = {
  name: Name;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  capital: string;
  region: string;
  languages: { [key: string]: string };
  population: number;
  flags: { png: string };
};
interface Name {
  common: string;
  official: string;
}
interface Currency {
  name: string;
  symbol: string;
}
