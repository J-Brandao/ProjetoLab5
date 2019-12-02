import firebase from '../../config/firebase';

//getFirebase, getFirestore estes objetos depois vão saber a que projeto estamos conectados
export const createUtilizador = (utilizador) => {
    return (dispatch, getState) => {
        //make async call to database
        const firestore = firebase.firestore();
        firestore.collection('utilizadores').add({
            ...utilizador,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_UTI', utilizador});
        }).catch((err) => {
            dispatch({type: 'CREATE_UTI_ERROR', err})
        })
    }
};