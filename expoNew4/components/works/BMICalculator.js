import React, { useState } from "react";
import { View, Text, TextInput, Button, } from"react-native";
import styles from "../../styles/styles";


const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [category, setCategory] = useState('');
    // ฟังก์ชันคํานวณ BMI
    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);

        if (!weightNum || !heightNum || heightNum === 0) {
            setBMI(null);
            setCategory("กรุณากรอกน้ําหนักและส่วนสูงให้ถูกต้อง");
            return;
        }
        const bmiValue = weightNum / (heightNum * heightNum);
        setBMI(bmiValue.toFixed(2));
        if (bmiValue < 18.5) {
            setCategory("Underweight (น้ําหนักต่ํากว่าเกณฑ์)");
        } else if (bmiValue < 24.9) {
            setCategory("Normal Weight (น้ําหนักปกติ)");
        } else if (bmiValue < 29.9) {
            setCategory("Overweight (น้ําหนักเกิน)");
        } else {
            setCategory("Obesity (โรคอ้วน)");
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator (คํานวณดัชนีมวลกาย)
            </Text>
            {/* Input น้ําหนัก */}
            <Text style={styles.label}>น้ําหนัก (กิโลกรัม):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                placeholder="กรอกน้ําหนัก"
            />
            {/* Input ส่วนสูง */}
            <Text style={styles.label}>ส่วนสูง (เมตร):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"

                value={height}
                onChangeText={setHeight}
                placeholder="กรอกส่วนสูง"
            />
            {/* ปุ่มคํานวณ */}
            <Button title="Calculate" onPress={calculateBMI} />
            {/* แสดงผลลัพธ์ */}
            {bmi && (
                <View style={styles.result}>
                    <Text style={styles.resultText}>Your BMI: {bmi}</Text>
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
            )}
        </View>
    );
};

export default BMICalculator;