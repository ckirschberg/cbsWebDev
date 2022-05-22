import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Input from './../components/Input'
import { useState } from 'react';

const EditProfileScreen = ({ navigation }) => {
    const username = useSelector(state => state.user.username);
    const [validUsername, setValidUsername] = useState(username !== '')

    const save = () => {
        // ** if the "form" is valid ** {
        // save data - we need access to text here...
        //} else {
        // display error message
        //}
        if (username & validUsername) {
            Alert.alert("hello")
        }

    }

    return (
        <View style={styles.container}>
            <Text>I am EditProfileScreen</Text>

            <Input
                label="Username"
                inputValue={username}
                error="Username cannot be empty."
                valid={validUsername}
                setValid={setValidUsername}
            />
            <Input 
                label="Password" 
                error="Password cannot be empty" />

            {/* <Button title="Save" onPress={save} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E6E8E6"
      },
})
export default EditProfileScreen;