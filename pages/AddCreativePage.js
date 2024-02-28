import { View, Text, Pressable, Image, Dimensions, Alert, ActivityIndicator, Animated, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../Context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddCreativePage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { pressedCreativePack } = useContext(data);

    const [userInfo, setUserInfo] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [linkInput, setLinkInput] = useState(null);

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

    const sendLink = () => {
        setUploadLoading(true);

        if (linkInput !== null && userInfo !== null && pressedCreativePack !== null) {
            const creativeApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/creativeVids', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            video: linkInput,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            creativePlan: pressedCreativePack
                        })
                    });

                    const data = await response.json();

                    const usersApi = async () => {
                        try {
                            const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                            const data = await response.json();
                            const currentWallet = data.user.eurWallet;

                            if (pressedCreativePack === 'Pack Starter / €29') {
                                const patchWalletApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                eurWallet: currentWallet - 29
                                            })
                                        });

                                        const data = await response.json();

                                        const paymentHistoryApi = async () => {
                                            try {
                                                const response = await fetch('https://sila-b.onrender.com/paymentHistory', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        userID: userInfo._id,
                                                        type: 'Purchased creative starter pack',
                                                        amount: '-29'
                                                    })
                                                });

                                                const data = await response.json();
                                                setUploadLoading(false);
                                                navigation.navigate('CreativeDashboard');
                                            } catch (err) {
                                                console.error(err);
                                            }
                                        };

                                        paymentHistoryApi();
                                    } catch (err) {
                                        console.error(err);
                                    }
                                };

                                patchWalletApi();
                            } else if (pressedCreativePack === 'Pack Medium / €69') {
                                const patchWalletApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                eurWallet: currentWallet - 69
                                            })
                                        });

                                        const data = await response.json();

                                        const paymentHistoryApi = async () => {
                                            try {
                                                const response = await fetch('https://sila-b.onrender.com/paymentHistory', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        userID: userInfo._id,
                                                        type: 'Purchased creative medium pack',
                                                        amount: '-69'
                                                    })
                                                });

                                                const data = await response.json();
                                                setUploadLoading(false);
                                                navigation.navigate('CreativeDashboard');
                                            } catch (err) {
                                                console.error(err);
                                            }
                                        };

                                        paymentHistoryApi();
                                    } catch (err) {
                                        console.error(err);
                                    }
                                };

                                patchWalletApi();
                            } else if (pressedCreativePack === 'Pack Expert / €129') {
                                const patchWalletApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                eurWallet: currentWallet - 129
                                            })
                                        });

                                        const data = await response.json();

                                        const paymentHistoryApi = async () => {
                                            try {
                                                const response = await fetch('https://sila-b.onrender.com/paymentHistory', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        userID: userInfo._id,
                                                        type: 'Purchased creative expert pack',
                                                        amount: '-129'
                                                    })
                                                });

                                                const data = await response.json();
                                                setUploadLoading(false);
                                                navigation.navigate('CreativeDashboard');
                                            } catch (err) {
                                                console.error(err);
                                            }
                                        };

                                        paymentHistoryApi();
                                    } catch (err) {
                                        console.error(err);
                                    }
                                };

                                patchWalletApi();
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    usersApi();
                } catch (err) {
                    console.error(err);
                }
            };

            creativeApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/Uploading.gif')} style={[{height: height / 2}, {width: width}]} />
        </View>

        <View style={[{borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {backgroundColor: '#7538D4'}, {padding: 30}, {gap: 30}]}>
            <View style={[{alignItems: 'center'}, {gap: 30}]}>
                <Entypo name="google-drive" size={50} color="#fff" />

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 10}]}>
                    <Text style={[{color: '#fff'}]}>1- Upload your video in Google drive</Text>
                    <Feather name="upload" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 10}]}>
                    <Text style={[{color: '#fff'}]}>2- Allow access for anyone to see the video</Text>
                    <Octicons name="eye" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 10}]}>
                    <Text style={[{color: '#fff'}]}>3- Paste the link here and send!</Text>
                    <Ionicons name="link" size={24} color="#fff" />
                </View>
            </View>

            <View style={[{justifyContent: 'center'}]}>
                {
                    uploadLoading ? (
                        <ActivityIndicator size={'large'} color={'#fff'} />
                    ) : (
                        <>
                            <TextInput onChangeText={(text) => setLinkInput(text)} style={[{backgroundColor: '#fff'}, {height: height / 15}, {borderRadius: 50}, {paddingLeft: 30}]} placeholder='Your Google drive link...' />
                            <Pressable onPress={sendLink} style={[{backgroundColor: '#7538D4'}, {position: 'absolute'}, {right: 10}, {height: 40}, {width: 40}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}]}>
                                <Feather name="send" size={24} color="#fff" />
                            </Pressable>
                        </>
                    )
                }
            </View>
        </View>
    </View>
  )
};

export default AddCreativePage;