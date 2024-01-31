import { View, Text, Image, TextInput, Pressable, ScrollView, Alert, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SupportChatPage = () => {

    const navigation = useNavigation();

    const [photo, setPhoto] = useState(null);
    const [message, setMessage] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const [apiData, setApiData] = useState([]);

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
        const chatApi = async () => {
            try {
                const response = await fetch('http://192.168.1.3:4000/support');
                const data = await response.json();
                setApiData(data.chats);
            } catch (err) {
                console.error(err);
            }
        };

        chatApi();
    }, []);

    const pickPhoto = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*'
                });

                if (response.canceled) {
                    Alert.alert('No photo was selected!');
                } else {
                    const formData = new FormData();

                    const file = {
                        uri: response.assets[0].uri,
                        type: response.assets[0].mimeType,
                        name: response.assets[0].name
                    };

                    if (userInfo !== null) {
                        formData.append('userID', userInfo._id);
                        formData.append('userName', userInfo.userName);
                        formData.append('userPhoto', userInfo.profilePhoto);
                        formData.append('photoMessage', file);

                        const chatApi = async () => {
                            try {
                                const response = await fetch('http://192.168.1.3:4000/support', {
                                    method: 'POST',
                                    body: formData
                                });
            
                                const data = await response.json();
                                Alert.alert('sent!');
                            } catch (err) {
                                console.error(err);
                            }
                        };
            
                        chatApi();
                    }
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick();
    };

    const sendMessage = () => {
        if (userInfo !== null && message !== null && message !== '') {
            const chatApi = async () => {
                try {
                    const response = await fetch('http://192.168.1.3:4000/support', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            userPhoto: userInfo.profilePhoto,
                            message: message
                        })
                    });

                    const data = await response.json();
                    Alert.alert('Sent!');
                } catch (err) {
                    console.error(err);
                }
            };

            chatApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {padding: 30}, {borderBottomLeftRadius: 30}, {borderBottomRightRadius: 30}]}>
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
            </Pressable>
            {
                userInfo !== null && (
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Image style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}]} source={{uri: userInfo.profilePhoto}} />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}]}>{userInfo.userName}</Text>
                    </View>
                )
            }
        </View>

        <View style={[{height: 650}, {padding: 20}]}>
            {
                userInfo !== null && (
                    <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userInfo._id) {
                            return(
                                <>
                                    {
                                        item.message !== '' && (
                                            <View style={[{backgroundColor: 'purple'}, {padding: 30}, {borderTopRightRadius: 40}, {borderBottomRightRadius: 40}, {borderTopLeftRadius: 40}, {marginVertical: 20}, {alignSelf: 'flex-start'}]}>
                                                <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>{item.message}</Text>
                                            </View>
                                        )
                                    }

                                    {
                                        item.photoMessage !== '' && (
                                            <View style={[{height: 200}, {width: 150}, {borderRadius: 10}, {overflow: 'hidden'}, {marginVertical: 20}]}>
                                                <Image style={[{flex: 1}]} source={{uri: item.photoMessage}} />
                                            </View>
                                        )
                                    }

                                    <View style={[{backgroundColor: '#000'}, {padding: 30}, {borderTopRightRadius: 40}, {borderBottomLeftRadius: 40}, {borderTopLeftRadius: 40}, {marginVertical: 20}, {alignSelf: 'flex-end'}]}>
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>sfhesuifhesufihesfh</Text>
                                    </View>
                                </>
                            )
                        }
                    }} />
                )
            }
        </View>

        <View style={[{position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {flexDirection: 'row'}, {alignItems: 'center'}, {borderColor: 'purple'}, {borderTopRightRadius: 20}, {borderTopLeftRadius: 20}, {overflow: 'hidden'}, {backgroundColor: 'purple'}]}>
            <TextInput onChangeText={(text) => setMessage(text)} style={[{height: 60}, {width: '70%'}, {fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}, {paddingLeft: 20}, {color: '#fff'}]} placeholder='Type your questions here...' />
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {width: '30%'}, {justifyContent: 'space-between'}, {paddingHorizontal: 5}]}>
                <Pressable onPress={pickPhoto}>
                    <MaterialIcons name="photo-library" size={30} color="#fff" />
                </Pressable>
                <Pressable onPress={sendMessage}>
                    <MaterialCommunityIcons name="send-circle" size={40} color="#fff" />
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default SupportChatPage