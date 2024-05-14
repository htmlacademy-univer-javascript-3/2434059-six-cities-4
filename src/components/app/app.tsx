import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainScreen} from '../../pages/main-screen/main-screen.tsx';
import {OfferScreen} from '../../pages/offer-screen/offer-screen.tsx';
import {NotFoundScreen} from '../../pages/not-found-screen/not-found-screen.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {LoginScreen} from '../../pages/login-screen/login-screen.tsx';
import {FavouritesScreen} from '../../pages/favourites-screen/favourites-screen.tsx';
import {Offer} from '../../types/offer.ts';
import {OfferLayout} from '../layout/offerLayout.tsx';

type AppProps = {
  offers: Offer[];
}

export function App({offers}: AppProps): JSX.Element {
  const authStatus = AuthorizationStatus.Unknown;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route path={AppRoute.Offer} element={<OfferLayout/>}>
          <Route path={':id'} element={<OfferScreen offers={offers}/>}/>
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
              <FavouritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}
