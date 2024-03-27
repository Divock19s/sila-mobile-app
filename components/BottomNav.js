import { View, Dimensions, Animated, Alert, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

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

  const {t} = useTranslation();

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
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <Ionicons name="home" size={24} color="#7538D4" />
                <Text style={[{color: '#7538D4'}]}>{t('home')}</Text>
              </View>
            ) : (
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <Ionicons name="home-outline" size={24} color="black" />
                <Text>{t('home')}</Text>
              </View>
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
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <Ionicons name="share" size={24} color="#7538D4" />
                <Text style={[{color: '#7538D4'}]}>{t('ads')}</Text>
              </View>
            ) : (
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <Ionicons name="share-outline" size={24} color="black" />
                <Text>{t('ads')}</Text>
              </View>
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
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <FontAwesome name="user" size={24} color="#7538D4" />
                <Text style={[{color: '#7538D4'}]}>{t('profile')}</Text>
              </View>
            ) : (
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <FontAwesome name="user-o" size={24} color="black" />
                <Text>{t('profile')}</Text>
              </View>
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
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <MaterialCommunityIcons name="storefront" size={24} color="#7538D4" />
                <Text style={[{color: '#7538D4'}]}>{t('services')}</Text>
              </View>
            ) : (
              <View style={[{alignItems: 'center'}, {gap: 5}]}>
                <MaterialCommunityIcons name="storefront-outline" size={24} color="black" />
                <Text>{t('services')}</Text>
              </View>
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