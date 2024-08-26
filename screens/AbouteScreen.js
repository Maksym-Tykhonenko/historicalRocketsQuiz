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
              Space & Rockets Quiz is an engaging trivia app that allows you to
              explore and test your knowledge about space and rocket technology.
              The app features 8 main levels and one extra surprise level,
              providing endless hours of entertainment and learning. Key
              Features: Space Levels: The first 4 levels are dedicated to
              general space knowledge and include 10 questions per level. Each
              question has 4 answer choices, and you must respond within 10
              seconds. Answer all 10 questions correctly to unlock the next
              level. Rockets and Spacecraft Levels: Starting from Level 5, the
              focus shifts to space rockets and spacecraft. Each level presents
              10 questions where you need to arrange 3 answer choices in
              chronological order. Correctly answering all questions will unlock
              the next level. Secret Image: As you complete each level, you will
              unlock a piece of a secret image in the "Profile" tab. Extra
              Level: After completing all 8 main levels, you will gain access to
              an extra surprise level, offering even more exciting challenges
              and surprises. Test your knowledge, learn new facts about space
              and rockets, and enjoy the learning process with "Space & Rockets
              Quiz"!
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
    fontSize: 30,
    fontWeight: 'bold',
    color: COLOR.textInBtns,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Starnberg',
  },
});
