import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/UserActions';
import * as SecureStore from 'expo-secure-store';


const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    // const jenny = SecureStore.getItemAsync('email');
    const jenny = "henn0"


    return (
        <View style={styles.container}>
            <Text>I am ProfileScreen</Text>
            <Text>{jenny}</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
            <Button title="Logout" onPress={() => dispatch(logout())} />
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
export default ProfileScreen;