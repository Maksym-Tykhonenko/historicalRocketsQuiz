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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import BtnBack from '../components/BtnBack';
import BtnResetProf from '../components/BtnResetProf';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layaut from '../components/Layaut';
import {COLOR} from '../constant/colors';

const Profile = ({navigation}) => {
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [name, setName] = useState('');
  const [nameOrigen, setNameOrigen] = useState('');
  console.log('name', name);
  console.log('nameOrigen', nameOrigen);

  const [complite1Lvl, setComplite1Lvl] = useState(false);
  const [complite2Lvl, setComplite2Lvl] = useState(false);
  const [complite3Lvl, setComplite3Lvl] = useState(false);
  const [complite4Lvl, setComplite4Lvl] = useState(false);
  const [complite5Lvl, setComplite5Lvl] = useState(false);
  const [complite6Lvl, setComplite6Lvl] = useState(false);
  const [complite7Lvl, setComplite7Lvl] = useState(false);
  const [complite8Lvl, setComplite8Lvl] = useState(false);
  console.log('complite1Lvl==>', complite1Lvl);

  useEffect(() => {
    getData1Lvl();
    getData2Lvl();
    getData3Lvl();
    getData4Lvl();
    getData5Lvl();
    getData6Lvl();
    getData7Lvl();
    getData8Lvl();
  }, []);

  const getData1Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level1`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite1Lvl(parsedData.complite1Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getData2Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level2`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite2Lvl(parsedData.complite2Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getData3Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level3`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite3Lvl(parsedData.complite3Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getData4Lvl = async () => {
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
  const getData5Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level5`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite5Lvl(parsedData.complite5Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getData6Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level6`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite6Lvl(parsedData.complite6Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getData7Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level7`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite7Lvl(parsedData.complite7Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  const getData8Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem(`Level8`);
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setComplite8Lvl(parsedData.complite8Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  //////////////////////////////////////////////////

  const board = [
    {
      id: 1,
      image: complite1Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_001.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 2,
      image: complite2Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_002.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 3,
      image: complite3Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_003.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 4,
      image: complite4Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_004.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 5,
      image: complite5Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_005.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 6,
      image: complite6Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_006.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 7,
      image: complite7Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_007.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 8,
      image: complite8Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_008.jpg')
        : require('../assets/whait.jpeg'),
    },
    {
      id: 9,
      image: complite8Lvl
        ? require('../assets/cut_images_5lTHLcRePKqN/image_part_009.jpg')
        : require('../assets/whait.jpeg'),
    },
  ];

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
    <Layaut>
      <View style={styles.contentConteiner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inScrollContentConteiner}>
            <Text
              style={{
                fontSize: 50,
                color: COLOR.textInBtns,
                fontFamily: 'Starnberg',
              }}>
              Avatar
            </Text>

            <TouchableOpacity
              onPress={() => {
                AvatarPicer();
              }}
              style={styles.avatatBtn}>
              {selectAvatar ? (
                <Image source={{uri: selectAvatar}} style={styles.avatarImg} />
              ) : (
                <AntDesign name="picture" size={100} color={COLOR.textInBtns} />
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

            <Text
              style={{
                ...styles.secretImgText,
                marginTop: nameOrigen ? 80 : 20,
              }}>
              Sicret image!!!
            </Text>

            {/**img Block */}
            <View style={styles.secretImgConteiner}>
              {board.map((item, index) => (
                <Image
                  key={index}
                  source={item.image}
                  style={styles.secretImgPart}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      {nameOrigen && <BtnResetProf handleReset={handleReset} title="Reset" />}

      <BtnBack navigation={navigation} goToo="HomeScreen" title="Back" />
    </Layaut>
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
    backgroundColor: COLOR.primari,
    borderWidth: 2,
    borderColor: COLOR.textInBtns,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: COLOR.primari,
    shadowColor: COLOR.primari,
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  avatarImg: {
    width: 220,
    height: 220,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: COLOR.textInBtns,
    shadowColor: COLOR.primari,
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
    borderColor: COLOR.textInBtns,
    backgroundColor: COLOR.primari,
    color: COLOR.textInBtns,
    fontSize: 25,
  },
  saveNicknameBtnText: {
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Starnberg',
  },
  nameOrigenStyles: {
    color: COLOR.textInBtns,
    fontWeight: 'bold',
    fontSize: 60,
    fontFamily: 'Starnberg',
  },
  TextInputStyles: {
    height: 60,
    width: windowWidth * 0.9,
    margin: 12,
    padding: 10,
    borderWidth: 2,
    borderColor: COLOR.textInBtns,
    borderRadius: 15,
    backgroundColor: COLOR.primari,
    color: COLOR.textInBtns,
    fontSize: 30,
    fontFamily: 'Starnberg',
  },
  secretImgText: {
    color: COLOR.textInBtns,
    fontSize: 40,
    fontFamily: 'Starnberg',
  },
  secretImgConteiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    marginTop: 5,
  },
  secretImgPart: {
    width: 100,
    height: 60,
  },
});

export default Profile;
