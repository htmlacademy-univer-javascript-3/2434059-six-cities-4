import {PlaceType} from '../types/PlaceType.tsx';

type NearCardProps = {
  premium?: boolean;
  image: string;
  price: number;
  placeName: string;
  placeType: PlaceType;
  inBookmarks?: boolean;
}

export function NearCard({premium, image, price, placeName, placeType, inBookmarks}: NearCardProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
        </a>
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
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{inBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 100}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeName}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}
