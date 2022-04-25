import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';

const Input = props => {
    const [text, setText] = useState(props.inputValue)

    const [entered, setEntered] = useState(false);

    const handleChangeText = (text) => {
        setEntered(true);
        setText(text);
        if (text === '') {
            props.setValid(false);
        } else {
            props.setValid(true);
        }
    }
    const handleOnBlur = () => {
        setEntered(true);
    }

    return (
        <View>
            <Text>{props.label}</Text>
            <TextInput value={text} onChangeText={handleChangeText} onBlur={handleOnBlur} />
            {!props.valid && entered ? <Text>{props.error}</Text> : <></>}
        </View>
    );
}

export default Input;