import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from './../store/actions/ChatActions'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

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
        </View>
    );
}

export default SignupScreen;