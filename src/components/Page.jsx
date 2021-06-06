import React from 'react';
import './Page.css';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';
import GameCreator from './GameCreator'

const Page = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <GameCreator />

    </div>
  );
}

export default Page;
