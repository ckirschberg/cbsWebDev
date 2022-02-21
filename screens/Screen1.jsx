import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {

    return (
        <View>
            <Text>I am screen 1</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen2')} />
        </View>
    );
}

export default Screen1;