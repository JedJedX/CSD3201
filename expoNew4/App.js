import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import Docs from './docs/Docs';


export default function App() {
  return (
    <ScrollView>
    < Docs GreetingApp/>
      <StatusBar style="auto" />

    </ScrollView>
  );
};
