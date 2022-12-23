import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  HOME_PATH,
  GAMES_PATH,
  GAME_PATH,
  SIGN_UP_PATH,
  SIGN_IN_PATH,
  PROFILE_PATH,
  PEOPLE_PATH,
} from './route-types';

const Home = lazy(() => import('@/pages/Home'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const Profile = lazy(() => import('@/pages/Profile'));
const Games = lazy(() => import('@/pages/Games'));
const Game = lazy(() => import('@/pages/Game'));
const People = lazy(() => import('@/pages/People'));

const AppLayout = lazy(() => import('../components/Layouts'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ]
  },
]);
