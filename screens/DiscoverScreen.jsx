import { View, Text, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';

const DiscoverScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.SubView}>
                {/* <Pressable onPress={() => Alert.alert('Screen2')}> */}
                <Pressable onPress={() => navigation.navigate('Events')}>
                <Text style={styles.ViewText}>All Events</Text>
                </Pressable>
            </View>

            <View style={styles.SubView2}>
              <Pressable onPress={() => navigation.navigate('Student Organisations')}>
                <Text style={styles.ViewText}> Student Organisations</Text>
              </Pressable>  
            </View>

            <View style={styles.SubView3}>
              <Pressable onPress={() => Alert.alert('Error page not found')}>
                <Text style={styles.ViewText}>All Posts</Text>  
              </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E6E8E6"
      },
      Title: {
        color: "#5E239D",
        fontSize: 20,
        fontWeight: "bold"
      },
      SubView: {
        backgroundColor: "#2F97C1",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 8,
        borderRadius: 5,
      },
      ViewText: {
        marginTop: 9,
        paddingVertical: 8,
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "italic",
      },
      SubView2: {
        backgroundColor: "#0B6E4F",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
      },
      SubView3: {
        backgroundColor: "#EF767A",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default DiscoverScreen;

