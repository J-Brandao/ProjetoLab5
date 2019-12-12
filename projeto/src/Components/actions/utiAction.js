import firebase from '../config/firebase';

export const createUtilizador = (utilizador) => {
    return (dispatch, getState) => {
        //make async call to database
        const firestore = firebase.firestore();
        firestore.collection('utilizadores').add({
            ...utilizador,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_UTI', utilizador});
            console.log(utilizador);
        }).catch((err) => {
            dispatch({type: 'CREATE_UTI_ERROR', err})
        })
    }
};