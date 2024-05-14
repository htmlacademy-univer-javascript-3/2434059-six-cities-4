import {City} from '../const.ts';
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<City>('CHANGE_CITY');

export const loadOffers = createAction('LOAD_OFFERS');
