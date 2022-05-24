import { View, Text, Button, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Screen3 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <View style={styles.SubView}>
            <Pressable onPress={() => Alert.alert('Error page not found')}>
            <Text style={styles.ViewText}>International Club</Text>
            </Pressable>
        </View>

        <View style={styles.SubView2}>
          <Pressable onPress={() => Alert.alert('Error page not found')}>
            <Text style={styles.ViewText}>Danish Lessons</Text>
          </Pressable>  
        </View>

        <View style={styles.SubView3}>
          <Pressable onPress={() => Alert.alert('Error page not found')}>
            <Text style={styles.ViewText}>Art Club</Text>  
          </Pressable>
        </View>

        <Button title="My Organisations" onPress={() => navigation.navigate('My Organisations')} />
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
        backgroundColor: "#CACF85",
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
        backgroundColor: "#CACF85",
        height: 90,
        width: "100%",
        padding: 15,
        marginTop: 20,
        borderRadius: 5,
      },
      SubView3: {
        backgroundColor: "#CACF85",
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

export default Screen3;