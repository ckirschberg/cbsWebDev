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
        <TouchableOpacity style={styles.viewStyle}>
            <Text style={styles.Viewtext}>{item.title}</Text>
            <Button title="Delete this Fact" onPress={() => dispatch(deleteChatroom(item.id))} />
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Text>Add a random fact about your self</Text>
            {/* <Text>Is Christian happy? {isHappy.toString()}</Text>
            <Text>How many icecreams should Christians children have {numberOfIcecreams}</Text>
            <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen4')} />
            <Button title="Flip happy" onPress={() => dispatch(toggleHappy())} />

            <Button title="Give Icecream" onPress={() => dispatch(add())} />
            <Button title="Steal Icecream" onPress={() => dispatch(subtract())} /> */}

            <TextInput placeholder="Chatroom name"
                style={styles.input}
                onChangeText={onChangeText}
                value={text} />

            <Button title='Add Fact' onPress={() => dispatch(addChatroom(text))} />

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
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E6E8E6"
    },
    viewStyle: {
        backgroundColor: '#FFAF87',
        flex: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    Viewtext: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    }

});

export default Screen1;