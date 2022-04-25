import { View, Text, Button } from 'react-native';
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


    }

    return (
        <View>
            <Text>I am EditProfileScreen</Text>

            <Input
                label="Username"
                inputValue={username}
                error="Username cannot be empty."
                valid={validUsername}
                setValid={setValidUsername}
            />
            <Input label="Hi" inputValue="" error="Cannot be empty" />

            <Button title="Save" onPress={save} />
        </View>
    );
}

export default EditProfileScreen;