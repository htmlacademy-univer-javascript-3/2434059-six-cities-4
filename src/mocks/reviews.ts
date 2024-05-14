import {ReviewData} from '../types/offer.ts';

export const reviews: ReviewData[] = [
  {
    id: 1,
    author: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      pro: true,
    },
    reviewText: 'It\'s okay for the purposes of testing.',
    rating: 3,
    reviewDate: '2020-01-19',
  }, {
    id: 2,
    author: {
      avatar: 'img/avatar-max.jpg',
      name: 'Max',
      pro: false,
    },
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century.',
    rating: 4,
    reviewDate:'2024-05-01',
  },
];
