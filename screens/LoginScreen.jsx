import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {

    return (
        <View style={styles.ViewStyle}>
            <Text>I am Login!</Text>
            <Text>hello</Text>
            <Text>Testing out the git</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E6E8E6",
        alignItems: 'center'
    },
})
export default LoginScreen;