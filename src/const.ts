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

export const AMSTERDAM: MapPoint = {
  city: City.Amsterdam,
  lat: 52.371807,
  lng: 4.896029,
};

export enum CardType {
  Offer = 'Offer',
  Favourite = 'Favourite',
  Nearby = 'Nearby'
}
