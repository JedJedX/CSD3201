import React from 'react';
import { View, Text} from 'react-native';
import styles from "../styles/styles";

// คอมโพเนนต์สำหรับแสดงข้อความต้อนรับ โดยรับ Props ชื่อ name
const Greeting = ({ name }) => {
    return <Text style={styles.text}>Hello, {name}!</Text>;
};
// คอมโพเนนต์หลักที่ส่ง Props name ไปยัง Greeting
const GreetingApp = () => {
    return (
        <View style={styles.container}>
            {/* ส่ง Props name ให้ Greeting */}
            <Greeting name="Somchai" />
            <Greeting name="Suda" />
        </View>
    );
};


export default GreetingApp;
