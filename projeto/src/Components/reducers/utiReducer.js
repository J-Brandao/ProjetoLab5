//initState é a variavel que contem o objeto que se quer passar para outra página

const initState = {

};
const utiReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_UTI':
            console.log('utilizador criado',action.utilizador);
            return state;
        case 'CREATE_UTI_ERROR':
            console.log('erro na criação do utilizador', action.err);
            return state;
        default:
            return state;
    }
};

export default utiReducer;