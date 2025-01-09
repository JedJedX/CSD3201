import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import styles from "../../styles/styles";

const ToggleLightApp = () => {
    // สร้าง state สําหรับสถานะของหลอดไฟ
    const [isLightOn, setIsLightOn] = useState(false);
    // ฟังก์ชันสําหรับสลับสถานะหลอดไฟ
    const toggleLight = () => {
        setIsLightOn((prevState) => !prevState);
    };
    return (
        <View style={styles.container}>
            {/* ชื่อแอปและชื่อผู้พัฒนา */}
            <Text style={styles.title}>Toggle Light App (เปิด-ปิดไฟ)
            </Text>
            {/* แสดงสถานะหลอดไฟ */}
            <Text style={styles.status}>
                The light is {isLightOn ? "ON" : "OFF"}
            </Text>
            {/* ปุ่ม Toggle Light */}
            <Button title="TOGGLE LIGHT" onPress={toggleLight} />
        </View>
    );
};

export default ToggleLightApp;