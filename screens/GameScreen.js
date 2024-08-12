import React, {useState} from 'react';
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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PAGE_WIDTH = windowWidth;
const PAGE_HEIGHT = windowHeight;
const CARD_WIDTH = PAGE_WIDTH * 0.8; // Ширина картки
const CARD_HEIGHT = PAGE_HEIGHT * 0.5; // Висота картки
const GAP = 50; // Відстань між картками

const GameScreen = ({navigation}) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [complite1Lvl, setComplite1Lvl] = useState(false);
  const [complite2Lvl, setComplite2Lvl] = useState(false);
  const [complite3Lvl, setComplite3Lvl] = useState(false);
  const [complite4Lvl, setComplite4Lvl] = useState(false);
  const [complite5Lvl, setComplite5Lvl] = useState(false);
  const [complite6Lvl, setComplite6Lvl] = useState(false);
  const [complite7Lvl, setComplite7Lvl] = useState(false);
  const [complite8Lvl, setComplite8Lvl] = useState(false);

  const items = [
    {
      color: 'rgba(255, 105, 180, 0.7)',
      img: require('../assets/rockets/1.png'),
      lvl: 1,
      complexity: 'easy',
      navPayload: 'Level1',
    },
    {
      color: complite1Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/2.png'),
      lvl: 2,
      complexity: 'easy',
      navPayload: 'Level2',
    },
    {
      color: complite2Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/3.png'),
      lvl: 3,
      complexity: 'easy',
      navPayload: 'Level3',
    },
    {
      color: complite3Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/4.png'),
      lvl: 4,
      complexity: 'easy',
      navPayload: 'Level4',
    },
    {
      color: complite4Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/5.png'),
      lvl: 5,
      complexity: 'hard',
      navPayload: 'Level5',
    },
    {
      color: complite5Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/6.png'),
      lvl: 6,
      complexity: 'hard',
      navPayload: 'Level6',
    },
    {
      color: complite6Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/7.png'),
      lvl: 7,
      complexity: 'hard',
      navPayload: 'Level7',
    },
    {
      color: complite7Lvl
        ? 'rgba(255, 105, 180, 0.7)'
        : 'rgba(128, 128, 128, 0.7)',
      img: require('../assets/rockets/8.png'),
      lvl: 8,
      complexity: 'hard',
      navPayload: 'Level8',
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bcgr.jpeg')}
        style={{flex: 1}}>
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
            autoPlayInterval={2000}
            data={items}
            renderItem={({item, index, animationValue}) => (
              <Card
                key={index}
                color={item.color}
                img={item.img}
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
                <Text style={styles.buttonText}>Auto Play lvl`s: YES</Text>
              ) : (
                <Text style={styles.buttonText}>Auto Play lvl`s: NO</Text>
              )}
            </SButton>

            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.backButton}>
              <Text style={styles.backButtonText}>{'<-'}Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const Card = ({
  navigation,
  color,
  img,
  animationValue,
  lvl,
  complexity,
  navPayload,
}) => {
  const cardStyle = {
    backgroundColor: color,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fcfcfe',
    borderRadius: 20,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    shadowColor: '#000',
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
    const scale = interpolate(animationValue.value, [-0.1, 0, 1], [0.95, 1, 1]);
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
      </TouchableOpacity>
    </Animated.View>
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
    color: '#fcfcfe',
    fontWeight: 'bold',
  },
  backButton: {
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

export default GameScreen;
