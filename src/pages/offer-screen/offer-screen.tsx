import {NearPlaceCard} from '../../components/card/near-place-card/near-place-card.tsx';
import {PlaceType} from '../../const.ts';
import {Offer} from '../../types/offer.ts';
import {useParams} from 'react-router-dom';
import {NotFoundScreen} from '../not-found-screen/not-found-screen.tsx';
import {ReviewForm} from '../../components/rewiew-form/review-form.tsx';

type OfferProps = {
  offers: Offer[];
}

export function OfferScreen({offers}: OfferProps): JSX.Element {
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

  const pictures = offer.pictures.length > 6 ? offer.pictures.slice(0, 6) : offer.pictures;

  return (
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
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.reviews.length}</span></h2>
              <ul className="reviews__list">
                {offer.reviews.map((review) => (
                  <li className="reviews__item" key={review.id}>
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar" src={review.author.avatar} width="54" height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">
                        {review.author.name}
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
                        {review.reviewText}
                      </p>
                      <time className="reviews__time" dateTime={review.reviewDate}>April 2019</time>
                    </div>
                  </li>
                ))}
              </ul>
              <ReviewForm/>
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <NearPlaceCard
              image={'img/room.jpg'}
              price={80}
              placeName={'Wood and stone place'}
              placeType={PlaceType.Room}
              inBookmarks
            />
            <NearPlaceCard
              image={'img/apartment-02.jpg'}
              price={132}
              placeName={'Canal View Prinsengracht'}
              placeType={PlaceType.Apartment}
            />
            <NearPlaceCard
              premium
              image={'img/apartment-03.jpg'}
              price={180}
              placeName={'Nice, cozy, warm big bed apartment'}
              placeType={PlaceType.Apartment}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
