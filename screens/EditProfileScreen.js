import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Input from './../components/Input'

const EditProfileScreen = ({ navigation }) => {
    const username = useSelector(state => state.user.username);

    const save = () => {
        // ** if the "form" is valid ** {
        // save data
        //} else {
        // display error message
        //}


    }

    return (
        <View>
            <Text>I am EditProfileScreen</Text>

            <Input label="Username" inputValue={username} error="Username cannot be empty." />
            <Input label="Hi" inputValue="" error="Cannot be empty" />

            <Button title="Save" onPress={save} />
        </View>
    );
}

export default EditProfileScreen;