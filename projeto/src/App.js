import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PagPrincipal from './Components/PagPrincipal';
import Entrar from './Components/auth/Entrar';
import Registo from './Components/auth/Registo';
import HeroDetails from './Components/HeroDetails';
import Navbar from './Components/Navbar';
import Universos from './Components/Universos';
import Marvel from './Components/Marvel';
import DC from './Components/DC';
import Perfil from './Components/Perfil';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={PagPrincipal}/>
                <Route path="/entrar" component={Entrar}/>
                <Route path="/registar" component={Registo}/>
                <Route exact path="/perfil" component={Perfil}/>
                <Route path="/Marvel/:id" component={HeroDetails}/>
                <Route path="/DC/:id" component={HeroDetails}/>
                <Route path="/perfil/:id" component={HeroDetails}/>
                <Route path="/universos" component={Universos}/>
                <Route path="/Marvel" component={Marvel}/>
                <Route path="/DC" component={DC}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;