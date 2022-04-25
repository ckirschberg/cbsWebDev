import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {


    return (
        <View>
            <Text>I am ProfileScreen</Text>
            <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
        </View>
    );
}

export default ProfileScreen;