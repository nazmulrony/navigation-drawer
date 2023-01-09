import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#038142" },
                    headerTintColor: "white",
                    drawerActiveBackgroundColor: "#6bffb5",
                    drawerActiveTintColor: "#066536",
                    drawerStyle: { backgroundColor: "#d2fee8" },
                }}
            >
                <Drawer.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ drawerLabel: "Welcome Screen" }}
                />
                <Drawer.Screen
                    name="User"
                    component={UserScreen}
                    options={{ drawerLabel: "User Screen" }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
