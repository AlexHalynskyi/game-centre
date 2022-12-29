import React from 'react';
import { useAuth } from '@/hooks/useAuth';

const Home = () => {
  const { isAuth, email } = useAuth();

  return (
    <>
      {isAuth && <div> Hello! Your email is {email} </div>}
      {!isAuth && <div> You are not authorized yet </div>}
    </>
  );
};

export default Home;
