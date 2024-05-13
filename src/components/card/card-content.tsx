import {Offer} from '../../types/offer.ts';
import {Link} from 'react-router-dom';
import {AppRoute, CardType} from '../../const.ts';
import {CardImage} from './card-image.tsx';
import {CardRating} from './card-rating.tsx';

type CardProps = {
  offer: Offer;
  cardType: CardType;
}

export function CardContent({offer, cardType}: CardProps): JSX.Element {
  return (
    <>
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <CardImage id={offer.id} picture={offer.pictures[0]} cardType={cardType}/>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={offer.inBookmarks
              ? 'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{offer.inBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <CardRating width={cardType === CardType.Nearby ? 80 : 100}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.placeName}</Link>
        </h2>
        <p className="place-card__type">{offer.placeType}</p>
      </div>
    </>
  );
}
