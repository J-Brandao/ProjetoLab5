import React, { useEffect } from 'react'
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavBar from "./Components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PagPrincipal from './Components/PagPrincipal';
import Dashboard from './Components/Dashboard';
import Entrar from './Components/auth/Entrar';
import Registo from './Components/auth/Registo';
import HeroDetails from './Components/HeroDetails';
//import firebase from './Components/config/firebase';
import { connect } from 'react-redux';
import { auth } from './Components/config/firebase';
import { setCurrentUser, clearCurrentUser } from "./Components/reducers/authActions";

function App({currentUser, setCurrentUser, clearCurrentUser}) {
    console.log(currentUser);

   useEffect(() => {
       let unsubscribeFromAuth = null;

       unsubscribeFromAuth = auth.onAuthStateChanged(user => {

           if (user){
               //
               setCurrentUser(user);
           }else {
               //se não existir user apagar o setCurrentUser
               clearCurrentUser();
           }
       });

       return () => unsubscribeFromAuth();
   }, [currentUser, setCurrentUser, clearCurrentUser]);

    return (
        <BrowserRouter>
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

const mapDispatchtoProps = dispatch => ({
        setCurrentUser: (user) => dispatch(setCurrentUser(user)),
        clearCurrentUser: () => dispatch(clearCurrentUser())
    }
);

export default connect(mapStateToProps, mapDispatchtoProps)(App);