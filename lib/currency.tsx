import {
  AR,
  EU,
  US,
  FlagComponent,
} from "country-flag-icons/react/1x1";

export const currencyList: {
  value: string;
  label: string;
  details: {
    country: string;
    currencySymbol: string;
    currencyName: string;
    currencyShortForm: string;
    icon: FlagComponent;
    iconName: string;
  };
}[] = [
  {
    value: "USD",
    label: "USD",
    details: {
      country: "United States",
      currencySymbol: "$",
      currencyName: "United States Dollar",
      currencyShortForm: "USD",
      icon: US,
      iconName: "US",
    },
  },
  {
    value: "EUR",
    label: "EUR",
    details: {
      country: "European Union",
      currencySymbol: "€",
      currencyName: "Euro",
      currencyShortForm: "EUR",
      icon: EU,
      iconName: "EU",
    },
  },
  {
    value: "ARS",
    label: "ARS",
    details: {
      country: "Argentina",
      currencySymbol: "$",
      currencyName: "Peso Argentino",
      currencyShortForm: "ARS",
      icon: AR,
      iconName: "AR",
    },
  }
];
