import {CITIES} from '../../const.ts';
import {CityButton} from '../city/city.tsx';

export function CitiesList(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <CityButton key={city} city={city}/>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
