import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {questions1} from '../../data/questions1';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Level1 = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log('currentQuestionIndex==>', currentQuestionIndex);
  console.log('selectedOptions==>', selectedOptions);

  const handleOptionSelect = index => {
    setSelectedOptions(prev => [...prev, index + 1]);
    // Check if the selectedOptions match the correct order
    if (
      selectedOptions.length + 1 ===
      questions1[currentQuestionIndex].correct_order.length
    ) {
      if (
        JSON.stringify(selectedOptions.concat(index + 1)) ===
        JSON.stringify(questions1[currentQuestionIndex].correct_order)
      ) {
        if (currentQuestionIndex < questions1.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedOptions([]);
        } else {
          Alert.alert(
            'Congratulations',
            'You have completed all the questions!',
          );
        }
      } else {
        Alert.alert('Wrong', 'Please try again!');
        setSelectedOptions([]);
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
              <Text style={styles.numberOfLvl}>Level 1</Text>
              <Text style={styles.numberOfLvl}>{currentQuestionIndex}/10</Text>

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
                      <View key={index}>
                        <TouchableOpacity
                          style={styles.correctOrder}
                          onPress={() => handleOptionSelect(index)}>
                          <Text style={styles.correctOrderText}>{option}</Text>
                        </TouchableOpacity>
                      </View>
                    ),
                  )}
                </>
              )}
            </View>
          </ScrollView>
        </View>

        {/**BTM BACK */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<-'}Back</Text>
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
  lyautBack: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 50,
    borderWidth: 2,
    borderColor: '#fcfcfe',
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
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
    //borderWidth: 2,
    //borderRadius: 20,
    //borderColor: '#fcfcfe',
    //backgroundColor: 'rgba(255, 105, 180, 0.8)',
    paddingHorizontal: 10,
    paddingVertical: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
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
    marginBottom: 8,
    color: '#fcfcfe',
    fontWeight: 'bold',
  },

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
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 105, 180, 0.8)',
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  backButtonText: {
    color: '#fcfcfe',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Level1;
