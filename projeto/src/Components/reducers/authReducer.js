import authTypes from './authTypes';

const initalState = {
    authError: null,
    encontrados: [{
        imagem: "",
        nome: ""
}]
}
;

function authReducer(state = initalState, action) {
    switch (action.type) {
        case "ERRO_LOGIN":
            return {
                ...state,
                authError: "As credenciais não correspondem à verdade."
            };
        case "LOGIN_SUCESS":
            console.log('login com sucesso');
            return {
                ...state,
                authError: null,
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
        case "ERRO_REGISTO":
            console.log("erro de registo");
            return {
                ...state,
                authError: "O mail já está a ser utilizado."
            };
        case "ADD_ENCONTRADO":
            console.log("Adicionado");
            return {
                ...state,
            };
        case "ERRO_ENCONTRADO":
            console.log("erro");
            return {
                ...state,
            };

        default:
            return state
    }
}

export default authReducer;