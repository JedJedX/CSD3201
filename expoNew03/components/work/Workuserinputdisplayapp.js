
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from
    'react-native';
const Workuserinputdisplayapp = () => {
    const [inputText, setInputText] = useState(''); // เก็บข้อความที่ผู้ใช้พิมพ์
    const [displayText, setDisplayText] = useState(''); //เก็บข้อความที่จะแสดงผล
    const handleShowText = () => {
        setDisplayText(inputText); // อัพเดตข้อความที่จะแสดงผล
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Input Display</Text>
            <Text style={styles.subtitle}>Programmer Name: Jedsada Chimnok</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your text"
                value={inputText}
                onChangeText={(text) => setInputText(text)} //อัพเดตข้อความที่พิมพ์
            />
            <Button title="SHOW TEXT" onPress={handleShowText}
                color="#007bff" />
            {displayText !== '' && (
                <Text style={styles.output}>You typed:
                    {displayText}</Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#556655',
        padding: 30,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff'
    },
    subtitle: {

        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    output: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
});
export default Workuserinputdisplayapp;