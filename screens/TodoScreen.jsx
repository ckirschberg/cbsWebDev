import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { Todo } from './../Todo'

export default function TodoScreen() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        const todo = new Todo(Math.random().toString(), text);

        setTodos(oldTodos => [...oldTodos, todo])
        console.log(todos);
    }

    const handleDeleteTodo = (item) => {
        setTodos(() => todos.filter(todo => todo.id !== item.id))
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleDeleteTodo(item)}>
            <Text style={styles.title}>{item.text}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app! How is this all working?</Text>

            <TextInput placeholder="Add your todo here" value={text}
                onChangeText={newText => setText(newText)} style={styles.borderBlack} />

            <Button title="Add todo" onPress={handleAddTodo} />

            <FlatList data={todos} renderItem={renderItem} />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderBlack: {
        //border: '1px solid #000'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});