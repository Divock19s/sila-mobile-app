import { View, Dimensions, Animated, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useRef } from 'react';

//Screens
import HomePage from '../pages/HomePage';
import AdsPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import ServicesPage from '../pages/ServicesPage';
//

const Tab = createBottomTabNavigator();

const BottomNav = () => {

  const { width, height } = Dimensions.get('window');

  const indicator = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false, 
        tabBarStyle: {
          height: height / 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        },
        tabBarShowLabel: false}}>
        <Tab.Screen name='Home' component={HomePage}
          options={{tabBarIcon: ({ focused }) => (
            focused ? (
              <Ionicons name="home" size={24} color="#7538D4" />
            ) : (
              <Ionicons name="home" size={24} color="black" />
            )
          ),
          }}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
              }).start();
            }
          })} />
        <Tab.Screen name='Ads' component={AdsPage}
          options={{tabBarIcon: ({ focused }) => (
            focused ? (
              <Entypo name="megaphone" size={24} color="#7538D4" />
            ) : (
              <Entypo name="megaphone" size={24} color="black" />
            )
          )}}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: width / 4,
                duration: 300,
                useNativeDriver: true
              }).start();
            }
          })} />
        <Tab.Screen name='Profile' component={ProfilePage}
          options={{tabBarIcon: ({ focused }) => (
            focused ? (
              <FontAwesome name="user" size={24} color="#7538D4" />
            ) : (
              <FontAwesome name="user" size={24} color="black" />
            )
          )}}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: width / 2,
                duration: 300,
                useNativeDriver: true
              }).start();
            }
          })} />
        <Tab.Screen name='Services' component={ServicesPage}
          options={{tabBarIcon: ({ focused }) => (
            focused ? (
              <Entypo name="dots-three-horizontal" size={24} color="#7538D4" />
            ) : (
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            )
          )}}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: width / 1.33,
                duration: 300,
                useNativeDriver: true
              }).start();
            }
          })}/>
      </Tab.Navigator>

      {/* Indicator */}
      <Animated.View style={[{height: 7}, {width: 55}, {backgroundColor: '#7538D4'}, {position: 'absolute'}, {bottom: 10}, {left: 25}, {borderRadius: 30}, {zIndex: 1}, {transform: [{translateX: indicator}]}]} />
    </>
  )
};

export default BottomNav;