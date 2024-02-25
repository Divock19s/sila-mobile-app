import { View, Text, ScrollView, Image, Dimensions, FlatList, Pressable, Linking, Animated } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MyMediaPage = () => {

    const { width, height } = Dimensions.get('window');

    const [apiData, setApiData] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [mediaLinkData, setMediaLinkData] = useState([]);

    const videoRegex = /\b(mp4|mov)\b/;
    const imageRegex = /\b(jpg|png|jpeg|gif)\b/;

    const value = new Animated.Value(height);

    useEffect(() => {
        Animated.timing(value, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);

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
                setApiData(data.media);
            } catch (err) {
                console.error(err);
            }
        };

        mediaApi();
    }, []);

    useEffect(() => {
        const mediaLinkApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/mediaLink');
                const data = await response.json();
                setMediaLinkData(data.links);
            } catch (err) {
                console.error(err);
            }
        };

        mediaLinkApi();
    }, []);

    const openLink = (link) => {
        Linking.openURL(link);
    };

  return (
    <View style={[{flex: 1}, {backgroundColor: '#fff'}]}>
        <View style={[{backgroundColor: '#7538D4'}, {padding: 20}, {marginHorizontal: 30}, {borderRadius: 50}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}]}>
            <Entypo name="video-camera" size={24} color="#fff" />
            <Text style={[{textAlign: 'center'}, {fontWeight: 300}, {fontSize: 20}, {color: '#fff'}]}>My raw media:</Text>
        </View>

        <View style={[{marginHorizontal: 30}, {padding: 10}, {height: height / 2.2}]}>
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

        <Animated.View style={[{flex: 1}, {borderTopRightRadius: 50}, {borderTopLeftRadius: 50}, {backgroundColor: 'lightgray'}, {padding: 30}, {transform: [{translateY: value}]}]}>
            <Text style={[{textAlign: 'center'}, {fontSize: 16}, {fontWeight: 300}, {textDecorationLine: 'underline'}]}>You can see all of your (Edited) videos here:</Text>

            {
                userInfo !== null && (
                    <FlatList data={mediaLinkData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userInfo._id) {
                            return(
                                <View style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 10}, {marginTop: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                                    <Text>{item.link}</Text>
                                    <Pressable onPress={() => openLink(item.link)}>
                                        <Ionicons name="open" size={24} color="black" />
                                    </Pressable>
                                </View>
                            )
                        }
                    }} />
                )
            }
        </Animated.View>
    </View>
  )
};

export default MyMediaPage;