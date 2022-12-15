import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HOME_PATH = '/';
const SIGN_IN_PATH = '/sign-in';
const SIGN_UP_PATH = '/sign-up';
const PROFILE_PATH = '/profile';
const GAMES_PATH = '/games';
const GAME_PATH = '/games/:gameId';
const PEOPLE_PATH = '/people';

const Home = lazy(() => import('./Home/Home'));
const SignIn = lazy(() => import('./SignIn/SignIn'));
const SignUp = lazy(() => import('./SignUp/SignUp'));
const Profile = lazy(() => import('./Profile/Profile'));
const Games = lazy(() => import('./Games/Games'));
const Game = lazy(() => import('./Game/Game'));
const People = lazy(() => import('./People/People'));

export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Home />,
  },
  {
    path: SIGN_IN_PATH,
    element: <SignIn />,
  },
  {
    path: SIGN_UP_PATH,
    element: <SignUp />,
  },
  {
    path: PROFILE_PATH,
    element: <Profile />,
  },
  {
    path: GAMES_PATH,
    element: <Games />,
  },
  {
    path: GAME_PATH,
    element: <Game />,
  },
  {
    path: PEOPLE_PATH,
    element: <People />,
  },
]);