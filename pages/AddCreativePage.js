import { View, Text, Pressable, Image, Dimensions, Alert, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../Context';
import { useNavigation } from '@react-navigation/native';

const AddCreativePage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { pressedCreativePack } = useContext(data);

    const [userInfo, setUserInfo] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);

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

    const pickVideos = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*'
                });

                if (response.canceled) {
                    Alert.alert('No videos were selected!');
                } else {
                    // Handle upload

                    setUploadLoading(true);

                    if (userInfo !== null) {
                        const formData = new FormData();
                        formData.append('userID', userInfo._id);
                        
                        const file = {
                            uri: response.assets[0].uri,
                            type: response.assets[0].mimeType,
                            name: response.assets[0].name
                        };

                        formData.append('videos', file);

                        formData.append('userName', userInfo.userName);
                        formData.append('email', userInfo.email);
                        formData.append('phoneNumber', userInfo.phoneNumber);
                        formData.append('creativePlan', pressedCreativePack);

                        const creativeVidsApi = async () => {
                            try {
                                const response = await fetch(`https://sila-b.onrender.com/creativeVids`, {
                                    method: 'POST',
                                    body: formData
                                });

                                const data = await response.json();
                                
                                const userApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                                        const data = await response.json();

                                        const currentEurWallet = data.user.eurWallet;

                                        if (pressedCreativePack === 'Pack Starter / €29') {
                                            const patchWalletApi = async () => {
                                                try {
                                                    const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                                        method: 'PATCH',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            eurWallet: currentEurWallet - 29
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
                                                                    type: 'Purchased Creative starter pack',
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
                                                            eurWallet: currentEurWallet - 69
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
                                                                    type: 'Purchased Creative medium pack',
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
                                                            eurWallet: currentEurWallet - 129
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
                                                                    type: 'Purchased Creative expert pack',
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

                                userApi();
                            } catch (err) {
                                console.error(err);
                            }
                        };

                        creativeVidsApi();
                    }
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick();
    };

  return (
    <View style={[{flex: 1}]}>
        <Pressable onPress={pickVideos} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {padding: 30}, {gap: 20}, {backgroundColor: '#7538D4'}]}>
            {
                uploadLoading ? (
                    <>
                        <ActivityIndicator color={'#fff'} size={'large'} />
                        <Text style={[{color: '#fff'}]}>Please wait, videos are uploading...</Text>
                    </>
                ) : (
                    <>
                        <AntDesign name="plus" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}]}>Add your videos</Text>
                    </>
                )
            }
        </Pressable>

        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/Uploading.gif')} style={[{height: height / 2}, {width: width}]} />
        </View>
    </View>
  )
};

export default AddCreativePage;