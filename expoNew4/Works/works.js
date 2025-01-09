import { View } from "react-native";
import styles from "../styles/styles";
import ToggleLight from "../components/works/ToggleLightApp";
import WeatherDisplay from "../components/works/WeatherDisplayApp";
import BMICalculator from "../components/works/BMICalculator";
import ViewName from "../components/ViewName";


const works = () => {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.programs}>
            {/* โปรแกรม */}
            <View style={styles.programCard}>
              <ViewName title="Toggle Light App (เปิด-ปิดไฟ)" />
              <ToggleLight />
            </View>
  
            {/* <View style={styles.programCard}>
              <ViewName title="Weather Display App (แสดงสภาพอากาศ)" />
              <WeatherDisplay />
            </View> */}
  
            {/* <View style={styles.programCard}>
              <ViewName title="BMI Calculator (คำนวณดัชนีมวลกาย)" />
              <BMICalculator />
            </View> */}
          </View>
        </View>
      </View>
    );
  };
  
  export default works;