import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import {COLOR} from '../constant/colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BtbBack = ({navigation, goToo, title}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(goToo);
      }}
      style={styles.backButton}>
      <Text style={styles.backButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    width: windowWidth * 0.4,
    height: 60,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLOR.textInBtns,
    backgroundColor: COLOR.primaryTransparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: COLOR.textInBtns,
    fontFamily: 'Starnberg',
    fontWeight: 'bold',
    fontSize: 27,
  },
});

export default BtbBack;
