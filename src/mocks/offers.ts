import {Offer} from '../types/offer.ts';
import {PlaceType} from '../const.ts';
import {reviews} from './reviews.ts';

export const offers: Offer[] = [
  {
    id: 1,
    price: 3,
    placeName: 'Testing place where all is good',
    placeType: PlaceType.Room,
    rating: 4.9,
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: true,
    },
    pictures: ['img/room.jpg'],
    features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century.\n' +
      'An independent House, strategically located between Rembrand Square and National Opera,' +
      ' but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    adults: 2,
    reviews: reviews,
  }, {
    id: 2,
    premium: true,
    price: 666,
    placeName: 'Rather expensive apartment',
    placeType: PlaceType.Apartment,
    rating: 3,
    host: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      pro: false,
    },
    pictures: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    description: 'A really nice place for all your testing needs!',
    bedrooms: 3,
    adults: 3,
    reviews: reviews,
  }, {
    id: 3,
    premium: true,
    price: 123,
    placeName: 'It\'s a whole house!',
    placeType: PlaceType.House,
    rating: 5,
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: true,
    },
    pictures: ['img/apartment-03.jpg'],
    features: ['Fun', 'Testing', 'House'],
    description: 'A really nice place for all your testing needs!',
    bedrooms: 5,
    adults: 12,
    inBookmarks: true,
    reviews: reviews,
  }, {
    id: 4,
    price: 33,
    placeName: 'A room in the best hotel',
    placeType: PlaceType.Hotel,
    rating: 1,
    host: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      pro: false,
    },
    pictures: ['img/room.jpg'],
    features: [],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century.\n' +
      'An independent House, strategically located between Rembrand Square and National Opera,' +
      ' but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedrooms: 1,
    adults: 1,
    inBookmarks: true,
    reviews: reviews,
  }
];
