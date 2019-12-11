import authTypes from '../reducers/authTypes';

export const setCurrentUser = (user) => {

    //Set the passed in user
    return{
        type: authTypes.SET_CURRENT_USER,
        currentUser: user
    }
};

export const clearCurrentUser = () => {

    //Set the passed in user
    return{
        type: authTypes.CLEAR_CURRENT_USER
    }
};
