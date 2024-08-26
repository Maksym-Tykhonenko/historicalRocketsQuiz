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
import {COLOR} from '../constant/colors';
import BtbGo from '../components/BtnGo';
import Layaut from '../components/Layaut';

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
    <Layaut>
      <Animated.View
        style={{...styles.contentConteiner, opacity: appearingAnim}}>
        <Text style={styles.congratText}>Space</Text>
        <Text style={styles.congratText}>&</Text>
        <Text style={styles.congratText}>Rockets</Text>
        <Text style={styles.congratText}>Quiz</Text>

        <BtbGo navigation={navigation} goToo="HomeScreen" title="Go" />
      </Animated.View>
    </Layaut>
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
    fontSize: 90,
    fontWeight: 'bold',
    color: COLOR.textInBtns,
    fontFamily: 'Starnberg',
    marginBottom: 20,
  },
});
//COLOR.primari
export default PriviusScreen;
