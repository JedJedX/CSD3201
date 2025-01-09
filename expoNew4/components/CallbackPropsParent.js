import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/styles";

// คอมโพเนนต์ลูก รับฟังก์ชัน onIncrease และ onDecrease ผ่าน Props
const CounterControls = ({ onIncrease, onDecrease }) => {
  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
      <Button title="Decrease" onPress={onDecrease} />
    </View>
  );
};

// คอมโพเนนต์แม่
const CallbackPropsParent = () => {
  const [count, setCount] = useState(0); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      {/* ส่งฟังก์ชัน setCount ผ่าน Props ไปยัง CounterControls */}
      <CounterControls
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count - 1)}
      />
    </View>
  );
};

export default CallbackPropsParent;
