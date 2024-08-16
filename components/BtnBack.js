import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BtbBack = ({navigation, goToo}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(goToo);
      }}
      style={styles.backButton}>
      <Ionicons name="chevron-back" style={{fontSize: 20, color: '#fcfcfe'}} />
      <Text style={styles.backButtonText}>Back</Text>
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
    borderColor: '#fcfcfe',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: '#fcfcfe',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default BtbBack;
