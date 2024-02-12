import { View, Text, Pressable, ImageBackground, ScrollView, Dimensions, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MBPacksPage = () => {

    const { width, height } = Dimensions.get('window');

    const navigation = useNavigation();

    const { pressedMediaPack, setPressedMediaPack } = useContext(data);

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

    const buyStartup = () => {
        if (userInfo !== null) {
            const usersApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();

                    if (data.user.eurWallet >= 399) {
                        setPressedMediaPack('Pack startup / $399');
                        navigation.navigate('AddMedia');
                    } else {
                        Alert.alert('Your Euro wallet balance is insufficient!');
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            usersApi();
        }
    };

    const buyMedium = () => {
        if (userInfo !== null) {
            const usersApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();

                    if (data.user.eurWallet >= 599) {
                        setPressedMediaPack('Pack medium / $599');
                        navigation.navigate('AddMedia');
                    } else {
                        Alert.alert('Your Euro wallet balance is insufficient!');
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            usersApi();
        }
    };

    const buyExpert = () => {
        if (userInfo !== null) {
            const usersApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();

                    if (data.user.eurWallet >= 899) {
                        setPressedMediaPack('Pack expert / $899');
                        navigation.navigate('AddMedia');
                    } else {
                        Alert.alert('Your Euro wallet balance is insufficient!');
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            usersApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{flexDirection: 'row'}, {padding: 40}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
            <Pressable onPress={() => navigation.navigate('MediaBuying')}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#7538D4" />
            </Pressable>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                <MaterialIcons name="movie-filter" size={30} color="#7538D4" />
                <Text style={[{color: '#7538D4'}, {fontSize: 16}, {fontWeight: 500}]}>Our Packs</Text>
            </View>
        </View>

        <ScrollView style={[{paddingHorizontal: 20}]}>
            <View style={[{borderRadius: 30}, {overflow: 'hidden'}, {marginBottom: 20}, {padding: 30}, {backgroundColor: "rgba(117, 56, 212, .3)"}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>Pack startup</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>$</Text>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 40}]}>399</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>12 Creative Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>4 Landing Page Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>Lancement Ads</Text>
                </View>

                <Pressable onPress={buyStartup} style={[{alignSelf: 'flex-end'}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 40}, {marginTop: 20}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <MaterialCommunityIcons name="source-commit-start-next-local" size={24} color="black" />
                    <Text style={[{fontWeight: 500}]}>Get Started</Text>
                </Pressable>
            </View>

            <View style={[{borderRadius: 30}, {overflow: 'hidden'}, {marginBottom: 20}, {padding: 30}, {backgroundColor: "rgba(117, 56, 212, .6)"}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>Pack medium</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>$</Text>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 40}]}>599</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>24 Creative Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>8 Landing Page Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>Lancement Ads</Text>
                </View>

                <Pressable onPress={buyMedium} style={[{alignSelf: 'flex-end'}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 40}, {marginTop: 20}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <MaterialCommunityIcons name="source-commit-start-next-local" size={24} color="black" />
                    <Text style={[{fontWeight: 500}]}>Get Started</Text>
                </Pressable>
            </View>

            <View style={[{borderRadius: 30}, {overflow: 'hidden'}, {marginBottom: 20}, {padding: 30}, {backgroundColor: "rgba(117, 56, 212, .9)"}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>Pack expert</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>$</Text>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 40}]}>899</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>45 Creative Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>15 Landing Page Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>Lancement Ads</Text>
                </View>

                <Pressable onPress={buyExpert} style={[{alignSelf: 'flex-end'}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 40}, {marginTop: 20}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <MaterialCommunityIcons name="source-commit-start-next-local" size={24} color="black" />
                    <Text style={[{fontWeight: 500}]}>Get Started</Text>
                </Pressable>
            </View>
        </ScrollView>
    </View>
  )
};

export default MBPacksPage;