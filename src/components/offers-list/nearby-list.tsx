import {NearPlaceCard} from '../card/near-place-card/near-place-card.tsx';
import {Offer} from '../../types/offer.ts';

type NearbyListProps = {
  nearbyOffers: Offer[];
}

export function NearbyList({nearbyOffers}: NearbyListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {nearbyOffers.map((o) => (
        <NearPlaceCard key={o.id} offer={o}/>
      ))}
    </div>
  );
}
