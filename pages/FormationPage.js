import { View, Text, Alert, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import FormationTab from '../components/FormationTab';

const FormationPage = () => {

    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState(null);
    const [userEurWallet, setUserEurWallet] = useState(null);

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

    useEffect(() => {
        if (userInfo !== null) {
          const usersApi = async () => {
            try {
              const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
              const data = await response.json();
              setUserEurWallet(data.user.eurWallet);
            } catch (err) {
              console.error(err);
            }
          };
      
          usersApi();
        }
    }, [userInfo]);

  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <View>
                {
                    userInfo !== null && (
                        <Text style={[{fontSize: 20}, {fontWeight: 300}]}>Hello {userInfo.userName}</Text>
                    )
                }
                <Text>Discover joy in every interaction!</Text>
            </View>
            {
                userInfo !== null && (
                    <Pressable onPress={() => navigation.navigate('Profile')}>
                        <Image source={{uri: userInfo.profilePhoto}} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}]} />
                    </Pressable>
                )
            }
        </View>

        <Pressable onPress={() => navigation.navigate('TopUp')} style={[{gap: 5}, {alignItems: 'center'}, {marginTop: 30}, {borderRadius: 16}, {backgroundColor: '#7538D4'}, {padding: 15}]}>
            <AntDesign name="plus" size={24} color="#fff" />
            <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Re-charge your wallet</Text>
        </Pressable>

        {/* Euro Wallet */}
        <View style={[{borderRadius: 20}, {overflow: 'hidden'}, {backgroundColor: '#7538D4'}, {padding: 25}, {gap: 25}, {marginTop: 30}]}>
            <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                <Text style={[{fontSize: 20}, {color: '#fff'}]}>Account Balance:</Text>
                <Pressable onPress={() => Alert.alert('This is your Euro wallet credit!')}>
                    <Foundation name="info" size={35} color="#fff" />
                </Pressable>
            </View>  

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                {
                userEurWallet !== null && (
                    <Text style={[{fontSize: 50}, {color: '#fff'}]}>{userEurWallet.toFixed(2)}</Text>
                )
                }
                <FontAwesome name="euro" size={35} color="#fff" />
            </View>
        </View>
        {/* //////// */}

        <FormationTab />
    </View>
  )
}

export default FormationPage