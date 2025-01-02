import { StatusBar } from 'expo-status-bar';
import { ImageBackgroundComponent, ImageComponent, StyleSheet, Text, View } from 'react-native';
import ProductCardProps from './components/ProductCardProps';
import ProductCardDestructuring from './components/ProductCardDestructuring';
import SimpleMessage from './components/SimpleMessage'; 
import ViewComponent from './components/ViewComponent';
import Flexbox from './components/Flexbox';
import NestedView from './components/NestedView';
import ScrollableView from './components/ScrollableView';
import TextComponent from './components/TextComponent';
import Imagecomponent from './components/Imagecomponent';
import Buttoncomponent from './components/Buttoncomponent';
import Scrollviewcomponent from './components/Scrollviewcomponent';
import TextInputcomponent from './components/TextInputcomponent';
import Workgreetingapp from './components/work/Workgreetingapp';
import Worklistapp from './components/work/Worklistapp';
import Workuserinputdisplayapp from './components/work/Workuserinputdisplayapp';







export default function App() {
  return (

    <View style={styles.container}>
      {/* <Text style={styles.title}>Funcomponent Example</Text> */}
      {/* <Text style={styles.subtitle}>Programmer Name: Jedsada</Text> */}
      {/* <Text>Welcome to React Native!</Text> */}
      {/* <ProductCardProps name="Milk" price={200} /> */}
      {/* <ProductCardDestructuring name="Oreo" price={15} /> */}
      {/* <SimpleMessage/> */}
      {/* <ViewComponent/> */}
      {/* <Flexbox/> */}
      {/* <NestedView/> */}
      {/* <ScrollableView/> */}
      {/* <TextComponent/>  */}
      {/* <Imagecomponent/> */}
      {/* <Buttoncomponent/> */}
      {/* <Scrollviewcomponent/> */}
      {/* <TextInputcomponent/> */}
      {/* <Workgreetingapp/> */}
      {/* <Worklistapp/> */}
      <Workuserinputdisplayapp/>

    </View>
    // Parent Component ที่เรียกใช ้ProductCard และส่ง props ให ้
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
