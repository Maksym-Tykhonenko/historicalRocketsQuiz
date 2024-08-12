import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import SButton from '../components/SButton'; // Ваш компонент кнопки
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
  {
    color: '#fbd834',
    img: require('../assets/rockets/1.png'),
    lvl: 1,
    complexity: 'easy',
  },
  {
    color: '#e59002',
    img: require('../assets/rockets/2.png'),
    lvl: 2,
    complexity: 'easy',
  },
  {
    color: '#8f1d1a',
    img: require('../assets/rockets/3.png'),
    lvl: 3,
    complexity: 'easy',
  },
  {
    color: '#8f1d1a',
    img: require('../assets/rockets/4.png'),
    lvl: 4,
    complexity: 'easy',
  },
  {
    color: '#389cff',
    img: require('../assets/rockets/5.png'),
    lvl: 5,
    complexity: 'hard',
  },
  {
    color: 'pink',
    img: require('../assets/rockets/6.png'),
    lvl: 6,
    complexity: 'hard',
  },
  {
    color: '#6612dc',
    img: require('../assets/rockets/7.png'),
    lvl: 7,
    complexity: 'hard',
  },
  {
    color: '#6612dc',
    img: require('../assets/rockets/8.png'),
    lvl: 8,
    complexity: 'hard',
  },
];

const PAGE_WIDTH = windowWidth;
const PAGE_HEIGHT = windowHeight;
const CARD_WIDTH = PAGE_WIDTH * 0.8; // Ширина картки
const CARD_HEIGHT = PAGE_HEIGHT * 0.5; // Висота картки
const GAP = 50; // Відстань між картками

const GameScreen = ({navigation}) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  return (
    <View style={styles.container}>
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
          />
        )}
      />

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 15,
        }}>
        <SButton onPress={() => setIsAutoPlay(!isAutoPlay)}>
          {isAutoPlay ? (
            <Text style={{textAlign: 'center'}}>Auto Play lvl`s: YES</Text>
          ) : (
            <Text style={{textAlign: 'center'}}>Auto Play lvl`s: NO</Text>
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
  );
};

const Card = ({color, img, animationValue, lvl, complexity}) => {
  const cardStyle = {
    backgroundColor: color,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
      <TouchableOpacity>
        <Image source={img} style={imageStyle} resizeMode={'contain'} />
        <View style={styles.overlay}>
          <Text style={styles.level}>Level: {lvl}</Text>
          <Text style={styles.complexity}>Complexity: {complexity}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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
    fontSize: 16,
  },
  complexity: {
    color: '#fff',
    fontSize: 14,
  },
  backButton: {
    width: windowWidth * 0.4,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default GameScreen;
