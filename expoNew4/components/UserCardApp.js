import React from 'react';
import { View, Text} from 'react-native';
import styles from "../styles/styles";

// คอมโพเนนต์สำหรับแสดงข้อมูลผู้ใช้ โดยรับ Props user ที่เป็น Object
const UserCard = ({ user }) => {
    return (
        <View>
            {/* แสดงชื่อและอายุที่ส่งมาผ่าน Props user */}
            <Text style={styles.text}>Name: {user.name}</Text>
            <Text style={styles.text}>Age: {user.age}</Text>
        </View>
    );
};

// คอมโพเนนต์หลักที่ส่ง Object user ไปยัง UserCard
const UserCardApp = () => {
    const userInfo = { name: 'Anucha', age: 28 }; // Object ที่เก็บข้อมูลผู้ใช้

    return (
        <View style={styles.container}>            
            {/* ส่ง Object userInfo ให้ UserCard */}
            <UserCard user={userInfo} />
        </View>
    );
};
export default UserCardApp;
