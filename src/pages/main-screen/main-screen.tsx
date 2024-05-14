import {Header} from '../../components/header/header.tsx';
import {CitiesList} from '../../components/cities-list/cities-list.tsx';
import {useAppSelector} from '../../hooks';
import {CityPlaces} from '../../components/city-places/city-places.tsx';
import {CityPlacesEmpty} from '../../components/city-places/city-places-empty.tsx';

export function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) =>
    state.offers.filter((o) => o.location.city === state.city));

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <CitiesList/>
        <div className="cities">
          {offers.length > 0
            ? (<CityPlaces offers={offers}/>)
            : (<CityPlacesEmpty/>)}
        </div>
      </main>
    </div>
  );
}
