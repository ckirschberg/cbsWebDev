import { View, Text, Button, Alert, StyleSheet, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Input from './../components/Input'
import { useState } from 'react';

const EditProfileScreen = ({ navigation }) => {
    const username = useSelector(state => state.user.email);
    const [validUsername, setValidUsername] = useState(username !== '')

    // const save = () => {
    //     // ** if the "form" is valid ** {
    //     // save data - we need access to text here...
    //     //} else {
    //     // display error message
    //     //}
    //     if (username & validUsername) {
    //         Alert.alert("hello")
    //     }


    // }

    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Your Email address</Text>
            <Text style={styles.subText}>{username}</Text>


            <Input
                label="New Email"
                inputValue="Please enter an email address"
                error="Email cannot be empty."
                valid={validUsername}
                setValid={setValidUsername}
            />
            <Button title='Update' onPress={() => Alert.alert("Currently unable to update profile")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E6E8E6"
      },
    headingtext: {
        color: "#20232a",
        fontSize: 20,
        fontWeight: 'bold'
    },
    subText: {
        color: "#20232a",
        fontSize: 15,
        fontStyle: "italic",
        paddingBottom: 8,
    }
})
export default EditProfileScreen;