import React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
const Scrollviewcomponent = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Basic ScrollView Example */}
            <Text style={styles.title}>Basic ScrollView Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Jedsada Chimnok</Text>
            {[...Array(20)].map((_, index) => (
                <Text key={index} style={styles.textItem}>
                    Item {index + 1}
                </Text>
            ))}
            {/* Horizontal ScrollView Example */}
            <Text style={styles.title}>Horizontal ScrollView Example</Text>
            <Text style={styles.subtitle}>Programmer Name: Satien Janpla</Text>
            <ScrollView horizontal contentContainerStyle={styles.horizontalContent}> {[...Array(10)].map((_, index) => (
                <Text key={index} style={styles.horizontalItem}>
                    Item {index + 1}
                </Text>
            ))}
            </ScrollView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#555",
    },
    textItem: {
        fontSize: 16,
        marginVertical: 5,
    },
    horizontalContent: {
        flexDirection: "row",
    },
    horizontalItem: {
        fontSize: 16,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
    },
});
export default Scrollviewcomponent; 
