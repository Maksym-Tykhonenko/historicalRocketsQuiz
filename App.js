import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import PriviusScreen from './screens/PriviusScreen';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import Profile from './screens/ProfileScreen';
import CongratScreen from './screens/CongratScreen';
///////////////////////
import Level1 from './screens/navPayload/level1';
import Level2 from './screens/navPayload/level2';
import Level3 from './screens/navPayload/level3';
import Level4 from './screens/navPayload/level4';
import Level5 from './screens/navPayload/level5';
import Level6 from './screens/navPayload/level6';
import Level7 from './screens/navPayload/level7';
import Level8 from './screens/navPayload/level8';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="PriviusScreen" component={PriviusScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="CongratScreen" component={CongratScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Level1" component={Level1} />
          <Stack.Screen name="Level2" component={Level2} />
          <Stack.Screen name="Level3" component={Level3} />
          <Stack.Screen name="Level4" component={Level4} />
          <Stack.Screen name="Level5" component={Level5} />
          <Stack.Screen name="Level6" component={Level6} />
          <Stack.Screen name="Level7" component={Level7} />
          <Stack.Screen name="Level8" component={Level8} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
