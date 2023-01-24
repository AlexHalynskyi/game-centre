import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { GAMES_PATH } from '@/router';

const Home = () => {
  const { isAuth, email } = useAuth();

  return (
    <>
      {isAuth &&
        <div>
          <div> Hello! Your email is {email} </div>
          <Link to={GAMES_PATH}>
            <button>Play some games</button>
          </Link>
        </div>
      }
      {!isAuth && <div> You are not authorized yet </div>}
    </>
  );
};

export default Home;
