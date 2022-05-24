import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import EventList from './list';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {

    const [events] = useState([
        {title: "School News", id: 1, page: "main", subTexts: "The reopen of Monkey Bar... click to read more"},
        {title: "Lorem ipsum", id: 2, page: "home", subTexts: "Lorem ipsum dolor sit amet"},
        {title: "Dolor Sit", id: 3, page: "home", subTexts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title: "Aenean iaculis", id: 4, page: "home", subTexts: "Consectetur adipiscing elit."},
        {title: "Mauris vulputate", id: 5, page: "home", subTexts: "Nunc scelerisque mi vitae dictum."},
        {title: "Proin commodo", id: 6, page: "home", subTexts: "Sed volutpat quam massa, et."},
      ]);

    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.HelloText}>Welcome Back</Text>
            <ScrollView>
                <Pressable onPress={() => Alert.alert('Sorry, for the delay')}>
                     <EventList events={events.filter((event) => event.id === 1)}/>
                </Pressable>

                <Pressable onPress={() => Alert.alert('Error Page not found')}>
                     <EventList events={events.filter((event) => event.page === 'home')}/>
                </Pressable>
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
    HelloText: {
        fontSize: 30,
        fontWeight: "bold",
        textDecorationLine: 'underline',
        paddingBottom: 5,
    }  
})
export default HomeScreen;