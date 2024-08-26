import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const Layaut = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bakc.jpeg')}
        style={styles.imgBack}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imgBack: {
    flex: 1,
  },
});

export default Layaut;
