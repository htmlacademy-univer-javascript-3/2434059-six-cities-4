import {useAppSelector} from '../../hooks';
import {PlacesList} from '../places-list/places-list.tsx';
import {Map} from '../map/map.tsx';
import {CardType, CITY_LOCATION, SortBy} from '../../const.ts';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';
import {MapPoint} from '../../types/map-point.ts';
import {Sorting} from '../sorting/sorting.tsx';

type CityPlacesProps = {
  offers: Offer[];
}

export function CityPlaces({offers}: CityPlacesProps) {
  const [activePoint, setActivePoint] = useState<MapPoint | undefined>(undefined);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.Popular);

  const city = useAppSelector((state) => state.city);
  const cityLocation = CITY_LOCATION[city];

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <Sorting value={sortBy} onChange={setSortBy}/>
        <PlacesList
          offers={offers}
          cardType={CardType.CityPlace}
          onChangeActivePoint={(p) => setActivePoint(p)}
          sortBy={sortBy}
        />
      </section>
      <div className="cities__right-section">
        <Map
          centerLocation={cityLocation}
          mapPoints={offers.map((offer) => offer.location)}
          className={'cities__map'}
          activePoint={activePoint}
        />
      </div>
    </div>
  );
}
