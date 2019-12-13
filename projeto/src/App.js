import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PagPrincipal from './Components/PagPrincipal';
import Dashboard from './Components/Dashboard';
import Entrar from './Components/auth/Entrar';
import Registo from './Components/auth/Registo';
import HeroDetails from './Components/HeroDetails';
import Navbar from './Components/Navbar';
import Main from './Components/Left_side';
import Marvel from './Components/Marvel';
import DC from './Components/DC';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={PagPrincipal}/>
                <Route path="/entrar" component={Entrar}/>
                <Route path="/registar" component={Registo}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/hero/:id" component={HeroDetails}/>
                <Route path="/main" component={Main}/>
                <Route path="/Marvel" component={Marvel}/>
                <Route path="/dc" component={DC}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;