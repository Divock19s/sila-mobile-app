import { View, Dimensions, Animated, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      <Tab.Navigator sceneContainerStyle={{ backgroundColor: "white" }} 
        screenOptions={{headerShown: false, 
          tabBarStyle: {
            height: height / 9,
            borderRadius: 10,
            marginHorizontal: 20
          },
          tabBarShowLabel: false}}>
        <Tab.Screen name='Home' component={HomePage}
          options={{tabBarIcon: ({ focused }) => (
            focused ? (
              <Ionicons name="home" size={24} color="#7538D4" />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
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
              <Ionicons name="share" size={24} color="#7538D4" />
            ) : (
              <Ionicons name="share-outline" size={24} color="black" />
            )
          )}}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: (width - 40) / 4,
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
              <FontAwesome name="user-o" size={24} color="black" />
            )
          )}}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: ((width - 40) / 4) * 2,
                duration: 300,
                useNativeDriver: true
              }).start();
            }
          })} />
        <Tab.Screen name='Services' component={ServicesPage}
          options={{tabBarIcon: ({ focused }) => (
            focused ? (
              <MaterialCommunityIcons name="storefront" size={24} color="#7538D4" />
            ) : (
              <MaterialCommunityIcons name="storefront-outline" size={24} color="black" />
            )
          )}}
          listeners={() => ({
            tabPress: e => {
              Animated.spring(indicator, {
                toValue: ((width - 40) / 4) * 3,
                duration: 300,
                useNativeDriver: true
              }).start();
            }
          })}/>
      </Tab.Navigator>

      {/* Indicator */}
      <Animated.View style={[{height: 7}, {width: (width - 240) / 4}, {backgroundColor: '#7538D4'}, {position: 'absolute'}, {bottom: height / 11}, {left: 44}, {borderRadius: 30}, {zIndex: 1}, {transform: [{translateX: indicator}]}]} />
    </>
  )
};

export default BottomNav;