import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const RESTORE_USER = 'RESTORE_USER';

export const logout = () => {
    SecureStore.deleteItemAsync('email');
    SecureStore.deleteItemAsync('token');
    return { type: LOGOUT }
}


export const restoreUser = (email, token) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};


export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-AEZQF5g4GW5FeFcPdIfbaXUg2b5IGOI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            Alert.alert("There was a issue with signing in ")
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
        }
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-AEZQF5g4GW5FeFcPdIfbaXUg2b5IGOI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        // console.log(await response.json());

        const data = await response.json(); // json to javascript
        console.log(data);
        if (!response.ok) {
            Alert.alert("There was a issue with logging in ")
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
        }
    };
}

// export const fetchEmail = (email, password) => {
//     return async dispatch => {
//         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=AIzaSyD-AEZQF5g4GW5FeFcPdIfbaXUg2b5IGOI', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ //javascript to json
//                 //key value pairs of data you want to send to server
//                 // ...
//                 email: email,
//                 password: password,
//                 returnSecureToken: true
//             })
//         });

//         // console.log(await response.json());

//         const data = await response.json(); // json to javascript
//         console.log(data);
//         if (!response.ok) {
//             Alert.alert("There was a issue with logging in ")
//         } else {
//             await SecureStore.setItemAsync('email', data.email);
//             await SecureStore.setItemAsync('token', data.idToken);
//             dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
//         }
//     };
// }
