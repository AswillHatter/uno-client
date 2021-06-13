import React, { useEffect, useState } from 'react';
import avatar from '../avatar.png';
import { useAuth } from '../context/authContext';


const Header = (props) => {
    const [username, setUsername] = useState('');
    const { isAuthenticated, logout, apiInstanceReady, apiInstance } = useAuth();

    useEffect(() => {
        console.log("call to action")
        apiInstance.get('/auth/user/')
        .then((r) => setUsername(r?.data?.username))
    }, [isAuthenticated, apiInstanceReady])

    return (
        <header className='header'>
        <img src={avatar}  className="avatar" alt="avatar" />
        <div>{ username }</div>
        <button onClick={logout}>Logout</button>
        </header>
    );
}



export default Header;