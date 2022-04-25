import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

const Input = props => {
    const [text, setText] = useState(props.inputValue)
    const [valid, setValid] = useState(props.inputValue !== '')
    const [entered, setEntered] = useState(false);

    const handleChangeText = (text) => {
        setEntered(true);
        setText(text);
        if (text === '') {
            setValid(false);
        } else {
            setValid(true);
        }
    }
    const handleOnBlur = () => {
        setEntered(true);
    }

    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput value={text} onChangeText={handleChangeText} onBlur={handleOnBlur} />
            {!valid && entered ? <Text>{props.error}</Text> : <></>}
        </View>
    );
}

export default Input;