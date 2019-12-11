import authTypes from './authTypes';


const initalState = {
    currentUser: null
};

function authReducer (state = initalState, action) {
    switch(action.type) {
        case authTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            };

        case authTypes.CLEAR_CURRENT_USER:
            return {
                ...state,
                //se queremos apagar o user quemos que colocar o currentUser a null
                currentUser: null
            };
        default:
            return state
    };
};

export default authReducer;