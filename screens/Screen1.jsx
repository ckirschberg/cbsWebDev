import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { subtract, toggleHappy, add } from '../store/actions/ChatActions';



const Screen1 = ({ navigation }) => {
    const isHappy = useSelector(state => state.chat.isHappy); // subscribing to the store's chat slice/part
    const dispatch = useDispatch();
    const numberOfIcecreams = useSelector(state => state.chat.counter)
    const chatrooms = useSelector(state => state.chat.chatrooms);
    console.log(chatrooms);

    return (
        <View>
            <Text>I am screen 1</Text>
            <Text>Is Christian happy? {isHappy.toString()}</Text>
            <Text>How many icecreams should Christians children have {numberOfIcecreams}</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen2')} />
            <Button title="Flip happy" onPress={() => dispatch(toggleHappy())} />

            <Button title="Give Icecream" onPress={() => dispatch(add())} />
            <Button title="Steal Icecream" onPress={() => dispatch(subtract())} />
        </View>
    );
}

export default Screen1;