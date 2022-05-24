import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Screen1 from "./../screens/Screen1";
import Screen2 from "./../screens/Screen2";
import Screen3 from "./../screens/Screen3";
import MenuScreen from "./../screens/MenuScreen";
import HomeScreen from "./../screens/HomeScreen";
import DiscoverScreen from "./../screens/DiscoverScreen"
import SignupScreen from "./../screens/SignupScreen";
import LoginScreen from "./../screens/LoginScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import EditProfileScreen from "./../screens/EditProfileScreen";
import EventScreen from "./../screens/EventScreen";
import Screen4 from "./../screens/Screen4";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const NavigationComponent = ({ navigation }) => {
    const token = useSelector(state => state.user.idToken)
    return (
        <NavigationContainer >
            {token !== undefined ? (
                // Show the app with all navigation
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Discover" component={DiscoverStack}/>
                    <Tab.Screen name="Chat" component={ChatStack} />
                    <Tab.Screen name="Menu" component={MenuStack} />
                </Tab.Navigator>
            ) : (
                // show a stack navigator with only signup and login screens.
                <Stack.Navigator>
                    <Stack.Screen name="Signup" component={SignupScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer >
    );
}


function MenuStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

function ChatStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Add Facts" component={Screen1} />
            <Stack.Screen name="Screen4" component={Screen4} />
        </Stack.Navigator>
    );
}


function DiscoverStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Disover" component={DiscoverScreen} />
            <Stack.Screen name="Events" component={EventScreen} />
            <Stack.Screen name="Student Organisations" component={Screen3} />
            <Stack.Screen name="My Organisations" component={Screen2} />
        </Stack.Navigator>
    );
}

export default NavigationComponent;