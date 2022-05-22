import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen4 = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>I am screen 4</Text>
            <Button title="Go to screen 3" onPress={() => navigation.navigate('AndreScreen')} />
        </View>
    );
}

export default Screen4;