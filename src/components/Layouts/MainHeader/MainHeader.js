import React from 'react';
import {NavLink} from "react-router-dom";
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
                                <NavLink activeClassName='is-active' exact={true} to={routes.home.href}>
                                    {routes.home.name}
                                    <div className="header__nav-list-item-hover-line">
                                    </div>
                                </NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='is-active' to={routes.favorites.href}>
                                    {routes.favorites.name}
                                    <div className="header__nav-list-item-hover-line">
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default MainHeader;