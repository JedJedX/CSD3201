import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Docs from './docs/Docs';
import Work from './Works/works';


export default function App() {
  return (
    <ScrollView>
    < Work ToggleLightApp/>
    <StatusBar style="auto" />
    </ScrollView>
  );
};
