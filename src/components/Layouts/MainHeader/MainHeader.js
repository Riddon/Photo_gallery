import React from 'react';
import {Link} from "react-router-dom";
import {routes} from '../../../constants/constRoutes';
import './MainHeader.scss';

const MainHeader = () => {

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-list-item">
                                <Link to={routes.home.href}>
                                    {routes.home.name}
                                    <div className="header__nav-list-item-hover-line">
                                    </div>
                                </Link>
                            </li>
                            <li className="header__nav-list-item">
                                <Link to={routes.favorites.href}>
                                    {routes.favorites.name}
                                    <div className="header__nav-list-item-hover-line">
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default MainHeader;