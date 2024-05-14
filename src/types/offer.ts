import {PlaceType} from '../const.ts';
import {MapPoint} from './map-point.ts';

export type Offer = {
  premium?: boolean;
  price: number;
  placeName: string;
  placeType: PlaceType;
  inBookmarks?: boolean;
  rating: number;
  id: number;
  pictures: string[];
  features: string[];
  description: string;
  bedrooms: number;
  adults: number;
  host: Person;
  reviews: ReviewData[];
  location: MapPoint;
}

type Person = {
  avatar: string;
  name: string;
  pro: boolean;
}

export type ReviewData = {
  id: number;
  author: Person;
  reviewText: string;
  rating: number;
  reviewDate: string;
}
