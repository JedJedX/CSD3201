import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

const ViewName = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerName}>
        Programmer: Jedsada Chimnok
      </Text>
    </View>
  );
};

export default ViewName;