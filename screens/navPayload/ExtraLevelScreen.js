import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BtbBack from '../../components/BtnBack';
import ModalToGo from '../../components/Modal';
import {COLOR} from '../../constant/colors';
import Layaut from '../../components/Layaut';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExtraLevelScreen = ({navigation, route}) => {
  const [board, setBoard] = useState([
    {id: 1, image: require('../../assets/extra/image_part_001.jpg')},
    {id: 2, image: require('../../assets/extra/image_part_002.jpg')},
    {id: 3, image: require('../../assets/extra/image_part_003.jpg')},
    {id: 4, image: require('../../assets/extra/image_part_004.jpg')},
    {id: 5, image: require('../../assets/extra/image_part_005.jpg')},
    {id: 6, image: require('../../assets/extra/image_part_006.jpg')},
    {id: 7, image: require('../../assets/extra/image_part_007.jpg')},
    {id: 8, image: require('../../assets/extra/image_part_008.jpg')},
    {id: 9, image: require('../../assets/extra/image_part_009.jpg')},
    {id: 10, image: require('../../assets/extra/image_part_010.jpg')},
    {id: 11, image: require('../../assets/extra/image_part_011.jpg')},
    {id: 12, image: require('../../assets/extra/image_part_012.jpg')},
    {id: 13, image: require('../../assets/extra/image_part_013.jpg')},
    {id: 14, image: require('../../assets/extra/image_part_014.jpg')},
    {id: 15, image: require('../../assets/extra/image_part_015.jpg')},
    {
      id: 16,
      image: require('../../assets/whait.jpeg'),
    },
  ]);

  const [timeLeftModal, setTimeLeftModal] = useState(false);
  const [boardSolvedModal, setBoardSolvedModal] = useState(false);
  //AsyncStorage logick
  const [complitedExtraLvl, setcomplitedExtraLvl] = useState(false);
  console.log('complitedExtraLvl===>', complitedExtraLvl);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [complitedExtraLvl]);

  const setData = async () => {
    try {
      const data = {
        complitedExtraLvl,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('ExtraLevelScreen', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('ExtraLevelScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setcomplitedExtraLvl(parsedData.complitedExtraLvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };
  //////////////////////////////////

  const [emptyIndex, setEmptyIndex] = useState(0);
  console.log(emptyIndex);

  const [firtRender, setFirtRender] = useState(true);
  const [complited, setComplited] = useState(false);

  //перемешивает пазлы при первом рендере
  useEffect(() => {
    mixingPuzzles();
  }, []);
  //

  //если собрал пазл то сообщ о победе(пропуская первый рендер)
  useEffect(() => {
    if (firtRender) {
      setFirtRender(false);
    } else if (isBoardSolved()) {
      //Alert.alert('Ты победил!');
      setComplited(true);
      setcomplitedExtraLvl(true);
      setBoardSolvedModal(true);
    }
  }, []);
  /////////////////////////////

  const canMovePiece = pieceIndex => {
    const rowSize = Math.sqrt(board.length); ///
    const emptyRow = Math.floor(emptyIndex / rowSize);
    const emptyCol = emptyIndex % rowSize;
    const pieceRow = Math.floor(pieceIndex / rowSize);
    const pieceCol = pieceIndex % rowSize;

    return (
      (emptyRow === pieceRow && Math.abs(emptyCol - pieceCol) === 1) ||
      (emptyCol === pieceCol && Math.abs(emptyRow - pieceRow) === 1)
    );
  };

  const movePiece = pieceIndex => {
    if (canMovePiece(pieceIndex)) {
      const updatedBoard = [...board];
      [updatedBoard[pieceIndex], updatedBoard[emptyIndex]] = [
        updatedBoard[emptyIndex],
        updatedBoard[pieceIndex],
      ];
      setBoard(updatedBoard);
      setEmptyIndex(pieceIndex);
    }
  };

  //перемешивает пазл
  const mixingPuzzles = () => {
    const shuffledBoard = [...board];
    shuffledBoard.sort(() => Math.random() - 0.5);
    setBoard(shuffledBoard);
    //board.findIndex((piece) => piece.id === 16)
    const emptyIndex = shuffledBoard.findIndex(piece => piece.id === 16);
    setEmptyIndex(emptyIndex);
  };

  //проверяет собран ли борд
  const isBoardSolved = () => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i].id !== i + 1) {
        return false;
      }
    }
    return true;
  };
  ///Timer
  const [timer, setTimer] = useState(600);
  const [isRuning, setIsRuning] = useState(false);
  const [btnIsVisible, setBtnIsVisible] = useState(false);

  //эфект обратного отщета времени
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRuning) {
        setTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    if (timer === 0) {
      clearInterval(timerInterval);
      setTimeLeftModal(true);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, isRuning]);

  //формат времени
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  //oстановка таймера
  const handleChangeTimerRunState = () => {
    setIsRuning(!isRuning);
  };
  //////////////////////////////////////////

  return (
    <Layaut>
      <View style={styles.contentConteiner}>
        <ScrollView>
          <View style={styles.subContentConteiner}>
            {/** LOGO */}
            <View style={styles.logoConteiner}>
              <Image
                source={require('../../assets/icons/extra.png')}
                style={styles.logoImg}
              />
            </View>

            {/**Timer */}
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              {isRuning ? (
                <TouchableOpacity
                  style={styles.timerBtn}
                  onPress={handleChangeTimerRunState}>
                  <Text style={styles.timerBtnText}>Stop</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.timerBtn}
                  onPress={handleChangeTimerRunState}>
                  <Text style={styles.timerBtnText}>Play</Text>
                </TouchableOpacity>
              )}

              <Text style={styles.timerTimeTex}>{formatTime(timer)}</Text>
            </View>

            <View style={styles.puzleConteiner}>
              {board.map((piece, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.onePuzleBtn}
                  onPress={() => movePiece(index)}
                  disabled={!canMovePiece(index) || !isRuning}>
                  <Image source={piece.image} style={styles.onePuzleImg} />
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.imgThetIsGoingConteiner}>
              <Image
                style={styles.imgThetIsGoing}
                source={require('../../assets/newRockets/99.png')}
              />
            </View>

            <View style={styles.heightBlock}></View>
          </View>
        </ScrollView>

        {/**BTN back */}
        <BtbBack navigation={navigation} goToo="HomeScreen" title="Back" />
      </View>

      {/**timeLeftModal */}
      <ModalToGo
        incorrectPassedLevel={timeLeftModal}
        goToo="GameScreen"
        navigation={navigation}
        subTitle="Try again!!!"
        title="Response time has expired..."
        btnText="Ok"
        resetLevelState={() => {
          //setCorrectPassedLevel(false);
          setBoardSolvedModal(false);
          setTimeLeftModal(false);
        }}
      />

      {/**boardSolvedModal */}
      <ModalToGo
        incorrectPassedLevel={boardSolvedModal}
        goToo="CongratScreen"
        navigation={navigation}
        subTitle="Congrat!!!"
        title="You passed the extra level !!!"
        btnText="Next"
        resetLevelState={() => {
          //setCorrectPassedLevel(false);
          setBoardSolvedModal(false);
          setTimeLeftModal(false);
        }}
      />
    </Layaut>
  );
};

const styles = StyleSheet.create({
  contentConteiner: {
    flex: 1,
    position: 'relative',
    marginTop: 50,
    alignItems: 'center',
  },
  subContentConteiner: {
    alignItems: 'center',
  },
  logoConteiner: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  timerBtn: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: COLOR.textInBtns,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: COLOR.primaryTransparent,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerBtnText: {
    color: COLOR.textInBtns,
    fontSize: 35,
    fontFamily: 'Starnberg',
  },
  timerTimeTex: {
    fontSize: 40,
    borderWidth: 2,
    borderColor: COLOR.textInBtns,
    color: COLOR.textInBtns,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: COLOR.primaryTransparent,
    height: 60,
    fontFamily: 'Starnberg',
  },
  puzleConteiner: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderColor: COLOR.primari,
  },
  onePuzleBtn: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  onePuzleImg: {
    width: 70,
    height: 70,
  },
  imgThetIsGoingConteiner: {
    flexDirection: 'row',
  },
  imgThetIsGoing: {
    marginLeft: 0,
    //marginTop: 20,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: COLOR.textInBtns,
    justifyContent: 'flex-start',
  },
  heightBlock: {
    height: 100,
  },
});

export default ExtraLevelScreen;
