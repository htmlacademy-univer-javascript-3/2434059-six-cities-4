import {AppRoute, PlaceType} from '../../../const.ts';
import {Link} from 'react-router-dom';

type MainPageCardProps = {
  id: number;
  premium?: boolean;
  image: string;
  price: number;
  placeName: string;
  placeType: PlaceType;
  inBookmarks?: boolean;
  onMouseOverChange: (id: number|undefined) => void;
}

export function OfferCard({id, premium, image, price, placeName, placeType, inBookmarks, onMouseOverChange}: MainPageCardProps): JSX.Element {
  function handleMouseOver() {
    onMouseOverChange(id);
  }

  function handleMouseLeave() {
    onMouseOverChange(undefined);
  }

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={inBookmarks
              ? 'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{inBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 80}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{placeName}</Link>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}
