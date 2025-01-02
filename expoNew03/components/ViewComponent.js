import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ViewComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Basic View Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Jedsada Chimnok</Text>
            <Text>Welcome to React Native!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#555",
    },
});
export default ViewComponent;