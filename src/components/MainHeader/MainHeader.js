import React from 'react';
import {Link} from 'react-router-dom';
import './MainHeader.scss';

const MainHeader = () => {
    return (
        <header>
            <nav>
                <Link to="/">Holi</Link>
                <Link to="/oh">Oh!</Link>
                <Link to="/oh-oh">Oh oh!</Link>
                <Link to="/oh-oh-oh">Oh oh oh!</Link>
                <Link to="/chau">Chau</Link>
            </nav>
        </header>
    );
}

export default MainHeader;
