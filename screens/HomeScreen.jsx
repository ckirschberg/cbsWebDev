import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
// testing git 2
    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.HelloText}>Welcome Back</Text>

            <ScrollView>
            <View style={styles.SubView}>
                <Pressable onPress={() => Alert.alert('Error Page not found')}>
                <Text style={styles.ViewText}>School News</Text>
                <Text style={styles.SubText}>The reopen of Monkey Bar... click to read more</Text>  
                </Pressable>
            </View>

            <View style={styles.SubView2}>
                <Pressable onPress={() => Alert.alert('Error Page not found')}>
                <Text style={styles.ViewText}>Lorem ipsum</Text>
                <Text style={styles.SubText}>Lorem ipsum dolor sit amet</Text>  
                </Pressable>
            </View>

            <View style={styles.SubView}>
                <Pressable onPress={() => Alert.alert('Error Page not found')}>
                <Text style={styles.ViewText}>Dolor Sit</Text>
                <Text style={styles.SubText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>  
                </Pressable>
            </View>

            <View style={styles.SubView2}>
                <Pressable onPress={() => Alert.alert('Error Page not found')}>
                <Text style={styles.ViewText}>Aenean iaculis</Text>
                <Text style={styles.SubText}>Consectetur adipiscing elit.</Text>  
                </Pressable>
            </View>                
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1, 
        padding: 20, 
        backgroundColor: '#E6E8E6',
        alignItems: 'center'
    },
    SubView: {
        backgroundColor: "#2F97C1",
        height: 150,
        width: "100%",
        padding: 15,
        marginTop: 30,
        borderRadius: 5,
    },
    SubView2: {
        backgroundColor: "#D0A5C0",
        height: 150,
        width: "100%",
        padding: 15,
        marginTop: 30,
        borderRadius: 5,
    },
    ViewText: {
        marginTop: 10,
        paddingVertical: 8,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    SubText: {
        marginTop: 25,
        paddingVertical: 8,
        color: "#20232a",
        // textAlign: "center",
        fontSize: 15,
        // fontWeight: "bold",
        fontStyle: "italic",
    },
    HelloText: {
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: 'underline',
        paddingBottom: 5,
    }  
})
export default HomeScreen;