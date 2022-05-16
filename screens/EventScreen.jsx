import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>I am event</Text>
            <Button title="Go to screen 3" onPress={() => navigation.navigate('AndreScreen')} />
        </View>
    );
}

export default EventScreen;