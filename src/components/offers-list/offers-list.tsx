import {OfferCard} from '../card/offer-card/offer-card.tsx';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
}

export function OffersList({offers}: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | undefined>(undefined);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOverChange={(id) => setActiveCard(id)}
        />))}
    </div>
  );
}
