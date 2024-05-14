import {SortBy} from '../../const.ts';
import {useState} from 'react';

type SortingProps = {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function Sorting({value, onChange}: SortingProps): JSX.Element {
  const [opened, setOpened] = useState(false);

  function getSortText(sortBy: SortBy) {
    switch (sortBy) {
      case SortBy.Popular:
        return 'Popular';
      case SortBy.PriceLow:
        return 'Price: low to high';
      case SortBy.PriceHigh:
        return 'Price: high to low';
      case SortBy.TopRated:
        return 'Top rated first';
    }
  }

  function toggleList() {
    setOpened(!opened);
  }

  function handleSelectOption(sortBy: SortBy) {
    setOpened(false);
    onChange(sortBy);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleList}>
        {getSortText(value)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {opened && (
        <ul className={'places__options places__options--custom places__options--opened'}>
          {[SortBy.Popular, SortBy.PriceLow, SortBy.PriceHigh, SortBy.TopRated].map((sortBy) => (
            <li
              key={sortBy}
              className={`places__option ${sortBy === value && 'places__option--active'}`}
              onClick={() => handleSelectOption(sortBy)}
              tabIndex={0}
            >
              {getSortText(sortBy)}
            </li>
          ))}
        </ul>)}
    </form>
  );
}
