import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import ModalToGo from '../components/Modal';
import {Dimensions} from 'react-native';
import BtnBack from '../components/BtnBack';

const CongratScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={styles.imgBack}>
        <View style={styles.contentConteiner}>
          <Text style={styles.congratText}>Congratulations!</Text>
          <Text style={styles.congratText}>You've passed Level 8</Text>
        </View>
        <BtnBack navigation={navigation} goToo="GameScreen" title="Ok" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imgBack: {flex: 1},
  contentConteiner: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fcfcfe',
  },
});

export default CongratScreen;
