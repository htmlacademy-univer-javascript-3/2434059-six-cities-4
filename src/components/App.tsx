import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {MainPage} from '../pages/MainPage.tsx';
import {LoginPage} from '../pages/LoginPage.tsx';
import {OfferPage} from '../pages/OfferPage.tsx';
import {NotFoundPage} from '../pages/NotFoundPage.tsx';
import {PrivateRoute} from './PrivateRoute.tsx';
import {FavoritesPage} from '../pages/FavoritesPage.tsx';
import {AppRoute, AuthorizationStatus} from '../const.ts';

export function App(): JSX.Element {
  const authStatus = AuthorizationStatus.Unknown;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesCount={312}/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Offer} element={<OfferPage/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
