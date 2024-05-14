import {City} from '../const.ts';
import {offers} from '../mocks/offers.ts';
import {changeCity, loadOffers} from './action.ts';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: City.Paris,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    });
});
