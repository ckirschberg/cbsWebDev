import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleHappy } from '../store/actions/ChatActions';



const Screen1 = ({ navigation }) => {
    const isHappy = useSelector(state => state.chat.isHappy); // subscribing to the store's chat slice/part
    const dispatch = useDispatch();

    return (
        <View>
            <Text>I am screen 1</Text>
            <Text>Is Christian happy? {isHappy.toString()}</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen2')} />
            <Button title="Flip happy" onPress={() => dispatch(toggleHappy())} />
        </View>
    );
}

export default Screen1;