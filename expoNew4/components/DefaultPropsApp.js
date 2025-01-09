import React from 'react';
import { View, Text} from 'react-native';
import styles from "../styles/styles";

// ใช้ Default Parameters ในฟังก์ชันแทน defaultProps
const Greeting = ({ name = 'Visitor' }) => {
    return <Text style={styles.text}>Hello, {name}!</Text>;
};

const DefaultPropsApp = () => {
    return (
        <View style={styles.container}>            
            {/* ส่งค่า name เป็น 'Nonglak' */}
            <Greeting name="Nonglak" />
            {/* ไม่ส่งค่า name จะใช้ค่า default 'Visitor' */}
            <Greeting />
        </View>
    );
};



export default DefaultPropsApp;
