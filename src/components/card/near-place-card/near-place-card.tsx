import {Offer} from '../../../types/offer.ts';
import {CardType} from '../../../const.ts';
import {CardContent} from '../card-content.tsx';

type NearCardProps = {
  offer: Offer;
}

export function NearPlaceCard({offer}: NearCardProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <CardContent offer={offer} cardType={CardType.Nearby}/>
    </article>
  );
}
