import {Header} from '../../components/header/header.tsx';
import {CitiesList} from '../../components/cities-list/cities-list.tsx';
import {useAppSelector} from '../../hooks';
import {CITY_LOCATION} from '../../const.ts';
import {OffersList} from '../../components/offers-list/offers-list.tsx';
import {Map} from '../../components/map/map.tsx';

export function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) =>
    state.offers.filter((o) => o.location.city === state.city));
  const city = useAppSelector((state) => state.city);
  const cityLocation = CITY_LOCATION[city];

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <CitiesList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
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
              <OffersList offers={offers}/>
            </section>
            <div className="cities__right-section">
              <Map
                cityLocation={cityLocation}
                mapPoints={offers.map((offer) => offer.location)}
                className={'cities__map'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
