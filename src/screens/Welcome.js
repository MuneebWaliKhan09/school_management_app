import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {THEME_COLOR} from '../strings/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigate = useNavigation()
  const [currentIndex, setcurrentIndex] = useState(0);
  const Scrollref = useRef();

  const handlePREV = () => {
    if (currentIndex > 0) {
      Scrollref.current.scrollToIndex({
        animated: true,
        index: currentIndex - 1,
      });
    }
  };
  const handleNEXT = () => {
    if (currentIndex < data.length - 1) {
      Scrollref.current.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    }
  };

  const continueToNext = ()=>{

  }

  const data = [
    {
      title: 'Browse Professional Content',
      description: 'Browse content from all over the world',
      img: require('../images/slides/data.png'),
    },
    {
      title: 'Connect with Professionals Peoples',
      description: 'Connect with professionals in your area',
      img: require('../images/slides/performance.png'),
    },
    {
      title: 'Get Started And Work Together',
      description: 'Get started with your professional journey',
      img: require('../images/slides/professor.png'),
    },
    {
      title: 'Chat All Over The Wolrd',
      description: 'Chat with all over the world connect',
      img: require('../images/slides/students.png'),
    },
    {
      title: 'Send Voice Chats and More',
      description: 'Send voice messages and chatting with freinds',
      img: require('../images/slides/teach.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      {/* top view */}
      <View>
        <FlatList
          ref={Scrollref}
          onScroll={e => {
            const x = (
              e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            ).toFixed(0);
            setcurrentIndex(parseInt(x));
          }}
          data={data}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.INTRO_ITEMS}>
                <Image source={item.img} style={styles.INTRO_IMAGES} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* indicators veiw */}
      <View style={styles.ScrollViewIndicators}>
        {data.map((items, index) => {
          return (
            <View
              key={index}
              style={[
                styles.indicators,
                {backgroundColor: currentIndex == index ? THEME_COLOR : 'gray',width: currentIndex == index ? 19 : 9},
              ]}></View>
          );
        })}
      </View>
      {/* buttons veiw */}
      <View style={styles.bottomView}>
        <View style={styles.BTN_VEIW}>
          {currentIndex > 0 && (
            <TouchableOpacity onPress={handlePREV} style={styles.PREV_BTN}>
              <Text style={{color: THEME_COLOR, fontSize: 18}}>Previous</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.BTN_VEIW}>
          {currentIndex < data.length - 1 && (
            <TouchableOpacity onPress={handleNEXT} style={styles.NEXT_BTN}>
              <Text style={{color: 'white', fontSize: 18}}>Next</Text>
            </TouchableOpacity>
          )}
          {currentIndex == data.length - 1 && (
            <TouchableOpacity
              onPress={() => {
                navigate.navigate('Login'), continueToNext();
              }}
              style={styles.NEXT_BTN}>
              <Text style={{color: 'white', fontSize: 18}}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  INTRO_ITEMS: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  INTRO_IMAGES: {
    width: responsiveScreenWidth(75),
    height: responsiveHeight(39),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveScreenWidth(80),
  },
  desc: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    color: 'gray',
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
    marginTop: 10,
  },
  ScrollViewIndicators: {
    flex: 1 / 2,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicators: {
    width: 9,
    height: 9,
    borderRadius: 5,
    margin: 5,
  },
  bottomView: {
    width: '100%',
    height: '15%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  PREV_BTN: {
    width: '70%',
    height: '40%',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NEXT_BTN: {
    width: '70%',
    height: '40%',
    backgroundColor: THEME_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  BTN_VEIW: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
