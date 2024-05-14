import {City} from '../../../const.ts';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changeCity} from '../../../store/action.ts';

type CityButtonProps = {
  city: City;
}

export function CityButton({city}: CityButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return (
    <li className="locations__item">
      <div
        className={`locations__item-link tabs__item${currentCity === city ? ' tabs__item--active' : ''}`}
        onClick={() => dispatch(changeCity(city))}
      >
        <span>{city}</span>
      </div>
    </li>
  );
}
