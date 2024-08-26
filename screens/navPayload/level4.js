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
import {questions4} from '../../data/questions4';
import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalToGo from '../../components/Modal';
import BtnBack from '../../components/BtnBack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Layaut from '../../components/Layaut';
import {COLOR} from '../../constant/colors';

const Level4 = ({navigation, route}) => {
  console.log('route==>', route.name);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [timeLeftModal, setTimeLeftModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Таймер на 20 секунд
  const [timerExpired, setTimerExpired] = useState(false);
  const [correctPassedLevel, setCorrectPassedLevel] = useState(false);
  const [incorrectPassedLevel, setIncorrectPassedLevel] = useState(false);
  const [complite4Lvl, setComplite4Lvl] = useState(false);
  console.log('complite4Lvl==>', complite4Lvl);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [complite4Lvl]);

  const setData = async () => {
    try {
      const data = {
        complite4Lvl,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Level4`, jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      //console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level4`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite4Lvl(parsedData.complite4Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  ///////////////////////////////////////////////////

  useEffect(() => {
    if (timeLeft === 0) {
      setTimerExpired(true);
      setTimeLeftModal(true);
    }

    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(10); // Скидає таймер при переході до наступного запитання
    setTimerExpired(false);
  }, [currentQuestionIndex]);

  const getLvlLogo = routeName => {
    switch (routeName) {
      case 'Level1':
        return require('../../assets/icons/number-1.png');
      case 'Level2':
        return require('../../assets/icons/number-2.png');
      case 'Level3':
        return require('../../assets/icons/number-3.png');
      case 'Level4':
        return require('../../assets/icons/number-4.png');
      case 'Level5':
        return require('../../assets/icons/number-5.png');
      case 'Level6':
        return require('../../assets/icons/number-6.png');
      case 'Level7':
        return require('../../assets/icons/number-7.png');
      case 'Level8':
        return require('../../assets/icons/number-8.png');
      case 'ExtraLevelScreen':
        return require('../../assets/icons/extra.png');
    }
  };
  const getNavPauload = routeName => {
    switch (routeName) {
      case 'Level1':
        return 'Level2';
      case 'Level2':
        return 'Level3';
      case 'Level3':
        return 'Level4';
      case 'Level4':
        return 'Level5';
      case 'Level5':
        return 'Level6';
      case 'Level6':
        return 'Level7';
      case 'Level7':
        return 'Level8';
      case 'Level8':
        return 'ExtraLevelScreen';
      case 'ExtraLevelScreen':
        return 'HomeScreen';
    }
  };

  const handleOptionSelect = index => {
    if (timerExpired) return;

    const selectedOption = questions4[currentQuestionIndex].options[index];

    if (selectedOption === questions4[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if (currentQuestionIndex < questions4.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (correctAnswers + 1 === 10) {
        setComplite4Lvl(true);
        setCorrectPassedLevel(true);
      } else {
        setIncorrectPassedLevel(true);
      }
    }
  };

  return (
    <Layaut>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.contentConteiner}>
            <View style={styles.horizontalConteiner}>
              <Text style={styles.numberOfLvl}>Level</Text>
              <Image style={styles.numbOfLvl} source={getLvlLogo(route.name)} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: windowWidth,
              }}>
              <View style={styles.horizontalConteiner}>
                <Text style={styles.scoreText}>{correctAnswers}/</Text>
                <Image
                  style={styles.okImg}
                  source={require('../../assets/icons/check.png')}
                />
              </View>

              <View style={styles.horizontalConteiner}>
                <Text style={styles.scoreText}>{incorrectAnswers}/</Text>
                <Image
                  style={styles.noImg}
                  source={require('../../assets/icons/close.png')}
                />
              </View>

              <Text style={styles.scoreText}>{currentQuestionIndex}/10</Text>
            </View>

            <View style={styles.timeConteiner}>
              <Text style={styles.timerText}>{timeLeft}</Text>
              <Image
                style={{...styles.noImg, width: 50, height: 50}}
                source={require('../../assets/icons/stopwatch.png')}
              />
            </View>

            {questions4[currentQuestionIndex] && (
              <>
                <View style={styles.questionContainer}>
                  <Text style={styles.qwestion}>
                    {questions4[
                      currentQuestionIndex
                    ].question.toLocaleUpperCase()}
                  </Text>
                </View>

                {questions4[currentQuestionIndex].options.map(
                  (option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.correctOrder}
                      onPress={() => handleOptionSelect(index)}>
                      <Text style={styles.correctOrderText}>{option}</Text>
                    </TouchableOpacity>
                  ),
                )}
              </>
            )}
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </View>

      {/**BTN BACK */}
      <BtnBack navigation={navigation} goToo="HomeScreen" title="Back" />

      {/**incorrectAnswerModal */}
      <ModalToGo
        incorrectPassedLevel={incorrectPassedLevel}
        goToo="GameScreen"
        navigation={navigation}
        subTitle="Try again!!!"
        title="Level passed with errors..."
        btnText="Ok"
        resetLevelState={() => {
          setCorrectPassedLevel(false);
          setIncorrectPassedLevel(false);
          setTimeLeftModal(false);
        }}
      />

      {/**correctAnswerModal */}
      <ModalToGo
        incorrectPassedLevel={correctPassedLevel}
        goToo={getNavPauload(route.name)}
        navigation={navigation}
        subTitle="Congrat!!!"
        title="You gave all the correct answers. You can go to a new level !!!"
        btnText="Next"
        resetLevelState={() => {
          setCorrectPassedLevel(false);
          setIncorrectPassedLevel(false);
          setTimeLeftModal(false);
        }}
      />
      {/**timeLeftModal */}
      <ModalToGo
        incorrectPassedLevel={timeLeftModal}
        goToo="GameScreen"
        navigation={navigation}
        subTitle="Try again!!!"
        title="Response time has expired..."
        btnText="Ok"
        resetLevelState={() => {
          setCorrectPassedLevel(false);
          setIncorrectPassedLevel(false);
          setTimeLeftModal(false);
        }}
      />
    </Layaut>
  );
};

const styles = StyleSheet.create({
  contentConteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  numberOfLvl: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 8,
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontFamily: 'Starnberg',
  },
  questionContainer: {
    marginBottom: 15,
    width: windowWidth * 0.9,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  qwestion: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 5,
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontFamily: 'Starnberg',
  },
  correctOrder: {
    marginBottom: 15,
    width: windowWidth * 0.9,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLOR.textInBtns,
    backgroundColor: COLOR.primari,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctOrderText: {
    textAlign: 'center',
    fontSize: 25,
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontFamily: 'Starnberg',
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 30,
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontFamily: 'Starnberg',
  },
  timeConteiner: {
    flexDirection: 'row',
    marginVertical: 15,
    width: windowWidth * 0.5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLOR.textInBtns,
    backgroundColor: COLOR.primari,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontFamily: 'Starnberg',
  },
  horizontalConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  okImg: {
    width: 40,
    height: 30,
    marginLeft: 10,
  },
  noImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  numbOfLvl: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginBottom: 15,
  },
});

export default Level4;
