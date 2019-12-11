import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PagPrincipal from './Components/PagPrincipal';
import Dashboard from './Components/Dashboard';
import Entrar from './Components/auth/Entrar';
import Registo from './Components/auth/Registo';
import HeroDetails from './Components/HeroDetails';
import { connect } from 'react-redux';
import { auth } from './Components/config/firebase';
import { setCurrentUser, clearCurrentUser } from "./Components/actions/authActions";
import Navbar from './Components/Navbar';

function App({currentUser, setCurrentUser, clearCurrentUser}) {
    console.log(currentUser);

   useEffect(() => {
       let unsubscribeFromAuth = null;

       unsubscribeFromAuth = auth.onAuthStateChanged(user => {

           if (user){
               //se o objeto user existir coloca-lo no CurrentUser
               setCurrentUser(user);
               console.log(currentUser);
           }else {
               //se não existir user apagar o CurrentUser
               clearCurrentUser();
               console.log(currentUser);
           }
       });

       return () => unsubscribeFromAuth();
   }, [currentUser, setCurrentUser, clearCurrentUser]);

    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={PagPrincipal}/>
                <Route path="/entrar" component={Entrar}/>
                <Route path="/registar" component={Registo}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/hero/:id" component={HeroDetails}/>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
        setCurrentUser: (user) => dispatch(setCurrentUser(user)),
        clearCurrentUser: () => dispatch(clearCurrentUser())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);