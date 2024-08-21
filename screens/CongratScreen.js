import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground, Animated} from 'react-native';
import ModalToGo from '../components/Modal';
import {Dimensions} from 'react-native';
import BtnBack from '../components/BtnBack';
import Layaut from '../components/Layaut';

const CongratScreen = ({navigation, route}) => {
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Layaut>
      <Animated.View
        style={{...styles.contentConteiner, opacity: appearingAnim}}>
        <Text style={styles.congratText1}>Congrat!!!</Text>
        <Text style={styles.congratText2}>You passed all levels!</Text>
        <Text style={styles.congratText3}>
          You are a real connoisseur of the history of rockets!!!
        </Text>
      </Animated.View>
      <BtnBack navigation={navigation} goToo="HomeScreen" title="Ok" />
    </Layaut>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imgBack: {flex: 1},
  contentConteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  congratText1: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  congratText2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  congratText3: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default CongratScreen;
