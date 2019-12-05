//combinar os dois Reducers num único só
import authReducer from './authReducer';
import {combineReducers, applyMiddleware} from 'redux';


const rootReducer = combineReducers ({
    auth: authReducer
});

export default rootReducer;









//import {firestoreReducer} from 'redux-firestore';
//import {firebaseReducer} from 'react-redux-firebase';
//authReducer update das informações todas
//utiReducer upadate da informação nas propridades do utilizador dentro do state