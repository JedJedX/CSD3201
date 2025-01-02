import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Child Component ที่รับ props เป็นพารามิเตอร์
const ProductCardProps = (props) => {
    
    return (
        
        <View style={styles.card}>
            {/* แสดงชื่อ สินค้า โดยเข้าถึงผ่าน props.name */}
            <Text>Product Name: {props.name}</Text>
            {/* แสดงราคา สินค้า  โดยเข้าถึงผ่าน props.price */}
            <Text>Price: ${props.price}</Text>
        </View>
    );
};
// กำหนด Style สำหรับ UI
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        padding: 10, // ระยะห่างภายในของการ์ด
        borderWidth: 1, // ขอบของการ์ด
        borderColor: "#ddd", // สขี องขอบ
        marginBottom: 10, // ระยะห่างระหว่างการ์ด
    },

});
export default ProductCardProps; // สง่ ออก Component App ใหใ้ชง้านในไฟลอ์ นื่