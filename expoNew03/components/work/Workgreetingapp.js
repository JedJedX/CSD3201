import React, { useState } from 'react';
import {
    View, Text, TextInput, Button, Alert, StyleSheet,
} from 'react-native';
const Workgreetingapp = () => {
    const [name, setName] = useState(''); // สร้าง state สําหรับเก็บชื่อผู้ใช้
    const handlePress = () => {
        if (name.trim() === '') {
            Alert.alert('Error', 'Please enter your name!'); //ตรวจสอบว่าชื่อว่างหรือไม่
        } else {
            Alert.alert('Alert', `Welcome, ${name}!`); // แสดงข้อความต้อนรับ
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome App</Text>
            <Text style={styles.subtitle}>Programmer Name:
                Jedsada Chimnok</Text>
            <Text style={styles.label}>Enter your name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title="SUBMIT" onPress={handlePress} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '80%',
    },
});
export default Workgreetingapp;