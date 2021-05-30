import React from 'react';
import './Page.css';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';

const Page = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />

    </div>
  );
}

export default Page;
