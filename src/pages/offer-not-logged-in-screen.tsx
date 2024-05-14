import {AppRoute, CardType} from '../const.ts';
import {Link, useParams} from 'react-router-dom';
import {PlacesList} from '../components/places-list/places-list.tsx';
import {Offer} from '../types/offer.ts';
import {useState} from 'react';
import {MapPoint} from '../types/map-point.ts';
import {NotFoundScreen} from './not-found-screen/not-found-screen.tsx';
import {Map} from '../components/map/map.tsx';

type OfferProps = {
  offers: Offer[];
}

export function OfferNotLoggedInScreen({offers}: OfferProps): JSX.Element {
  const [activePoint, setActivePoint] = useState<MapPoint|undefined>();
  const params = useParams();
  const offer = offers.find((o) => o.id.toString() === params.id);

  if (!offer) {
    return (<NotFoundScreen/>);
  }

  const descriptionParagraphs = offer.description.split('\n');
  const paragraphs: [number, string][] = [];
  for (let i = 0; i < descriptionParagraphs.length; i++) {
    paragraphs.push([i, descriptionParagraphs[i]]);
  }

  const nearbyOffers = offers.filter((o)=>o.id !== offer.id).slice(0, 3);
  const pictures = offer.pictures.slice(0, 6);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {pictures.map((pic) => (
                <div className="offer__image-wrapper" key={pic}>
                  <img className="offer__image" src={pic} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.premium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>)}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.placeName}
                </h1>
                <button
                  className={offer.inBookmarks
                    ? 'offer__bookmark-button offer__bookmark-button--active button'
                    : 'offer__bookmark-button button'}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.inBookmarks ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: 80}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.placeType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.adults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {offer.features.length > 0 && (
                  <ul className="offer__inside-list">
                    {offer.features.map((f)=>
                      (
                        <li className="offer__inside-item" key={f}>
                          {f}
                        </li>
                      )
                    )}
                  </ul>)}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.pro && 'offer__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar" src={offer.host.avatar} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.pro && (
                    <span className="offer__user-status">
                      Pro
                    </span>)}
                </div>
                <div className="offer__description">
                  {paragraphs.map(([i, par]) => (
                    <p key={i}>{par}</p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">
                        Max
                      </span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: 80}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                        The
                        building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <Map
            centerLocation={offer.location}
            mapPoints={nearbyOffers.map((o) => o.location)}
            className={'offer__map'}
            activePoint={activePoint}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={nearbyOffers} cardType={CardType.Nearby}
              onChangeActivePoint={(p) => setActivePoint(p)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
