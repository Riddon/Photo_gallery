import React from 'react';
import {Switch, Route} from "react-router-dom";
import {routes} from '../constants/constRoutes';
import MainPage from "../components/Layouts/MainPage/MainPage";
import FavoritePage from "../components/Layouts/FavoritePage/FavoritePage";

const RoutesPage = () => {
    return (
        <Switch>
            <Route exact path={routes.home.href} component={MainPage}/>
            <Route exact path={routes.favorites.href} component={FavoritePage}/>
        </Switch>
    );
};

export default RoutesPage;
