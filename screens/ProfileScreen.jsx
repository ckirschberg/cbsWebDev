import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/UserActions';

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    return (
        <View>
            <Text>I am ProfileScreen</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
            <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
    );
}

export default ProfileScreen;