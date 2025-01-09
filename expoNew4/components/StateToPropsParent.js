import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from "../styles/styles";

// คอมโพเนนต์ลูก รับค่า count ผ่าน Props
const CounterDisplay = ({ count }) => {
  return <Text style={styles.text}>Current Count: {count}</Text>;
};

// คอมโพเนนต์แม่
const StateToPropsParent = () => {
  const [count, setCount] = useState(0); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>
      {/* ส่ง State count ไปยัง CounterDisplay ผ่าน Props */}
      <CounterDisplay count={count} />
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};


export default StateToPropsParent;
