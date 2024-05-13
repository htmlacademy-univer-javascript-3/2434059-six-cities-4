import {CardType} from '../../../const.ts';
import {Offer} from '../../../types/offer.ts';
import {CardContent} from '../card-content.tsx';

type MainPageCardProps = {
  offer: Offer;
  onMouseOverChange: (id: number|undefined) => void;
}

export function OfferCard({offer, onMouseOverChange}: MainPageCardProps): JSX.Element {
  function handleMouseOver() {
    onMouseOverChange(offer.id);
  }

  function handleMouseLeave() {
    onMouseOverChange(undefined);
  }

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <CardContent offer={offer} cardType={CardType.Offer}/>
    </article>
  );
}
