import authTypes from './authTypes';


const initalState = {
    authError: null,
    currentUser: null
};

function authReducer (state = initalState, action) {
    switch(action.type) {
        case "ERRO_LOGIN":
            return {
                ...state,
                authError: "As credenciais não correspondem à verdade."
            };
        case "LOGIN_SUCESS":
            console.log('login com sucesso');
            return {
                ...state,
                authError: null
            };
        case "SUCESSO_A_SAIR":
            console.log('saiu com sucesso');
            return {
                state
            };
        case "REGISTO_SUCESSO":
            console.log('sucesso de registo');
            return {
                ...state,
                authError: null
            };
        case "ERRO_SUCESSO":
            console.log("erro de registo");
            return {
                ...state,
                authError: action.err
            };
        default:
            return state
    }
}

export default authReducer;