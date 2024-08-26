import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  ScrollView,
} from 'react-native';
import ModalToGo from '../components/Modal';
import {Dimensions} from 'react-native';
import BtnBack from '../components/BtnBack';
import Layaut from '../components/Layaut';
import {COLOR} from '../constant/colors';

const AbouteScreen = ({navigation}) => {
  return (
    <Layaut>
      <View style={styles.contentConteiner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.textConteiner}>
            <Text style={styles.abouteText}>
              Historical Rockets Quiz is an interactive app created by a team of
              enthusiasts with a deep interest in rocketry and space technology.
              The developers of this app have combined their knowledge of
              aerospace engineering, the history of science, and modern
              technology to offer users a unique way to study important stages
              in the development of rocketry. The team consists of specialists
              from various fields: engineers, scientists, designers and
              teachers. They sought to create not only an educational, but also
              an entertaining product that would interest both students and
              anyone interested in space. Thanks to a simple and clear
              interface, users can easily immerse themselves in the history of
              rocketry, learning about famous rockets, their developers and
              important missions. With their passion for science and technology,
              the team behind Rocket Quiz: Historical Rockets aims to inspire a
              new generation of researchers and engineers to reach new heights
              in space.
            </Text>
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </View>

      <BtnBack navigation={navigation} goToo="HomeScreen" title="Back" />
    </Layaut>
  );
};

export default AbouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imgBack: {
    flex: 1,
  },
  contentConteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textConteiner: {
    marginTop: 40,
  },
  abouteText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLOR.textInBtns,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Starnberg',
  },
});
