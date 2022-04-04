import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Screen1 from "./../screens/Screen1";
import Screen2 from "./../screens/Screen2";
import Screen3 from "./../screens/Screen3";
import MenuScreen from "./../screens/MenuScreen";
import DiscoverScreen from "./../screens/DiscoverScreen";
import SignupScreen from "./../screens/SignupScreen";
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavigationComponent = ({ navigation }) => {
    const myVariable = 1;
    return (
        <NavigationContainer >
            {"is the user logged in" ? (
                // Show the app with all navigation
            ): (
                    // show a stack navigator with only signup and login screens.
                )}

            <Tab.Navigator>
                <Tab.Screen name="Home" component={SignupScreen} />
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Chat" component={ChatStack} />
                <Tab.Screen name="Menu" component={MenuScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="AndreScreen" component={Screen3} />
        </Stack.Navigator>
    );
}



export default NavigationComponent;