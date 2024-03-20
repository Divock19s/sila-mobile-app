import { View, Text, Alert, Pressable, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import FormationTab from '../components/FormationTab';
import { Ionicons } from '@expo/vector-icons';

const FormationPage = () => {

    const navigation = useNavigation();

    const {width, height} = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState(null);
    const [userEurWallet, setUserEurWallet] = useState(null);
    const [boughtEcommerce, setBoughtEcommerce] = useState(false);

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

    useEffect(() => {
        if (userInfo !== null) {
            const userApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();

                    setBoughtEcommerce(data.user.eCommerceFormation);
                } catch (err) {
                    console.error(err);
                }
            };
    
            userApi();
        }
    }, [userInfo]);

    const goToEcommerce = () => {
        if (userInfo !== null) {
            const userApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();
                    
                    if (data.user.eurWallet < 99) {
                        Alert.alert('Oops, your credit is not sufficient!');
                    } else {
                        navigation.navigate('Ecommerce');
                    };
                } catch (err) {
                    console.error(err);
                }
            };
    
            userApi();
        }
    };

  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        <View style={[{height: height / 1.2}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
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

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/e-commerce-3d.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Expert Class</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>99</Text>
                        </View>
                    </View>

                    <Pressable onPress={goToEcommerce} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        {
                            boughtEcommerce ? (
                                <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Open</Text>
                            ) : (
                                <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Buy now</Text>
                            )
                        }
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/ads-3d.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Facebook Ads cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>69</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/design-3d.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Design cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>49</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/video-edit-3d.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Video editing cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>79</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/Infographie.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Infographie cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>79</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/shooting-3d.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Shooting cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>69</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/AI-3d.png')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Intelligent Artificiel cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>99</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>

                <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                        <Image style={[{height: 70}, {width: 70}]} source={require('../assets/images&logos/digital-marketing-3d.webp')} />
                        <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Digital marketing cours</Text>
                        <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                            <FontAwesome name="euro" size={20} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 40}]}>89</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexDirection: 'row'}, {gap: 20}]}>
                        <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>Coming soon</Text>
                        <Ionicons name="time" size={24} color="#7538D4" />
                    </Pressable>
                </View>
            </ScrollView>
        </View>

        <FormationTab />
    </View>
  )
}

export default FormationPage