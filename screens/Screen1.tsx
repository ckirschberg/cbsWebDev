import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { add, addChatroom, deleteChatroom, fetchChatrooms, subtract, toggleHappy } from '../store/actions/ChatActions';

const Screen1 = ({ navigation }: { navigation: any }) => {
    const [text, onChangeText] = useState('');

    const isHappy = useSelector((state: RootState) => state.chat.isHappy); // subscribing to the store's chat slice/part
    const dispatch = useDispatch();
    const numberOfIcecreams = useSelector((state: RootState) => state.chat.counter)
    const chatrooms = useSelector((state: RootState) => state.chat.chatrooms);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    console.log("chatrooms", chatrooms);

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
            <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
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
                value={text} />

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