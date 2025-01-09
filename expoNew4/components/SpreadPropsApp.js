import React from 'react';
import { View, Text} from 'react-native';
import styles from "../styles/styles";

// คอมโพเนนต์แสดงข้อมูลผู้ใช้ โดยรับ Props name และ age
const UserCard = ({ name, age }) => {
    return (
        <View>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Age: {age}</Text>
        </View>
    );
};

// คอมโพเนนต์หลักที่ใช้ Spread Operator เพื่อส่ง Props หลายค่า
const SpreadPropsApp = () => {
    const userInfo = { name: 'Suchada', age: 35 }; // Object ที่เก็บข้อมูลผู้ใช้

    return (
        <View style={styles.container}>            
            {/* ใช้ Spread Operator ส่ง Props */}
            <UserCard {...userInfo} />
        </View>
    );
};



export default SpreadPropsApp;
