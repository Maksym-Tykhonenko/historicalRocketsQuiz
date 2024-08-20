import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

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
    borderColor: '#000',
    backgroundColor: '#facd39',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default BtbGo;
