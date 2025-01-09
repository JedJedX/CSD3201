import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./../styles/styles";
import CallbackPropsParent from "../components/CallbackPropsParent";
import CounterApp from "../components/CounterApp";
import DefaultPropsApp from "../components/DefaultPropsApp";
import FormParent from "../components/FormParent";
import GreetingApp from "../components/GreetingApp";
import SpreadPropsApp from "../components/SpreadPropsApp";
import StateToPropsParent from "../components/StateToPropsParent";
import TimerApp from "../components/TimerApp";
import TriangleAreaApp from "../components/TriangleAreaApp";
import UserCardApp from "../components/UserCardApp";
import ViewName from "../components/ViewName";


const Docs = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.programs}>
                    {/* <View style={styles.programCard}>
                        <ViewName title="การส่ง Callback Function ผ่าน Props เพื่ออัปเดต State" />
                        <CallbackPropsParent />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="แบบฟังก์ชัน (Callback Props)" />
                        <CounterApp />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="แบบค่าเริ่มต้น (Default Props)" />
                        <DefaultPropsApp />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="การสร้างฟอร์มที่ส่งข้อมูลกลับไปยังคอมโพเนนต์แม่" />
                        <FormParent />
                    </View> */}
                    <View style={styles.programCard}>
                        <ViewName title="แบบค่าเดี่ยว (Primitive Props)" />
                        
                        <GreetingApp />
                    </View>
                    {/* <View style={styles.programCard}>
                        <ViewName title="แบบกระจายค่า (Spread Props)" />
                        <SpreadPropsApp />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="การส่งค่า State ไปยังคอมโพเนนต์ลูกผ่าน Props" />
                        <StateToPropsParent />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="แอปพลิเคชัน: ตัวจับเวลา (Timer App)" />
                        <TimerApp />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="Triangle Area Calculator" />
                        <TriangleAreaApp />
                    </View> */}
                    {/* <View style={styles.programCard}>
                        <ViewName title="แบบหลายค่า (Object Props)" />
                        <UserCardApp />
                    </View> */}
                </View>
            </View>
        </ScrollView>
    );
};

export default Docs;