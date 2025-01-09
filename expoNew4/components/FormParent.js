import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from "../styles/styles";

// คอมโพเนนต์ลูกสำหรับฟอร์ม
const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(''); // State ภายในฟอร์ม

  return (
    <View>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your name"
      />
      {/* เรียกฟังก์ชัน onSubmit เมื่อกดปุ่ม */}
      <Button title="Submit" onPress={() => onSubmit(inputValue)} />
    </View>
  );
};

// คอมโพเนนต์แม่
const FormParent = () => {
  const [submittedValue, setSubmittedValue] = useState(''); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>      
      <Text style={styles.text}>Submitted Value: {submittedValue}</Text>
      {/* ส่งฟังก์ชัน setSubmittedValue ไปยัง InputForm */}
      <InputForm onSubmit={(value) => setSubmittedValue(value)} />
    </View>
  );
};


export default FormParent;
