
import type { NextPage } from 'next';

import { useEffect } from 'react';
import Router from 'next/router';

const Home: NextPage = () => {
  useEffect(() => {
    Router.push('/login/');
  }, []);

  return <></>;
};

export default Home;
