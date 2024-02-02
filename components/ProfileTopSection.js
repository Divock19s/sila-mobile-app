import { View, Image, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const ProfileTopSection = () => {

  const { width, height } = Dimensions.get('window');

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const asyncStorage = async () => {
      try {
        const response = await AsyncStorage.getItem('userInfo');
        setUserInfo(JSON.parse(response));
      } catch (err) {
        console.error(err);
      }
    };

    asyncStorage();
  }, []);

  return (
    <View style={[{borderRadius: 50}, {backgroundColor: 'purple'}, {gap: 30}, {padding: 20}, {elevation: 50}]}>
      <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
        <Ionicons name="time-sharp" size={24} color="#fff" />
        {
          userInfo !== null && (
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Joined in: {`${userInfo.date.slice(0, 4)} . ${userInfo.date.slice(5, 7)} . ${userInfo.date.slice(8, 10)}`}</Text>
          )
        }
      </View>
      
      <View style={[{justifyContent: 'center'}, {alignItems: 'center'}, {gap: 5}]}>
        {
          userInfo !== null && (
            <Image style={[{height: 70}, {width: 70}, {borderRadius: 100 / 2}]} source={{uri: userInfo.profilePhoto}} />
          )
        }

        {
          userInfo !== null && (
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>{userInfo.userName}</Text>
          )
        }
      </View>
    </View>
  )
}

export default ProfileTopSection;