import { View, Text, ImageBackground, Animated, Dimensions, Pressable, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const FacebookPage = () => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const first = new Animated.Value(height);
  const second = new Animated.Value(height);
  const third = new Animated.Value(height);
  const fourth = new Animated.Value(height);
  const fifth = new Animated.Value(height);
  const sixth = new Animated.Value(height);
  const seventh = new Animated.Value(height);

  useEffect(() => {
    Animated.timing(first, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(second, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true
    }).start();

    Animated.timing(third, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true
    }).start();

    Animated.timing(fourth, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true
    }).start();

    Animated.timing(fifth, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();

    Animated.timing(sixth, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true
    }).start();

    Animated.timing(seventh, {
      toValue: 0,
      duration: 1400,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <View style={[{flex: 1}]}>
      <View style={[{height: height / 12}, {backgroundColor: '#7538D4'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
        <Image style={[{height: 20}, {width: 30}, {resizeMode: 'stretch'}]} source={require('../assets/images&logos/output-onlinepngtools-meta.png')} />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Meta marketing</Text>
      </View>

      <View style={[{height: height / 1.4}, {marginTop: 100}, {paddingHorizontal: 10}]}>
        <ScrollView>
          <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {flexWrap: 'wrap'}, {rowGap: 40}]}>
            <Pressable onPress={() => navigation.navigate('AccountsList')}>
              <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: first}]}]}>
                <ImageBackground source={require('../assets/images&logos/1.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                  <FontAwesome5 name="clipboard-list" size={24} color="black" />
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Accounts list</Text>
                </ImageBackground>
              </Animated.View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('NewAdAccount')}>
              <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: second}]}]}>
                <ImageBackground source={require('../assets/images&logos/6.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                  <AntDesign name="plus" size={24} color="black" />
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>New AD account</Text>
                </ImageBackground>
              </Animated.View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('BMLogs')}>
              <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: third}]}]}>
                <ImageBackground source={require('../assets/images&logos/3.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                  <Ionicons name="layers" size={24} color="black" />
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>BM share logs</Text>
                </ImageBackground>
              </Animated.View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Refund')}>
              <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: sixth}]}]}>
                <ImageBackground source={require('../assets/images&logos/6.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                  <MaterialCommunityIcons name="cash-refund" size={24} color="black" />
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Refund</Text>
                </ImageBackground>
              </Animated.View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('RefundRecord')}>
              <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: seventh}]}]}>
                <ImageBackground source={require('../assets/images&logos/4.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                  <MaterialCommunityIcons name="cash-refund" size={24} color="black" />
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Refund record</Text>
                </ImageBackground>
              </Animated.View>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <BottomNav />
    </View>
  )
}

export default FacebookPage;