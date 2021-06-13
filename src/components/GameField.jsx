import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {useAuth} from '../context/authContext';
import {API_ROOMS_URL} from '../config/apiRoutes'

const GameField = () => {
    const [games, setGames] = useState([]);
    const {isAuthenticated, isApiInstanceReady, apiInstance} = useAuth();
    

    //useEffect(getGameList, [isAuthenticated, isApiInstanceReady]);

    return (
        <div className="container px-3 py-3">
            {!isAuthenticated && <Redirect to="/login" />}
            <div className="columns is-multiline">
            {games.map((item) =>(
                <div className="column is-6" key={item.id}>
                    
                </div>
            ))}

            </div>
        </div>
    )
}

export default GameField;