import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SButton = ({onPress, children, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: windowWidth * 0.4,
    height: 60,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 105, 180, 0.8)',
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
    paddingHorizontal: 5,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});

export default SButton;
