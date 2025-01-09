import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles/styles";

// คอมโพเนนต์ลูกสําหรับแสดงข้อมูลสภาพอากาศ
const WeatherCard = ({ city, temperature }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.temperature}>{temperature}°C</Text>
        </View>
    );
};
// คอมโพเนนต์แม่
const WeatherDisplayApp = () => {
    return (
        <View style={styles.container}>
            {/* หัวข้อแอป */}
            <Text style={styles.title}>Weather Display App (แสดงสภาพ
                อากาศ)</Text>
            {/* แสดงข้อมูลสภาพอากาศ */}
            <WeatherCard city="Bangkok" temperature={29} />
            <WeatherCard city="Chiang Mai" temperature={23} />
            <WeatherCard city="Phuket" temperature={28} />
        </View>
    );
};
export default WeatherDisplayApp;