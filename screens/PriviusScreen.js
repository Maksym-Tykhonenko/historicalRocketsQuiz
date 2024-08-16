import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BtnBack from '../components/BtnBack';
import BtbGo from '../components/BtnGo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PriviusScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={styles.imgBack}>
        <View style={styles.contentConteiner}>
          <Text style={{...styles.congratText, marginBottom: 40}}>Hello!</Text>
          <Text style={{...styles.congratText, marginBottom: 40}}>
            This is{' '}
          </Text>
          <Text
            style={{
              ...styles.congratText,
              color: '#fff',
              fontSize: 50,
              textAlign: 'center',
            }}>
            Historical Rockets Quiz
          </Text>
        </View>

        <BtbGo navigation={navigation} goToo="HomeScreen" title="Go" />
      </ImageBackground>
    </View>
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
  },
  congratText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fcfcfe',
  },
});

export default PriviusScreen;
