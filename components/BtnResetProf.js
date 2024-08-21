import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import Entypo from 'react-native-vector-icons/Entypo';

const BtnResetProf = ({title, handleReset}) => {
  return (
    <TouchableOpacity onPress={handleReset} style={styles.btnResetProf}>
      <Text style={styles.textResetProf}>{title}</Text>
      <Entypo name="remove-user" size={25} color="#fff" />
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
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResetProf: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
});

export default BtnResetProf;
