import { View, Text, StyleSheet, TextInput, Alert, Pressable } from 'react-native';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser, login } from './../store/actions/UserActions'
import * as SecureStore from 'expo-secure-store';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    async function load() {
        let emailFromSecureStore = await SecureStore.getItemAsync('email');
        let tokenFromSecureStore = await SecureStore.getItemAsync('token');
        if (emailFromSecureStore && tokenFromSecureStore) {
            console.log("success", emailFromSecureStore);

            dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));

        } else {
            console.log("failure");
        }
    }

    useEffect(() => {
        load(); // uncomment to read from secure store
    }, [])


    return (
        <View style={styles.ViewStyle}>
            <TextInput placeholder='Email'
                onChangeText={setEmail}
                value={email} 
                style={styles.loginText}/>

            <TextInput placeholder='Password'
                onChangeText={setPassword}
                value={password} 
                style={styles.loginText}/>

            <View style={styles.gap}>

            </View>
            <Pressable style={styles.buttonStyle} onPress={() => dispatch(login(email, password))}>
            <Text style={styles.text}>Log in</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E6E8E6",
        alignItems: 'center'
    },
    loginText: {
        width: "100%",
        backgroundColor: "#CDD3CE",
        marginBottom: 5,
        height: 25,
    },
    gap: {
        margin: 25
    },
    buttonStyle: {
        backgroundColor: "#384E77",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})
export default LoginScreen;

