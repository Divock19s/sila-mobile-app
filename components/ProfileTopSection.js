import { View, Image, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

const ProfileTopSection = () => {

  const { width, height } = Dimensions.get('window');

  const {t} = useTranslation();

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

  const copyToClipboard = async () => {
    if (userInfo !== null) {
      await Clipboard.setStringAsync(String(userInfo._id));
      Alert.alert('Copied! ✅');
    };
  };

  return (
    <View style={[{borderRadius: 50}, {backgroundColor: '#7538D4'}, {gap: 30}, {padding: 20}, {elevation: 50}]}>
      <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
        <Ionicons name="time-sharp" size={24} color="#fff" />
        {
          userInfo !== null && (
            <Text style={[{color: '#fff'}]}>{t('joined-in')} {`${userInfo.date.slice(0, 4)} . ${userInfo.date.slice(5, 7)} . ${userInfo.date.slice(8, 10)}`}</Text>
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
            <Text style={[{color: '#fff'}, {fontSize: 20}]}>{userInfo.userName}</Text>
          )
        }
      </View>

      <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {padding: 10}, {borderRadius: 50}, {backgroundColor: '#fff'}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
          <AntDesign name="idcard" size={24} color="#7538D4" />
          <Text style={[{color: '#7538D4'}]}>ID:</Text>
        </View>

        {
          userInfo !== null && (
            <Text style={[{color: '#7538D4'}]}>{userInfo._id}</Text>
          )
        }

        <TouchableOpacity onPress={copyToClipboard}>
          <Feather name="copy" size={24} color="#7538D4" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileTopSection;