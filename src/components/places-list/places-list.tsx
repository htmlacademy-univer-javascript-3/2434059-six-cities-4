import {Card} from '../card/card.tsx';
import {Offer} from '../../types/offer.ts';
import {MapPoint} from '../../types/map-point.ts';
import {CardType, SortBy} from '../../const.ts';

type OffersListProps = {
  offers: Offer[];
  cardType: CardType;
  sortBy?: SortBy;
  onChangeActivePoint: (point: MapPoint|undefined) => void;
}

export function PlacesList({offers, onChangeActivePoint, cardType, sortBy}: OffersListProps): JSX.Element {
  let sortedOffers: Offer[];
  switch (sortBy) {
    case SortBy.PriceLow:
      sortedOffers = offers.sort((a, b) => a.price - b.price);
      break;
    case SortBy.PriceHigh:
      sortedOffers = offers.sort((a, b) => b.price - a.price);
      break;
    case SortBy.TopRated:
      sortedOffers = offers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
      break;
  }

  return (
    <div className={`${cardType === CardType.CityPlace ? 'cities__places-list' : 'near-places__list'} places__list tabs__content`}>
      {sortedOffers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseOverChange={onChangeActivePoint}
        />))}
    </div>
  );
}
