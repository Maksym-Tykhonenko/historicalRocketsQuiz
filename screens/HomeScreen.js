import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return (
    <View style={styles.conteiner}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.btnsConteiner}>
        <View style={styles.btnsConteiner}>
          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              navigation.navigate('GameScreen');
            }}>
            <Text style={styles.btnsText}>START</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Text style={styles.btnsText}>PROFILE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              navigation.navigate('AbouteScreen');
            }}>
            <Text style={styles.btnsText}>ABOUTE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  imgBacgr: {
    flex: 1,
  },
  btnsConteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    width: 200,
    height: 70,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: '#facd39',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: '#facd39',
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  btnsText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomeScreen;
