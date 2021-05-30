import React from 'react';
import avatar from '../avatar.png';


const Header = () => {
    return (
        <header className='header'>
        <img src={avatar}  className="avatar" alt="avatar" />
        <div>RandomName</div>
        </header>
    );
}



export default Header;