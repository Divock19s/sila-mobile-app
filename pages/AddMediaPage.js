import { View, Text, Image, Pressable, Dimensions, Alert, FlatList, ActivityIndicator, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import { useState, useContext, useEffect } from 'react';
import data from '../Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const AddMediaPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const { pressedMediaPack } = useContext(data);
    
    const [userInfo, setUserInfo] = useState(null);
    const [apiData, setApiData] = useState([]);
    const [uploadLoading, setUploadLoading] = useState(false);

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

    useEffect(() => {
        const mediaApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/media');
                const data = await response.json();
                setApiData(data.media)
            } catch (err) {
                console.error(err);
            }
        };

        mediaApi();
    }, []);

    const pickFiles = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*',
                    multiple: true
                });

                if (response.canceled) {
                    Alert.alert('No media was selected!');
                } else {
                    setUploadLoading(true);

                    const formData = new FormData();

                    if (userInfo !== null) {
                        formData.append('userID', userInfo._id);
                        formData.append('userName', userInfo.userName);
                        formData.append('email', userInfo.email);
                        formData.append('phoneNumber', userInfo.phoneNumber);
                    };

                    response.assets.map((x) => {
                        const file = {
                            uri: x.uri,
                            type: x.mimeType,
                            name: x.name
                        };

                        formData.append('media', file);
                    });

                    if (pressedMediaPack !== null) {
                        formData.append('pack', pressedMediaPack);
                        if (pressedMediaPack === 'Pack startup / $399') {
                            formData.append('limit', 12);
                        } else if (pressedMediaPack === 'Pack medium / $599') {
                            formData.append('limit', 24);
                        } else if (pressedMediaPack === 'Pack expert / $899') {
                            formData.append('limit', 45);
                        }
                    };

                    const mediaApi = async () => {
                        try {
                            const response = await fetch('https://sila-b.onrender.com/media', {
                                method: 'POST',
                                body: formData
                            });

                            const data = await response.json();

                            if (userInfo !== null && pressedMediaPack !== null) {
                                const userApi = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                                        const data = await response.json();

                                        const currentEurWallet = data.user.eurWallet

                                        if (pressedMediaPack === 'Pack startup / $399') {
                                            const patchWalletApi = async () => {
                                                try {
                                                    const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                                        method: 'PATCH',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            eurWallet: currentEurWallet - 399
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
                                                                    type: 'Purchased a media pack',
                                                                    amount: '-399'
                                                                })
                                                            });

                                                            const data = await response.json();
                                                            setUploadLoading(false);
                                                            navigation.reset({
                                                                index: 0,
                                                                routes: [{ name: 'MBInterface' }]
                                                            });
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
                                                            eurWallet: currentEurWallet - 599
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
                                                                    type: 'Purchased a media pack',
                                                                    amount: '-599'
                                                                })
                                                            });

                                                            const data = await response.json();
                                                            setUploadLoading(false);
                                                            navigation.reset({
                                                                index: 0,
                                                                routes: [{ name: 'MBInterface' }]
                                                            });
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
                                                            eurWallet: currentEurWallet - 899
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
                                                                    type: 'Purchased a media pack',
                                                                    amount: '-899'
                                                                })
                                                            });

                                                            const data = await response.json();
                                                            setUploadLoading(false);
                                                            navigation.reset({
                                                                index: 0,
                                                                routes: [{ name: 'MBInterface' }]
                                                            });
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
                            }
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    mediaApi();
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick();
    };

  return (
    <View style={[{flex: 1}]}>
        <Pressable onPress={pickFiles} style={[{padding: 30}, {flexDirection: 'row'}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
            {
                uploadLoading ? (
                    <ActivityIndicator color={'#fff'} size={'large'} />
                ) : (
                    <>
                        <AntDesign name="plus" size={30} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontWeight: 500}, {fontSize: 16}]}>Add your media</Text>
                    </>
                )
            }
        </Pressable>

        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/Innovation-v2.gif')} style={[{height: 200}, {width: 200}]} />
            <MaterialIcons name="keyboard-arrow-down" size={50} color="black" />
            <Text style={[{fontWeight: 300}, {fontSize: 16}]}>All of your Media will be shown here:</Text>
        </View>

        <View style={[{borderTopWidth: 5}, {flex: 1}, {marginHorizontal: 30}, {borderColor: '#7538D4'}, {padding: 10}]}>
            {
                userInfo !== null && (
                    <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userInfo._id) {
                            return(
                                <FlatList data={item.media} keyExtractor={item => item._id} renderItem={({item: m}) => (
                                    <>
                                        {
                                            videoRegex.test(m) && (
                                                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                                                    <Video style={[{flex: 1}]} source={{uri: m}} useNativeControls resizeMode={ResizeMode.COVER} />
                                                    <Pressable onPress={() => Linking.openURL(m)} style={[{padding: 10}, {backgroundColor: '#7538D4'}, {borderRadius: 100 / 2}, {position: 'absolute'}, {right: 10}, {top: 10}]}>
                                                        <Feather name="download-cloud" size={24} color="#fff" />
                                                    </Pressable>
                                                </View>
                                            )
                                        }
                    
                                        {
                                            imageRegex.test(m) && (
                                                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                                                    <Image source={{uri: m}} style={[{height: '100%'}, {width: '100%'}]} />
                                                    <Pressable onPress={() => Linking.openURL(m)} style={[{padding: 10}, {backgroundColor: '#7538D4'}, {borderRadius: 100 / 2}, {position: 'absolute'}, {right: 10}, {top: 10}]}>
                                                        <Feather name="download-cloud" size={24} color="#fff" />
                                                    </Pressable>
                                                </View>
                                            )
                                        }
                                    </>
                                )} />
                            )
                        }
                    }} />
                )
            }
        </View>
    </View>
  )
};

export default AddMediaPage;