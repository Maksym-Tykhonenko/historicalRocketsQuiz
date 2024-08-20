import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Animated,
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
  //////////// LOADER
  const appearingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.imgBack}>
        <Animated.View
          style={{...styles.contentConteiner, opacity: appearingAnim}}>
          <Text style={{...styles.congratText, marginBottom: 40}}>Hello!</Text>
          <Text style={{...styles.congratText, marginBottom: 40}}>
            This is{' '}
          </Text>
          <Text
            style={{
              ...styles.congratText,
              color: '#facd39',
              fontSize: 60,
              textAlign: 'center',
            }}>
            Historical Rockets Quiz
          </Text>
        </Animated.View>

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
    fontSize: 50,
    fontWeight: 'bold',
    color: '#facd39',
  },
});

export default PriviusScreen;
