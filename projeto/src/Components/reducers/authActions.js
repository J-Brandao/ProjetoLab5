import authTypes from './authTypes';

export const setCurrentUser = (user) => {

    //Set the passed in user
    return{
        type: authTypes.SET_CURRENT_USER,
        currentUser: user
    }
};

export const clearCurrentUser = (user) => {

    //Set the passed in user
    return{
        type: authTypes.CLEAR_CURRENT_USER,

    }
};
