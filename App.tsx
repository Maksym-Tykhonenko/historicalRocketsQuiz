
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Welcome to the React Native App!</Text>
      <Text>This is a test component.</Text>
    </View>
  )
}

export default App;
