import { View, Text, ScrollView, Image, Dimensions, FlatList, Pressable, Animated, Linking } from 'react-native';
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

  return (
    <View style={[{flex: 1}, {backgroundColor: '#fff'}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 30}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {borderBottomLeftRadius: 30}, {borderBottomRightRadius: 30}]}>
            <MaterialCommunityIcons name="movie-filter-outline" size={24} color="#fff" />
            <Text style={[{color: '#fff'}]}>My media</Text>
        </View>

        <View style={[{height: height / 2.3}, {padding: 10}]}>
            {
                userInfo !== null && (
                    <FlatList showsVerticalScrollIndicator={false} data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userInfo._id) {
                            return(
                                <View style={[{marginBottom: 30}, {padding: 20}, {backgroundColor: '#7538D4'}, {borderRadius: 10}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                                    <Text style={[{color: '#fff'}]}>{item.media}</Text>
                                    <Pressable onPress={() => Linking.openURL(item.media)}>
                                        <Feather name="external-link" size={24} color="#fff" />
                                    </Pressable>
                                </View>
                            )
                        }
                    }} />
                )
            }
        </View>

        <View style={[{flex: 1}, {borderTopRightRadius: 50}, {borderTopLeftRadius: 50}, {backgroundColor: 'lightgray'}, {padding: 30}]}>
            <Text style={[{textAlign: 'center'}, {fontSize: 16}, {fontWeight: 300}, {textDecorationLine: 'underline'}]}>You can see all of your (Edited) videos here:</Text>

            {
                userInfo !== null && (
                    <FlatList showsVerticalScrollIndicator={false} data={mediaLinkData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userInfo._id) {
                            return(
                                <View style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 10}, {marginTop: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                                    <Text>{item.linkName}</Text>
                                    <Pressable onPress={() => Linking.openURL(item.link)}>
                                        <Ionicons name="open" size={24} color="black" />
                                    </Pressable>
                                </View>
                            )
                        }
                    }} />
                )
            }
        </View>
    </View>
  )
};

export default MyMediaPage;