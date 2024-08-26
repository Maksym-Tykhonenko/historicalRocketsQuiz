import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {COLOR} from '../constant/colors';

const BtbGo = ({navigation, goToo, title}) => {
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
    backgroundColor: COLOR.primari,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'Starnberg',
  },
});

export default BtbGo;
// backgroundColor: 'rgba(255, 105, 180, 0.8)',
// backgroundColor: '#FF69B4',
// color: '#facd39',
