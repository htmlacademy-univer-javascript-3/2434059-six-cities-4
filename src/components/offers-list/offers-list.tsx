import {OfferCard} from '../card/offer-card/offer-card.tsx';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';
import {Map} from '../map/map.tsx';
import {AMSTERDAM} from '../../const.ts';

type OffersListProps = {
  offers: Offer[];
  placesCount: number;
}

export function OffersList({offers, placesCount}: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | undefined>(undefined);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"/>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              id={offer.id}
              premium={offer.premium}
              image={offer.pictures[0]}
              price={offer.price}
              placeName={offer.placeName}
              placeType={offer.placeType}
              inBookmarks={offer.inBookmarks}
              onMouseOverChange={(id) => setActiveCard(id)}
            />))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          cityLocation={AMSTERDAM}
          mapPoints={offers.map((offer) => offer.location)}
        />
      </div>
    </div>
  );
}
