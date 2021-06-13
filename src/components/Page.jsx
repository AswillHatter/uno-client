import React, { useEffect, useState } from 'react';
import './Page.css';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';
import GameCreator from './GameCreator';
import { useAuth } from '../context/authContext';
import GameList from './GameList';
import GameField from './GameField';
import GameLobby from './GameLobby';
import { API_PLAYER_ROOM_EXIST_URL } from '../config/apiRoutes';

const Page = () => {
  const [playerGame, setPlayerGame] = useState(null);

  const {isAuthenticated, isApiInstanceReady, apiInstance} = useAuth();

  const getPlayerGame = () => {
    apiInstance.get(API_PLAYER_ROOM_EXIST_URL)
    .then((r) => setPlayerGame(r.data));
  }

  useEffect(getPlayerGame, [isAuthenticated, isApiInstanceReady])

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/* <GameCreator /> */}
      { !playerGame &&  <GameList />}
      { playerGame && playerGame.is_started && <GameField /> }
      { playerGame && !playerGame.is_started && <GameLobby /> }

    </div>
  );
}

export default Page;
