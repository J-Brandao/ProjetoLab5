export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "LOGIN_SUCESS"})
        }).catch((err) => {
            dispatch({type: "ERRO_LOGIN", err})
        })
    }
};

export const sair = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({type: "SUCESSO_A_SAIR"})
            })
    }
};

export const Registar = (newUser) => {
    //Set the passed in user
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        //const cod = "pedro";

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('utilizadores').doc(resp.user.uid).set({
                nomeAgente: newUser.nomeAgente,
                codAgente: newUser.codAgente,
                persVistos: newUser.persVistos
            })
        }).then(() => {
            dispatch({type: "REGISTO_SUCESSO"})
        }).catch(err => {
            dispatch({type: "ERRO_REGISTO", err})
        })

    }
};

export const encontrado = (personagens, uid) => {
    console.log(personagens);
    console.log(uid);
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log("estou aqui");
        console.log(getState);
        const firestore = getFirestore();
        const firebase= getFirebase;


        firestore.collection("utilizadores").where("uid", "==", uid).get().then(() => {
            return firestore.collection("utilizadores").doc(uid).update({

                persVistos: [personagens.nome, personagens.imagem]

            });
        })
            .then(() => {
                console.log("chegou ao dispatch");
                dispatch({type: 'ADD_ENCONTRADO'});
            })
            .catch((err) => {
                console.log(err);
                dispatch({type: 'ERRO_ENCONTRADO'});

            })

    }
};

