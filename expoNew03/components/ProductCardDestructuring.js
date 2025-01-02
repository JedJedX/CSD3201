import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Child Component ใช ้Destructuring props เพื่อดึงค่า name และ price ออกมา
const ProductCardDestructuring = ({ name, price }) => {
    return (
        <View style={styles.card}>
            {/* แสดงชอื่ สนิ คา้ */}
            <Text>Product Name: {name}</Text>
            {/* แสดงราคาสนิ คา้ */}
            <Text>Price: ${price}</Text>
        </View >
    );
};
// ก าหนด Style ส าหรับ UI
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        padding: 10, // ระยะห่างภายในของการ์ด
        borderWidth: 2, // ขอบของการ์ด
        borderColor: "#000000", // สขี องขอบ
        marginBottom: 10, // ระยะห่างระหว่างการ์ด
    },
});
export default ProductCardDestructuring; // สง่ ออก Component App ใหใ้ชง้านในไฟลอ์ นื่