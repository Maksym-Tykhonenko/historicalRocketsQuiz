import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../constant/colors';

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
    borderColor: COLOR.textInBtns,
    backgroundColor: COLOR.primari,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLOR.primari,
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
    paddingHorizontal: 5,
  },
  text: {
    color: COLOR.textInBtns,
    fontSize: 16,
    fontFamily: 'Starnberg',
  },
});

export default SButton;
