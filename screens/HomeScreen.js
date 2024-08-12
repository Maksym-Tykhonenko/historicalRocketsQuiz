import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          width: 200,
          height: 70,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
        onPress={() => {
          navigation.navigate('GameScreen');
        }}>
        <Text>START</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 70,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text>PROFILE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 70,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
        onPress={() => {
          //navigation.navigate('GameScreen');
        }}>
        <Text>ABOUTE</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
