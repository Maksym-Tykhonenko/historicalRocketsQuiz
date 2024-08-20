import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import BtnBack from '../components/BtnBack';
import BtnResetProf from '../components/BtnResetProf';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [name, setName] = useState('');
  const [nameOrigen, setNameOrigen] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [nameOrigen, selectAvatar]);

  const setData = async () => {
    try {
      const data = {
        nameOrigen,
        selectAvatar,
      };

      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem(`Profile`, jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Profile`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setNameOrigen(parsedData.nameOrigen);
        setSelectAvatar(parsedData.selectAvatar);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const AvatarPicer = () => {
    let options = {
      storageOptios: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        //console.log('response==>', response.assets[0].uri);
        setSelectAvatar(response.assets[0].uri);
      } else {
        console.log('Вибір скасовано');
      }
    });
  };

  const saveName = () => {
    setNameOrigen(name);
    setName('');
  };

  const handleReset = () => {
    setSelectAvatar(null);
    setNameOrigen('');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg2.png')}
        style={styles.imgBack}>
        <View style={styles.contentConteiner}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inScrollContentConteiner}>
              <Text style={{fontSize: 50, color: '#facd39'}}>Avatar</Text>

              <TouchableOpacity
                onPress={() => {
                  AvatarPicer();
                }}
                style={styles.avatatBtn}>
                {selectAvatar ? (
                  <Image
                    source={{uri: selectAvatar}}
                    style={styles.avatarImg}
                  />
                ) : (
                  <Fontisto name="photograph" size={100} color="#000" />
                )}
              </TouchableOpacity>

              {nameOrigen ? (
                <Text style={styles.nameOrigenStyles}>{nameOrigen}</Text>
              ) : (
                <View style={{alignItems: 'center'}}>
                  <TextInput
                    placeholder="Nickname..."
                    style={styles.TextInputStyles}
                    onChangeText={setName}
                    value={name}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      saveName();
                    }}
                    style={styles.saveNicknameBtn}>
                    <Text style={styles.saveNicknameBtnText}>Save</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </View>

        {nameOrigen && <BtnResetProf handleReset={handleReset} title="Reset" />}

        <BtnBack navigation={navigation} goToo="HomeScreen" title="Back" />
      </ImageBackground>
    </View>
  );
};

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
  inScrollContentConteiner: {
    marginTop: 40,
    alignItems: 'center',
  },
  avatatBtn: {
    width: 220,
    height: 220,
    borderRadius: 150,
    backgroundColor: '#facd39',
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#facd39',
    shadowColor: '#facd39',
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  avatarImg: {
    width: 220,
    height: 220,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  saveNicknameBtn: {
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#000',
    backgroundColor: '#facd39',
    color: '#000',
    fontSize: 25,
  },
  saveNicknameBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  nameOrigenStyles: {
    color: '#facd39',
    fontWeight: 'bold',
    fontSize: 50,
  },
  TextInputStyles: {
    height: 60,
    width: windowWidth * 0.9,
    margin: 12,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    backgroundColor: '#facd39',
    color: '#000',
    fontSize: 25,
  },
});

export default Profile;
