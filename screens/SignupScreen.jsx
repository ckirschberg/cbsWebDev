import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from './../store/actions/UserActions'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const token = useSelector(state => state.user.idToken)
    const emailTest = useSelector(state => state.user.email)
    // console.log(token);
    // console.log(emailTest);

    return (
        <View>
            <Text>Signup</Text>
            <TextInput placeholder='Email'
                onChangeText={setEmail}
                value={email} />

            <TextInput placeholder='Password'
                onChangeText={setPassword}
                value={password} />

            <Button title="Signup" onPress={() => dispatch(signup(email, password))} />
            <Button title="Login Instead" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

export default SignupScreen;