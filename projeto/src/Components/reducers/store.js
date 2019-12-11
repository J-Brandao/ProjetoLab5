import {createStore, applyMiddleware, compose} from 'redux';
import {getFirebase} from 'react-redux-firebase';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
    )
);

export default store;