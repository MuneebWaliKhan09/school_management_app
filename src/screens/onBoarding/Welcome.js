import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {THEME_COLOR} from '../../strings/Colors';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const nav = useNavigation();



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
      <View>
        <Image
          style={styles.logginBanner}
          source={require('../../images/signup.png')}
        />
      </View>
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.paraghraph}>
          Welcome to school management system app of school{' '}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => nav.navigate('Login')}
          style={styles.btnLogin}>
          {/* login button */}
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => nav.navigate('SignUp')}
          style={styles.btnSignUp}>
          {/* login button */}
          <Text style={styles.btntextSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* singup using */}
      <View style={styles.signUpUsing}>
        <Text style={styles.singUpusingTitle}>Sign up using</Text>
        <View style={styles.servicesContainer}>
          <TouchableOpacity>
            <Image
              style={styles.serviceImg}
              source={require('../../images/icons/fb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.serviceImg}
              source={require('../../images/icons/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.serviceImg}
              source={require('../../images/icons/linkedin.png')}
            />
          </TouchableOpacity>
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
  logginBanner: {
    width: responsiveScreenWidth(92),
    height: responsiveScreenHeight(35),
    alignSelf: 'center',
  },
  title: {
    fontSize: responsiveFontSize(5),
    fontWeight: '900',
    textAlign: 'center',
    width: responsiveScreenWidth(100),
    color: THEME_COLOR,
    marginTop: 20,
    fontFamily: 'Poppins-BoldItalic',
  },
  paraghraph: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    alignSelf: 'center',
    width: responsiveScreenWidth(79),
    marginTop: 5,
    color: 'black',
    opacity: 0.4,
    fontWeight: '500',
  },
  btnContainer: {
    flexDirection: 'column',
    marginTop: 45,
  },
  btnLogin: {
    width: '80%',
    height: 45,
    borderWidth: 2,
    borderColor: THEME_COLOR,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: THEME_COLOR,
  },
  btnSignUp: {
    width: '80%',
    height: 45,
    borderWidth: 2,
    borderColor: THEME_COLOR,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 23,
    backgroundColor: 'transparent',
  },
  btntext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  btntextSignUp: {
    fontSize: 17,
    fontWeight: 'bold',
    color: THEME_COLOR,
  },
  signUpUsing: {
    flexDirection: 'column',
    marginTop: 27,
  },
  singUpusingTitle: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
  },
  servicesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  serviceImg: {
    width: responsiveScreenWidth(10),
    height: responsiveHeight(5),
    borderRadius: 40,
    margin: 10,
  },
});

// const Welcome = () => {
//   const navigate = useNavigation()
//   const [currentIndex, setcurrentIndex] = useState(0);
//   const Scrollref = useRef();

//   const handlePREV = () => {
//     if (currentIndex > 0) {
//       Scrollref.current.scrollToIndex({
//         animated: true,
//         index: currentIndex - 1,
//       });
//     }
//   };
//   const handleNEXT = () => {
//     if (currentIndex < data.length - 1) {
//       Scrollref.current.scrollToIndex({
//         animated: true,
//         index: currentIndex + 1,
//       });
//     }
//   };

//   const continueToNext = ()=>{

//   }

//   const data = [
//     {
//       title: 'Browse Professional Content',
//       description: 'Browse content from all over the world',
//       img: require('../images/slides/data.png'),
//     },
//     {
//       title: 'Connect with Professionals Peoples',
//       description: 'Connect with professionals in your area',
//       img: require('../images/slides/performance.png'),
//     },
//     {
//       title: 'Get Started And Work Together',
//       description: 'Get started with your professional journey',
//       img: require('../images/slides/professor.png'),
//     },
//     {
//       title: 'Chat All Over The Wolrd',
//       description: 'Chat with all over the world connect',
//       img: require('../images/slides/students.png'),
//     },
//     {
//       title: 'Send Voice Chats and More',
//       description: 'Send voice messages and chatting with freinds',
//       img: require('../images/slides/teach.png'),
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle={'light-content'} backgroundColor={THEME_COLOR} />
//       {/* top view */}
//       <View>
//         <FlatList
//           ref={Scrollref}
//           onScroll={e => {
//             const x = (
//               e.nativeEvent.contentOffset.x / Dimensions.get('window').width
//             ).toFixed(0);
//             setcurrentIndex(parseInt(x));
//           }}
//           data={data}
//           pagingEnabled
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           renderItem={({item}) => {
//             return (
//               <View style={styles.INTRO_ITEMS}>
//                 <Image source={item.img} style={styles.INTRO_IMAGES} />
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.desc}>{item.description}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//       {/* indicators veiw */}
//       <View style={styles.ScrollViewIndicators}>
//         {data.map((items, index) => {
//           return (
//             <View
//               key={index}
//               style={[
//                 styles.indicators,
//                 {backgroundColor: currentIndex == index ? THEME_COLOR : 'gray',width: currentIndex == index ? 19 : 9},
//               ]}></View>
//           );
//         })}
//       </View>
//       {/* buttons veiw */}
//       <View style={styles.bottomView}>
//         <View style={styles.BTN_VEIW}>
//           {currentIndex > 0 && (
//             <TouchableOpacity onPress={handlePREV} style={styles.PREV_BTN}>
//               <Text style={{color: THEME_COLOR, fontSize: 18}}>Previous</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         <View style={styles.BTN_VEIW}>
//           {currentIndex < data.length - 1 && (
//             <TouchableOpacity onPress={handleNEXT} style={styles.NEXT_BTN}>
//               <Text style={{color: 'white', fontSize: 18}}>Next</Text>
//             </TouchableOpacity>
//           )}
//           {currentIndex == data.length - 1 && (
//             <TouchableOpacity
//               onPress={() => {
//                 navigate.navigate('Login'), continueToNext();
//               }}
//               style={styles.NEXT_BTN}>
//               <Text style={{color: 'white', fontSize: 18}}>Continue</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Welcome;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   INTRO_ITEMS: {
//     width: Dimensions.get('window').width,
//     height: '100%',
//   },
//   INTRO_IMAGES: {
//     width: responsiveScreenWidth(75),
//     height: responsiveHeight(39),
//     alignSelf: 'center',
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: responsiveFontSize(3.5),
//     fontWeight: '600',
//     color: 'black',
//     alignSelf: 'center',
//     textAlign: 'center',
//     width: responsiveScreenWidth(80),
//   },
//   desc: {
//     fontSize: 18,
//     fontWeight: '400',
//     lineHeight: 26,
//     color: 'gray',
//     textAlign: 'center',
//     width: '70%',
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   ScrollViewIndicators: {
//     flex: 1 / 2,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   indicators: {
//     width: 9,
//     height: 9,
//     borderRadius: 5,
//     margin: 5,
//   },
//   bottomView: {
//     width: '100%',
//     height: '15%',
//     position: 'absolute',
//     bottom: 0,
//     justifyContent: 'space-evenly',
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   PREV_BTN: {
//     width: '70%',
//     height: '40%',
//     borderWidth: 1,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   NEXT_BTN: {
//     width: '70%',
//     height: '40%',
//     backgroundColor: THEME_COLOR,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   BTN_VEIW: {
//     width: '40%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
