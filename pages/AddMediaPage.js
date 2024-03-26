import { View, Text, Image, Pressable, Dimensions, Alert, FlatList, ActivityIndicator, Linking, TextInput } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import data from '../Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const AddMediaPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const {t} = useTranslation();

    const { pressedMediaPack } = useContext(data);
    
    const [userInfo, setUserInfo] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);
    const [linkInput, setLinkInput] = useState(null);

    const videoRegex = /\b(mp4|mov)\b/;
    const imageRegex = /\b(jpg|png|jpeg|gif)\b/;

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

        if (linkInput !== null && userInfo !== null && pressedMediaPack !== null) {
            const mediaApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/media', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            media: linkInput,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            pack: pressedMediaPack
                        })
                    });

                    const data = await response.json();

                    const usersApi = async () => {
                        try {
                            const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                            const data = await response.json();
                            const currentWallet = data.user.eurWallet;

                            if (pressedMediaPack === 'Pack startup / $399') {
                                const patchWalletApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                eurWallet: currentWallet - 399
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
                                                        type: 'Purchased media buying starter pack',
                                                        amount: '-399'
                                                    })
                                                });

                                                const data = await response.json();
                                                setUploadLoading(false);
                                                navigation.navigate('MyMedia');

                                                const sendMail = async () => {
                                                    try {
                                                        const response = await fetch('https://sila-b.onrender.com/sendMail/mediaBuying', {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({
                                                                userEmail: userInfo.email
                                                            })
                                                        });

                                                        const data = await response.json();
                                                    } catch (err) {
                                                        console.error(err);
                                                    }
                                                };

                                                sendMail();
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
                            } else if (pressedMediaPack === 'Pack medium / $599') {
                                const patchWalletApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                eurWallet: currentWallet - 599
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
                                                        type: 'Purchased media buying medium pack',
                                                        amount: '-599'
                                                    })
                                                });

                                                const data = await response.json();
                                                setUploadLoading(false);
                                                navigation.navigate('MyMedia');

                                                const sendMail = async () => {
                                                    try {
                                                        const response = await fetch('https://sila-b.onrender.com/sendMail/mediaBuying', {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({
                                                                userEmail: userInfo.email
                                                            })
                                                        });

                                                        const data = await response.json();
                                                    } catch (err) {
                                                        console.error(err);
                                                    }
                                                };

                                                sendMail();
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
                            } else if (pressedMediaPack === 'Pack expert / $899') {
                                const patchWalletApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                            method: 'PATCH',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                eurWallet: currentWallet - 899
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
                                                        type: 'Purchased media buying expert pack',
                                                        amount: '-899'
                                                    })
                                                });

                                                const data = await response.json();
                                                setUploadLoading(false);
                                                navigation.navigate('MyMedia');

                                                const sendMail = async () => {
                                                    try {
                                                        const response = await fetch('https://sila-b.onrender.com/sendMail/mediaBuying', {
                                                            method: 'POST',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({
                                                                userEmail: userInfo.email
                                                            })
                                                        });

                                                        const data = await response.json();
                                                    } catch (err) {
                                                        console.error(err);
                                                    }
                                                };

                                                sendMail();
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

            mediaApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <Image source={require('../assets/images&logos/Innovation-v2.gif')} style={[{height: height / 2}, {width: width}]} />

        <View style={[{borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {backgroundColor: '#7538D4'}, {padding: 30}, {gap: 30}]}>
            <View style={[{alignItems: 'center'}, {gap: 30}]}>
                <Entypo name="google-drive" size={50} color="#fff" />

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 10}]}>
                    <Text style={[{color: '#fff'}]}>1- {t('google-drive-step-1')}</Text>
                    <Feather name="upload" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 10}]}>
                    <Text style={[{color: '#fff'}]}>2- {t('google-drive-step-2')}</Text>
                    <Octicons name="eye" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 10}]}>
                    <Text style={[{color: '#fff'}]}>3- {t('google-drive-step-3')}</Text>
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

export default AddMediaPage;