import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import Entypo from 'react-native-vector-icons/Entypo';
import {COLOR} from '../constant/colors';

const BtnResetProf = ({title, handleReset}) => {
  return (
    <TouchableOpacity onPress={handleReset} style={styles.btnResetProf}>
      <Text style={styles.textResetProf}>{title}</Text>
      <Entypo name="remove-user" size={25} color={COLOR.textInBtns} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnResetProf: {
    position: 'absolute',
    bottom: 30,
    left: 10,
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
  textResetProf: {
    textAlign: 'center',
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontSize: 27,
    marginRight: 10,
    fontFamily: 'Starnberg',
  },
});

export default BtnResetProf;
