import { StyleSheet, Text, View } from "react-native";

const UserScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is <Text style={styles.highlight}>User</Text> screen
            </Text>
        </View>
    );
};

export default UserScreen;

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
