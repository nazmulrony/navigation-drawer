import { StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is <Text style={styles.highlight}>Welcome</Text> screen
            </Text>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    highlight: {
        color: "red",
    },
});
