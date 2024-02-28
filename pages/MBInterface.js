import { View, Text, Image, Dimensions, Pressable, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const MBInterface = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

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
    <View style={[{flex: 1}]}>
        <View style={[{height: height / 1.2}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Wallet */}
                <View style={[{borderRadius: 20}, {overflow: 'hidden'}, {marginTop: 30}, {backgroundColor: '#7538D4'}, {padding: 25}, {gap: 25}, {marginHorizontal: 20}, {marginBottom: 40}]}>
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

                <View style={[{alignItems: 'center'}, {paddingHorizontal: 20}, {gap: 20}]}>
                    {
                        userInfo !== null && (
                            <Image source={{uri: userInfo.profilePhoto}} style={[{height: 80}, {width: 80}, {borderRadius: 100 / 2}]} />
                        )
                    }
                    
                    {
                        userInfo !== null && (
                            <Text style={[{fontWeight: 600}]}>Hi there! {userInfo.userName}</Text>
                        )
                    }
                    <Text style={[{fontSize: 16}, {fontWeight: 300}]}>Discover our new service where we can edit your content as well as managing your Ads and sending you all the analytics every week with just €0.65</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 40}, {paddingHorizontal: 30}]}>
                    <Pressable onPress={() => navigation.navigate('Home')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {alignSelf: 'flex-end'}]}>
                        <AntDesign name="home" size={30} color="#fff" />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('MBPacks')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {alignSelf: 'flex-end'}]}>
                        <AntDesign name="plus" size={30} color="#fff" />
                    </Pressable>
                </View>
            </ScrollView>
        </View>

        <Pressable onPress={() => navigation.navigate('MyMedia')} style={[{position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderTopRightRadius: 30}, {borderTopLeftRadius: 30}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#7538D4'}]}>
            <MaterialIcons name="movie-filter" size={24} color="#fff" />
            <Text style={[{fontWeight: 500}, {color: '#fff'}]}>My Media</Text>
        </Pressable>
    </View>
  )
};

export default MBInterface;