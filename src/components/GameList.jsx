import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {useAuth} from '../context/authContext';
import {API_ROOMS_URL} from '../config/apiRoutes'

const GameList = () => {
    const [games, setGames] = useState([]);
    const {isAuthenticated, isApiInstanceReady, apiInstance} = useAuth();
    const getGameList = () => {
        if(!isAuthenticated) return;
        apiInstance.get(API_ROOMS_URL)
        .then((response) =>{ setGames(response.data)});
    };

    const joinToRoom = (game_id) => {
        if(!isAuthenticated) return;
        apiInstance.put(API_ROOMS_URL, {game_id})
        .then((r) => {console.log(r)})
    };

    useEffect(getGameList, [isAuthenticated, isApiInstanceReady]);

    return (
        <div className="container px-3 py-3">
            {!isAuthenticated && <Redirect to="/login" />}
            <div className="columns is-multiline">
            {games.map((item) =>(
                <div className="column is-6" key={item.id}>
                    <div className="box">
                        <p>Game for {item.player_amount} players</p>
                        <span className="is-block">Players:
                            {item.players.map((player) => (
                                <p className="tag mx-1" key={player.username}>
                                    {player.username}
                                </p>
                            ))}
                        </span>
                        <button
                          type="button"
                          className="button my-2"
                          onClick={() => { joinToRoom(item.id) }}
                        >
                            Join game
                        </button>
                    </div>
                </div>
            ))}

            </div>
        </div>
    )
}

export default GameList;