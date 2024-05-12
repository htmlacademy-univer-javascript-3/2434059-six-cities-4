import {Outlet} from 'react-router-dom';
import {Header} from '../header/header.tsx';

export function OfferLayout(): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <Outlet />
    </div>
  );
}
