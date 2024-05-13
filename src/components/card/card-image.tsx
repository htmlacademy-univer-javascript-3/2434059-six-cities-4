import {Link} from 'react-router-dom';
import {AppRoute, CardType} from '../../const.ts';

type CardImageProps = {
  id: number;
  picture: string;
  cardType: CardType;
}

export function CardImage({id, picture, cardType}: CardImageProps): JSX.Element {
  switch (cardType) {
    case CardType.Offer:
      return (
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`${AppRoute.Offer}/${id}`}>
            <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
      );
    case CardType.Nearby:
      return (
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <Link to={`${AppRoute.Offer}/${id}`}>
            <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
          </Link>
        </div>
      );
    default: throw new Error('Unknown card type');
  }
}
