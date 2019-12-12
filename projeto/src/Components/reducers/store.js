import {createStore, applyMiddleware, compose} from 'redux';
import { getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import firebase from '../config/firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase)
    )
);

export default store;