import { View, Image, Dimensions, ImageBackground, Text, Pressable, Animated, Alert, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularProgress from 'react-native-circular-progress-indicator';

const Dashboard = () => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const [userID, setUserID] = useState(null);
  const [userWallet, setUserWallet] = useState(null);

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
        <ImageBackground style={[{borderRadius: 20}, {overflow: 'hidden'}, {height: 170}]} source={require('../assets/images&logos/triangles2.jpg')}>
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
            <Foundation name="dollar" size={50} color="black" />
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

        <View style={[{marginTop: 30}, {gap: 30}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
          <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 20}]}>AD accounts:</Text>
          <CircularProgress
            value={adAccountsNumber}
            radius={120}
            duration={2000}
            progressValueColor={'purple'}
            activeStrokeColor={'purple'}
            inActiveStrokeColor={'#fff'}
            activeStrokeWidth={20}
            inActiveStrokeWidth={5}
            maxValue={200}
            title={'Ad'}
            titleColor={'purple'}
            titleStyle={[{fontFamily: 'Ubuntu-Bold'}]}
          />
        </View>
      </ScrollView>
    </View>
  )
};

export default Dashboard;