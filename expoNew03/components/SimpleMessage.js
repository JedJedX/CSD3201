import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// สร ้าง Class Component
class SimpleMessage extends Component {
    // ก าหนด state ใน constructor
    constructor(props) {
        super(props);
        this.state = {
            message: "ยินดีต้อนรับ!", // ค่าเริ่มต้นของข ้อความ
        };
    }
    // ฟังกช์ นั เปลยี่ นขอ้ ความใน state
    handlePress = () => {
        this.setState({ message: "ขอบคุณที่มาเยี่ยมชมแอปของเรา!" });
    };
    render() {
        return (
            <View style={styles.container}>
                {/* แสดงข ้อความจาก state */}
                <Text style={styles.text}>{this.state.message}</Text>
                {/* ป่มุ เรยี กฟังกช์ นั handlePress */}
                <Button title="เปลี่ยนข้อความ" onPress={this.handlePress} />
            </View>
        );
    }
}
// ก าหนดสไตลส์ าหรับ UI
const styles = StyleSheet.create({
    text: {
        fontSize: 18, // ขนาดตัวอักษร
        marginBottom: 20, // ระยะห่างจากด้านล่าง
        color: "#333", // สขี อ้ ความ
    },
});
export default SimpleMessage;