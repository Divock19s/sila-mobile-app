import { View, Image, Dimensions, ImageBackground, Text, Pressable, Animated, Alert } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const Dashboard = () => {

  const navigation = useNavigation();

  const [userID, setUserID] = useState(null);
  const [userWallet, setUserWallet] = useState(null);

  useEffect(() => {
    const asyncStorage = async () => {
      try {
        const response = await AsyncStorage.getItem('userInfo');
        setUserID(JSON.parse(response)._id);
      } catch (err) {
        console.error(err);
      }
    };

    asyncStorage();
  }, []);

  useEffect(() => {
    if (userID !== null) {
      const usersApi = async () => {
        try {
          const response = await fetch(`http://192.168.1.3:4000/users/${userID}`);
          const data = await response.json();
          setUserWallet(data.user.wallet);
        } catch (err) {
          console.error(err);
        }
      };
  
      usersApi();
    }
  }, [userID]);

  return (
    <View style={[{flex: 1}]}>
      <ImageBackground style={[{borderRadius: 20}, {overflow: 'hidden'}, {height: '100%'}, {height: 180}, {marginTop: 100}]} source={require('../assets/images&logos/triangles2.jpg')}>
        <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}, {padding: 30}]}>
          <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 20}]}>Account Balance:</Text>
          <Pressable onPress={() => Alert.alert('This is your wallet credit!')}>
            <Foundation name="info" size={35} color="black" />
          </Pressable>
        </View>  

        <View style={[{paddingLeft: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
          {
            userWallet !== null && (
              <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 50}]}>{userWallet}</Text>
            )
          }
          <MaterialCommunityIcons name="star-four-points" size={35} color="black" />
        </View>
      </ImageBackground>

      <View style={[{marginTop: 30}]}>
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Quick actions</Text>

        <View style={[{flexDirection: 'row'}, {gap: 30}, {marginTop: 30}]}>
          <Pressable onPress={() => navigation.navigate('TopUp')} style={[{gap: 5}, {alignItems: 'center'}]}>
            <View style={[{backgroundColor: '#fff'}, {height: 40}, {width: 40}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#000'}]}>Top up</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Profile')} style={[{gap: 5}, {alignItems: 'center'}]}>
            <View style={[{backgroundColor: '#fff'}, {height: 40}, {width: 40}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
              <AntDesign name="user" size={24} color="black" />
            </View>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#000'}]}>Profile</Text>
          </Pressable>
        </View>
      </View>

      <View style={[{marginTop: 50}, {gap: 30}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 20}]}>AD accounts:</Text>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}]}>
          <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 70}]}>40</Text>
          <Image style={[{height: 80}, {width: 80}]} source={require('../assets/images&logos/pie-chart_2936690.png')} />
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate('UsersSupport')} style={[{backgroundColor: 'purple'}, {position: 'absolute'}, {right: 20}, {bottom: 150}, {padding: 20}, {borderRadius: 100 / 2}]}>
        <Ionicons name="chatbubble-ellipses" size={30} color="#fff" />
      </Pressable>
    </View>
  )
};

export default Dashboard;