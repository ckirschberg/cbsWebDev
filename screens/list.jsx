import { Text, View, StyleSheet } from "react-native";


const EventList = ({events}) => {
return (
    <View>
      {events.map(event => (
        <View style={styles.SubView}>
          <Text style={styles.ViewText} key={event.title}>{event.title }</Text>
          <Text style={styles.SubText} key={event.subTexts}>{event.subTexts}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    SubView: {
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
        fontSize: 15,
        fontStyle: "italic",
    },
})

export default EventList;