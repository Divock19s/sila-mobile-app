import { View, Text, ImageBackground, Animated, Dimensions, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';

const FacebookPage = () => {

  const { width, height } = Dimensions.get('screen');

  const first = new Animated.Value(height);
  const second = new Animated.Value(height);
  const third = new Animated.Value(height);
  const fourth = new Animated.Value(height);
  const fifth = new Animated.Value(height);
  const sixth = new Animated.Value(height);

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
  }, []);

  return (
    <View style={[{flex: 1}]}>
      <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
        <FontAwesome name="facebook" size={30} color="#fff" />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Facebook marketing</Text>
      </View>

      <View style={[{marginTop: 100}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {justifyContent: 'space-between'}, {flexWrap: 'wrap'}, {rowGap: 40}]}>
        <Pressable>
          <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: first}]}]}>
            <ImageBackground source={require('../assets/images&logos/1.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
              <FontAwesome5 name="clipboard-list" size={24} color="black" />
              <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Accounts list</Text>
            </ImageBackground>
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: second}]}]}>
            <ImageBackground source={require('../assets/images&logos/6.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
              <AntDesign name="plus" size={24} color="black" />
              <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>New AD account</Text>
            </ImageBackground>
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: third}]}]}>
            <ImageBackground source={require('../assets/images&logos/3.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
              <Ionicons name="layers" size={24} color="black" />
              <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>BM share logs</Text>
            </ImageBackground>
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: fourth}]}]}>
            <ImageBackground source={require('../assets/images&logos/4.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
              <Fontisto name="arrow-swap" size={24} color="black" />
              <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>ADs deposit</Text>
            </ImageBackground>
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: fifth}]}]}>
            <ImageBackground source={require('../assets/images&logos/5.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
              <Ionicons name="receipt-outline" size={24} color="black" />
              <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>ADs deposit record</Text>
            </ImageBackground>
          </Animated.View>
        </Pressable>

        <Pressable>
          <Animated.View style={[{height: 150}, {width: 150}, {overflow: 'hidden'}, {borderRadius: 30}, {transform: [{translateY: sixth}]}]}>
            <ImageBackground source={require('../assets/images&logos/6.jpg')} style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
              <MaterialCommunityIcons name="cash-refund" size={24} color="black" />
              <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Refund</Text>
            </ImageBackground>
          </Animated.View>
        </Pressable>
      </View>

      <BottomNav />
    </View>
  )
}

export default FacebookPage;