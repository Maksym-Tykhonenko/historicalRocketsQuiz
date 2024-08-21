import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import SButton from '../components/SButton'; // Ваш компонент кнопки
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BtbBack from '../components/BtnBack';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Layaut from '../components/Layaut';

const PAGE_WIDTH = windowWidth;
const PAGE_HEIGHT = windowHeight;
const CARD_WIDTH = PAGE_WIDTH * 0.8; // Ширина картки
const CARD_HEIGHT = PAGE_HEIGHT * 0.5; // Висота картки
const GAP = 50; // Відстань між картками

const GameScreen = ({navigation}) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [complite1Lvl, setComplite1Lvl] = useState(true);
  const [complite2Lvl, setComplite2Lvl] = useState(true);
  const [complite3Lvl, setComplite3Lvl] = useState(true);
  const [complite4Lvl, setComplite4Lvl] = useState(true);
  const [complite5Lvl, setComplite5Lvl] = useState(true);
  const [complite6Lvl, setComplite6Lvl] = useState(true);
  const [complite7Lvl, setComplite7Lvl] = useState(true);
  const [complite8Lvl, setComplite8Lvl] = useState(true);
  console.log('complite1Lvl==>', complite1Lvl);

  //useEffect(() => {
  //  getData1Lvl();
  //  getData2Lvl();
  //  getData3Lvl();
  //  getData4Lvl();
  //  getData5Lvl();
  //  getData6Lvl();
  //  getData7Lvl();
  //}, []);

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

  const items = [
    {
      color: 'rgba(255, 105, 180, 0.8)',
      img: require('../assets/rockets/2.png'),
      lvl: 1,
      complexity: 'easy',
      navPayload: 'Level1',
      lock: false,
      icon: require('../assets/icons/unlock.png'),
    },
    {
      color: complite1Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/1.png'),
      lvl: 2,
      complexity: 'easy',
      navPayload: 'Level2',
      lock: complite1Lvl ? false : true,
      icon: complite1Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
    {
      color: complite2Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/6.png'),
      lvl: 3,
      complexity: 'easy',
      navPayload: 'Level3',
      lock: complite2Lvl ? false : true,
      icon: complite2Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
    {
      color: complite3Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/4.png'),
      lvl: 4,
      complexity: 'easy',
      navPayload: 'Level4',
      lock: complite3Lvl ? false : true,
      icon: complite3Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
    {
      color: complite4Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/5.png'),
      lvl: 5,
      complexity: 'hard',
      navPayload: 'Level5',
      lock: complite4Lvl ? false : true,
      icon: complite4Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
    {
      color: complite5Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/1.png'),
      lvl: 6,
      complexity: 'hard',
      navPayload: 'Level6',
      lock: complite5Lvl ? false : true,
      icon: complite5Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
    {
      color: complite6Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/7.png'),
      lvl: 7,
      complexity: 'hard',
      navPayload: 'Level7',
      lock: complite6Lvl ? false : true,
      icon: complite6Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
    {
      color: complite7Lvl
        ? 'rgba(255, 105, 180, 0.8)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/8.png'),
      lvl: 8,
      complexity: 'hard',
      navPayload: 'Level8',
      lock: complite7Lvl ? false : true,
      icon: complite7Lvl
        ? require('../assets/icons/unlock.png')
        : require('../assets/icons/lock.png'),
    },
  ];

  const Card = ({
    navigation,
    color,
    img,
    animationValue,
    lvl,
    complexity,
    navPayload,
    lock,
    icon,
  }) => {
    const cardStyle = {
      backgroundColor: color,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#fff',
      borderRadius: 20,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      shadowColor: '#fff',
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    };

    const imageStyle = {
      width: CARD_WIDTH * 0.8,
      height: CARD_HEIGHT * 0.8, // Пропорційна висота зображення
      borderRadius: 16,
      marginBottom: 10,
    };

    const animatedStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        animationValue.value,
        [-0.1, 0, 1],
        [0.95, 1, 1],
      );
      const translateX = interpolate(
        animationValue.value,
        [-1, -0.2, 0, 1],
        [0, CARD_WIDTH * 0.3, 0, 0],
      );
      const rotateY = `${interpolate(
        animationValue.value,
        [-1, 0, 0.4, 1],
        [30, 0, -25, -25],
      )}deg`;

      return {
        transform: [{scale}, {translateX}, {perspective: 200}, {rotateY}],
      };
    }, [animationValue]);

    return (
      <Animated.View style={[styles.cardContainer, cardStyle, animatedStyle]}>
        <TouchableOpacity
          disabled={lock}
          onPress={() => {
            navigation.navigate(navPayload); // Використовуйте navPayload для навігації
          }}>
          <Image source={img} style={imageStyle} resizeMode={'contain'} />
          <View style={styles.overlay}>
            <Text style={styles.complexity}>{complexity.toUpperCase()}</Text>
            <Text style={styles.level}>
              Level: <Text style={{fontWeight: 'bold'}}>{lvl}</Text>
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Image style={{width: 50, height: 50}} source={icon} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <Layaut>
      <View style={{flex: 1, paddingTop: 80}}>
        <Carousel
          vertical={false}
          width={PAGE_WIDTH}
          height={PAGE_HEIGHT}
          loop
          autoPlay={isAutoPlay}
          itemWidth={CARD_WIDTH + GAP} // Додайте відстань до ширини картки
          withAnimation={{
            type: 'spring',
            config: {
              damping: 13,
            },
          }}
          autoPlayInterval={3000}
          data={items}
          renderItem={({item, index, animationValue}) => (
            <Card
              lock={item.lock}
              key={index}
              color={item.color}
              img={item.img}
              icon={item.icon}
              animationValue={animationValue}
              lvl={item.lvl}
              complexity={item.complexity}
              navPayload={item.navPayload} // Передайте navPayload
              navigation={navigation} // Передайте navigation
            />
          )}
        />

        <View style={styles.buttonContainer}>
          <SButton onPress={() => setIsAutoPlay(!isAutoPlay)}>
            {isAutoPlay ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.buttonText}>Auto Play</Text>
                <Image
                  source={require('../assets/icons/check.png')}
                  style={styles.okImg}
                />
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.buttonText}>Auto Play</Text>
                <Image
                  source={require('../assets/icons/1828527.png')}
                  style={styles.noImg}
                />
              </View>
            )}
          </SButton>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.backButton}>
            <Ionicons
              name="chevron-back"
              style={{fontSize: 20, color: '#fff'}}
            />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layaut>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  overlay: {
    width: CARD_WIDTH * 0.8,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  level: {
    color: '#fff',
    fontSize: 18,
  },
  complexity: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  backButton: {
    width: windowWidth * 0.4,
    height: 60,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 105, 180, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 105, 180, 0.8)',
    shadowOffset: {width: 30, height: 28},
    shadowOpacity: 0.54,
    shadowRadius: 10.32,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  okImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  noImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default GameScreen;
