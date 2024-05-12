import {PlaceType} from '../const.ts';

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
  reviews: Review[];
}

type Person = {
  avatar: string;
  name: string;
  pro: boolean;
}

export type Review = {
  id: number;
  author: Person;
  reviewText: string;
  rating: number;
  reviewDate: string;
}
