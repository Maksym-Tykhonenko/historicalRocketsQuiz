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
          backgroundColor: '#facd39',
          flex: 1,
          marginVertical: '20%',
          marginHorizontal: '5%',
          paddingHorizontal: 10,
          borderRadius: 20,
          borderWidth: 3,
          borderColor: '#000',
          shadowColor: '#000',
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
              color: '#000',
              fontSize: 40,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 40,
              fontFamily: 'Starnberg',
              shadowColor: '#000',
              shadowOffset: {width: 30, height: 10},
              shadowRadius: 15,
              shadowOpacity: 0.2,
              elevation: 5,
            }}>
            {subTitle}
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Starnberg',
              shadowColor: '#000',
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
              borderColor: '#000',
              backgroundColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {width: 30, height: 10},
              shadowRadius: 15,
              shadowOpacity: 0.2,
              elevation: 5,
            }}>
            <Text
              style={{
                color: '#facd39',
                fontSize: 20,
                fontWeight: 'bold',
                shadowColor: '#facd39',
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
