import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';

const ModalToGo = ({
  incorrectPassedLevel,
  goToo,
  navigation,
  subTitle,
  title,
  btnText,
  resetLevelState, // Додано новий пропс
}) => {
  const handlePress = () => {
    resetLevelState(); // Скидаємо стан
    navigation.navigate(goToo); // Переходимо на новий рівень
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={incorrectPassedLevel}>
      <View
        style={{
          backgroundColor: '#dd77b0',
          flex: 1,
          marginVertical: '30%',
          marginHorizontal: '5%',
          paddingHorizontal: 10,
          borderRadius: 20,
          borderWidth: 3,
          borderColor: '#fcfcfe',
          shadowColor: '#fff',
          shadowOffset: {width: 30, height: 10},
          shadowRadius: 15,
          shadowOpacity: 0.2,
          elevation: 5,
        }}>
        <View
          style={{
            flex: 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fcfcfe',
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 40,
              fontFamily: 'Starnberg',
              shadowColor: '#fff',
              shadowOffset: {width: 30, height: 10},
              shadowRadius: 15,
              shadowOpacity: 0.2,
              elevation: 5,
            }}>
            {subTitle}
          </Text>
          <Text
            style={{
              color: '#fcfcfe',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Starnberg',
              shadowColor: '#fff',
              shadowOffset: {width: 50, height: 30},
              shadowRadius: 15,
              shadowOpacity: 0.2,
              elevation: 5,
            }}>
            {title}
          </Text>

          <Image
            style={{marginTop: 20}}
            source={
              subTitle === 'Try again!!!'
                ? require('../assets/icons/gameOver.png')
                : require('../assets/icons/congrat.png')
            }
          />

          <TouchableOpacity
            onPress={handlePress}
            style={{
              marginTop: 80,
              width: 140,
              height: 50,
              borderWidth: 3,
              borderRadius: 50,
              borderColor: '#fcfcfe',
              backgroundColor: 'gold',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#ff6a02',
              shadowOffset: {width: 30, height: 10},
              shadowRadius: 15,
              shadowOpacity: 0.2,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#29516b',
                fontSize: 20,
                fontWeight: 'bold',
                shadowColor: '#29516b',
                shadowOffset: {width: 30, height: 10},
                shadowRadius: 15,
                shadowOpacity: 0.2,
                elevation: 5,
                fontFamily: 'Starnberg',
              }}>
              {btnText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalToGo;
