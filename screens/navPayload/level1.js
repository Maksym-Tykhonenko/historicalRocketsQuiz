import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {questions1} from '../../data/questions1';
import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Level1 = ({navigation, route}) => {
  console.log('route==>', route.name);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

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

  const handleOptionSelect = index => {
    const newSelectedOptions = [...selectedOptions, index + 1];
    setSelectedOptions(newSelectedOptions);

    if (
      newSelectedOptions.length ===
      questions1[currentQuestionIndex].correct_order.length
    ) {
      if (
        JSON.stringify(newSelectedOptions) ===
        JSON.stringify(questions1[currentQuestionIndex].correct_order)
      ) {
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }

      if (currentQuestionIndex < questions1.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptions([]);
      } else {
        if (correctAnswers + 1 === 10) {
          Alert.alert(
            'Congratulations',
            'You have completed all the questions!',
            [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Level2'),
              },
            ],
          );
        } else {
          Alert.alert(
            'Нажаль ви не відповіли правильно на всі питання, спробуйте ще раз!',
            '',
            [
              {
                text: 'OK',
                onPress: () => navigation.navigate('GameScreen'),
              },
            ],
          );
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.scoreText}>{correctAnswers}/</Text>
                  <Image
                    style={styles.okImg}
                    source={require('../../assets/icons/check.png')}
                  />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.scoreText}>{incorrectAnswers}/</Text>
                  <Image
                    style={styles.noImg}
                    source={require('../../assets/icons/close.png')}
                  />
                </View>

                <Text style={styles.scoreText}>{currentQuestionIndex}/10</Text>
              </View>

              {questions1[currentQuestionIndex] && (
                <>
                  <View style={styles.questionContainer}>
                    <Text style={styles.qwestion}>
                      {questions1[
                        currentQuestionIndex
                      ].question.toLocaleUpperCase()}
                    </Text>
                  </View>

                  {questions1[currentQuestionIndex].options.map(
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

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Ionicons
            name="chevron-back"
            style={{fontSize: 20, color: '#fcfcfe'}}
          />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
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
    marginBottom: 5,
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
    //marginRight: 10,
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
  backButton: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    width: windowWidth * 0.4,
    height: 60,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fcfcfe',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    textAlign: 'center',
    color: '#fcfcfe',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Level1;
