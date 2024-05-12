import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {Header} from '../../components/header/header.tsx';

export function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header/>
      <center>
        <h1>404</h1>
        <h2>Page not found.</h2>
        <Link to={AppRoute.Main}>Home page</Link>
      </center>
    </>
  );
}
