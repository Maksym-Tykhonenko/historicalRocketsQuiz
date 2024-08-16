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
import {questions8} from '../../data/questions8';
import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalToGo from '../../components/Modal';
import BtnBack from '../../components/BtnBack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Level8 = ({navigation, route}) => {
  console.log('route==>', route.name);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  //Modal state
  const [incorrectPassedLevel, setIncorrectPassedLevel] = useState(false);
  //console.log('incorrectPassedLevel==>', incorrectPassedLevel);
  const [correctPassedLevel, setCorrectPassedLevel] = useState(false);
  const [timeLeftModal, setTimeLeftModal] = useState(false);
  console.log('timeLeftModal==>', timeLeftModal);
  const [timeLeft, setTimeLeft] = useState(20); // Таймер на 20 секунд
  const [timerExpired, setTimerExpired] = useState(false);
  const [timer, setTimer] = useState(null);

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
    setTimeLeft(20); // Скидає таймер при переході до наступного запитання
    setTimerExpired(false);
  }, [currentQuestionIndex]);

  const getLvlLogo = routeName => {
    switch (routeName) {
      case 'Level1':
        return require('../../assets/icons/lvl1.png');
      case 'Level2':
        return require('../../assets/icons/lvl2.png');
      case 'Level3':
        return require('../../assets/icons/lvl3.png');
      case 'Level4':
        return require('../../assets/icons/lvl4.png');
      case 'Level5':
        return require('../../assets/icons/lvl5.png');
      case 'Level6':
        return require('../../assets/icons/lvl6.png');
      case 'Level7':
        return require('../../assets/icons/lvl7.png');
      case 'Level8':
        return require('../../assets/icons/lvl8.png');
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
        return 'CongratScreen';
    }
  };

  const handleOptionSelect = index => {
    if (timerExpired) return;

    const newSelectedOptions = [...selectedOptions, index + 1];
    setSelectedOptions(newSelectedOptions);

    if (
      newSelectedOptions.length ===
      questions8[currentQuestionIndex].correct_order.length
    ) {
      if (
        JSON.stringify(newSelectedOptions) ===
        JSON.stringify(questions8[currentQuestionIndex].correct_order)
      ) {
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }

      if (currentQuestionIndex < questions8.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptions([]);
      } else {
        if (correctAnswers + 1 === 10) {
          setCorrectPassedLevel(true);
        } else {
          setIncorrectPassedLevel(true);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bcgr.jpeg')}
        style={styles.imgBack}>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={styles.contentConteiner}>
              <View style={styles.horizontalConteiner}>
                <Text style={styles.numberOfLvl}>Level</Text>
                <Image
                  style={styles.numbOfLvl}
                  source={getLvlLogo(route.name)}
                />
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
                <Text style={styles.timerText}>{timeLeft} sek</Text>
              </View>

              {questions8[currentQuestionIndex] && (
                <>
                  <View style={styles.questionContainer}>
                    <Text style={styles.qwestion}>
                      {questions8[
                        currentQuestionIndex
                      ].question.toLocaleUpperCase()}
                    </Text>
                  </View>

                  {questions8[currentQuestionIndex].options.map(
                    (option, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.correctOrder,
                          selectedOptions.includes(index + 1) &&
                            styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect(index)}>
                        <Text style={styles.correctOrderText}>{option}</Text>
                      </TouchableOpacity>
                    ),
                  )}
                </>
              )}
            </View>
          </ScrollView>
        </View>

        {/**BTN BACK */}
        <BtnBack navigation={navigation} goToo="GameScreen" title="Back" />

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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  numberOfLvl: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 8,
    color: '#fcfcfe',
    fontWeight: 'bold',
  },
  questionContainer: {
    marginBottom: 30,
    width: windowWidth * 0.9,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  qwestion: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 8,
    color: '#fcfcfe',
    fontWeight: 'bold',
  },
  correctOrder: {
    marginBottom: 15,
    width: windowWidth * 0.9,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fcfcfe',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctOrderText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fcfcfe',
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: 'green',
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fcfcfe',
    fontWeight: 'bold',
  },
  timeConteiner: {
    marginVertical: 30,
    width: windowWidth * 0.5,
    borderColor: '#fcfcfe',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fcfcfe',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fcfcfe',
    fontWeight: 'bold',
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
  numbOfLvl: {width: 60, height: 60, marginLeft: 10, marginBottom: 15},
  horizontalConteiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Level8;
