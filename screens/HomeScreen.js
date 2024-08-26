import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Layaut from '../components/Layaut';
import {COLOR} from '../constant/colors';

function HomeScreen({navigation}) {
  return (
    <Layaut>
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
    </Layaut>
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
    width: 250,
    height: 80,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLOR.textInBtns,
    backgroundColor: COLOR.primari,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: COLOR.primari,
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  btnsText: {
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'Starnberg',
  },
});

export default HomeScreen;
