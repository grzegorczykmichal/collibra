import { Color } from './Color';
import { Image } from './Image';

type ColorWithWithNormalization = {
  originalHex: string;
  normalizedHex: string;
};

export type Maker = {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision: string;
  dateOfDeath: string;
  dateOfDeathPrecision: string;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality: string;
  biography: string;
  productionPlaces: string[];
  qualification: string;
};

type Dating = {
  presentingDate: string;
  sortingDate: number;
  period: number;
  yearEarly: number;
  yearLate: number;
};

export type Dimension = {
  unit: string;
  type: string;
  part: string;
  value: string;
};

export type ArtObject = {
  artistRole: string;
  colors: Color[];
  colorsWithNormalization: ColorWithWithNormalization[];
  dating: Dating;
  description: string;
  dimensions: Dimension[];
  hasImage: boolean;
  id: string;
  normalizedColors: Color[];
  normalized32Colors: Color[];
  title: string;
  titles: string[];
  makers: Maker[];
  language: string;
  labelText: string;
  links: {
    search: string;
  };
  longTitle: string;
  materials: string[];
  objectNumber: string;
  objectTypes: string[];
  objectCollection: string[];
  physicalMedium: string;
  principalMakers: Maker[];
  plaqueDescriptionDutch: string;
  plaqueDescriptionEnglish: string;
  priref: string;
  principalMaker: string;
  subTitle: string;
  showImage: boolean;
  webImage: Image;
};
