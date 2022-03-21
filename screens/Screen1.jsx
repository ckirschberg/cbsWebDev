import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { subtract, toggleHappy, add, addChatroom, deleteChatroom } from '../store/actions/ChatActions';
import { useState } from 'react'

const Screen1 = ({ navigation }) => {
    const [text, onChangeText] = useState('');

    const isHappy = useSelector(state => state.chat.isHappy); // subscribing to the store's chat slice/part
    const dispatch = useDispatch();
    const numberOfIcecreams = useSelector(state => state.chat.counter)
    const chatrooms = useSelector(state => state.chat.chatrooms);


    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
            <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.title))} />
        </TouchableOpacity>
    );


    return (
        <View>
            <Text>I am screen 1</Text>
            <Text>Is Christian happy? {isHappy.toString()}</Text>
            <Text>How many icecreams should Christians children have {numberOfIcecreams}</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen2')} />
            <Button title="Flip happy" onPress={() => dispatch(toggleHappy())} />

            <Button title="Give Icecream" onPress={() => dispatch(add())} />
            <Button title="Steal Icecream" onPress={() => dispatch(subtract())} />

            <TextInput placeholder="Chatroom name"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                keyExtractor={item => item.title} />

            <Button title='Add chatroom' onPress={() => dispatch(addChatroom(text))} />

            <FlatList data={chatrooms} renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Screen1;