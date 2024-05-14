import {MapPoint} from './types/map-point.ts';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PlaceType {
  Room = 'Room',
  Apartment = 'Apartment',
  House = 'House',
  Hotel = 'Hotel',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
}

export enum City {
  Amsterdam = 'Amsterdam',
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum CardType {
  Offer = 'Offer',
  Favourite = 'Favourite',
  Nearby = 'Nearby'
}

export const CITIES: City[] = [
  City.Paris,
  City.Cologne,
  City.Brussels,
  City.Amsterdam,
  City.Hamburg,
  City.Dusseldorf,
];

export const CITY_LOCATION: Record<City, MapPoint> = {
  Paris: {
    city: City.Paris,
    lat: 48.864716,
    lng: 2.349014,
  },
  Cologne: {
    city: City.Cologne,
    lat: 50.935173,
    lng: 6.953101,
  },
  Brussels: {
    city: City.Brussels,
    lat: 50.8476,
    lng: 4.3572,
  },
  Amsterdam: {
    city: City.Amsterdam,
    lat: 52.371807,
    lng: 4.896029,
  },
  Hamburg: {
    city: City.Hamburg,
    lat: 53.551086,
    lng: 9.993682,
  },
  Dusseldorf: {
    city: City.Dusseldorf,
    lat: 51.233334,
    lng: 6.783333,
  },
};
