import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { Todo } from './Todo';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const todo = new Todo(Math.random().toString(), text);

    setTodos(oldTodos => [...oldTodos, todo])
    console.log(todos);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! How is this all working?</Text>

      <TextInput placeholder="Add your todo here" value={text}
        onChangeText={newText => setText(newText)} style={styles.borderBlack} />

      <Button title="Add todo" onPress={handleAddTodo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundolor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderBlack: {
    border: '1px solid #000'
  }
});