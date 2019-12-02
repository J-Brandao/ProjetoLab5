//combinar os dois Reducers num único só
import authReducer from './authReducer';
import utiReducer from './utiReducer';
import {combineReducers} from 'redux';
//import {firestoreReducer} from 'redux-firestore';
//import {firebaseReducer} from 'react-redux-firebase';
//authReducer update das informações todas
//utilizadorReducer upadate da informação nas propridades do utilizador dentro do state

const rootReducer = combineReducers ({
    auth: authReducer,
    utilizador: utiReducer,
});

export default rootReducer;
