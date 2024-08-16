export const items = [
  {
    color: 'rgba(255, 105, 180, 0.7)',
    img: require('../assets/rockets/2.png'),
    lvl: 1,
    complexity: 'easy',
    navPayload: 'Level1',
    lock: false,
    icon: require('../assets/icons/unlock.png'),
  },
  {
    color: complite1Lvl
      ? 'rgba(255, 105, 180, 0.7)'
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
      ? 'rgba(255, 105, 180, 0.7)'
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
      ? 'rgba(255, 105, 180, 0.7)'
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
      ? 'rgba(255, 105, 180, 0.7)'
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
      ? 'rgba(255, 105, 180, 0.7)'
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
      ? 'rgba(255, 105, 180, 0.7)'
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
      ? 'rgba(255, 105, 180, 0.7)'
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
