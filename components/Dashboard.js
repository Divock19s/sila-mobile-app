import { View, Image, Dimensions, ImageBackground, Text, Pressable, Animated, Alert, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularProgress from 'react-native-circular-progress-indicator';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Dashboard = () => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const [userID, setUserID] = useState(null);
  const [userWallet, setUserWallet] = useState(null);
  const [userEurWallet, setUserEurWallet] = useState(null);

  const [adAccountsNumber, setAdAccountsNumber] = useState(0);

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
          const response = await fetch(`https://sila-b.onrender.com/users/${userID}`);
          const data = await response.json();
          setUserWallet(data.user.wallet);
          setUserEurWallet(data.user.eurWallet);
        } catch (err) {
          console.error(err);
        }
      };
  
      usersApi();
    }
  }, [userID]);

  useEffect(() => {
    const adsApi = async () => {
      try {
        const response = await fetch('https://sila-b.onrender.com/ad');
        const data = await response.json();

        let sum = 0;

        data.ADs.map((x) => {
          if (userID !== null) {
            if (x.userID === userID) {
              sum += x.ads.length;
            }
          }
        })

        setAdAccountsNumber(sum);
      } catch (err) {
        console.error(err);
      }
    };

    adsApi();
  }, [userID]);

  return (
    <View style={[{height: height / 1.3}, {marginTop: 50}]}>
      <ScrollView>
        {/* Wallet */}
        <View style={[{borderRadius: 20}, {overflow: 'hidden'}, {backgroundColor: '#7538D4'}, {padding: 25}, {gap: 25}]}>
          <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
            <Text style={[{fontSize: 20}, {color: '#fff'}]}>Account Balance:</Text>
            <Pressable onPress={() => Alert.alert('This is your Dollar wallet credit!')}>
              <Foundation name="info" size={35} color="#fff" />
            </Pressable>
          </View>  

          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            {
              userWallet !== null && (
                <Text style={[{fontSize: 50}, {color: '#fff'}]}>{userWallet.toFixed(2)}</Text>
              )
            }
            <Foundation name="dollar" size={50} color="#fff" />
          </View>
        </View>
        {/* ////// */}

        <View style={[{marginTop: 60}, {gap: 30}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
          <Text style={[{fontSize: 20}]}>AD accounts:</Text>
          <CircularProgress
            value={adAccountsNumber}
            radius={120}
            duration={2000}
            progressValueColor={'#7538D4'}
            activeStrokeColor={'#7538D4'}
            inActiveStrokeColor={'#fff'}
            activeStrokeWidth={20}
            inActiveStrokeWidth={5}
            maxValue={200}
            title={'Ad'}
            titleColor={'#7538D4'}
            titleStyle={[]}
          />
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 10}, {justifyContent: 'space-between'}, {flexWrap: 'wrap'}, {gap: 20}, {marginTop: 20}]}>
          <Pressable onPress={() => navigation.navigate('Meta')} style={[{padding: 20}, {borderRadius: 20}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Image style={[{height: 22}, {width: 30}]} source={require('../assets/images&logos/output-onlinepngtools-meta.png')} />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{padding: 20}, {borderRadius: 20}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome name="snapchat-ghost" size={27} color="#fff" />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{padding: 20}, {borderRadius: 20}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <AntDesign name="google" size={27} color="#fff" />
          </Pressable>

          <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{padding: 20}, {borderRadius: 20}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome5 name="tiktok" size={27} color="#fff" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
};

export default Dashboard;