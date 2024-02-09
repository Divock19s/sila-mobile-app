import { View, Text, ScrollView, Image, Dimensions, FlatList } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMediaPage = () => {

    const { width, height } = Dimensions.get('window');

    const [apiData, setApiData] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

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
                const response = await fetch('http://192.168.1.5:4000/media');
                const data = await response.json();
                setApiData(data.media);
            } catch (err) {
                console.error(err);
            }
        };

        mediaApi();
    }, []);

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
                                                </View>
                                            )
                                        }

                                        {
                                            imageRegex.test(m) && (
                                                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                                                    <Image source={{uri: m}} style={[{height: '100%'}, {width: '100%'}]} />
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

        <View style={[{backgroundColor: '#7538D4'}, {padding: 20}, {marginHorizontal: 30}, {borderRadius: 50}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}]}>
            <MaterialCommunityIcons name="movie-check" size={24} color="#fff" />
            <Text style={[{textAlign: 'center'}, {fontWeight: 300}, {fontSize: 20}, {color: '#fff'}]}>My purchased media:</Text>
        </View>

        <View style={[{marginHorizontal: 30}, {padding: 10}, {flex: 1}]}>
            <ScrollView>
                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Video style={[{flex: 1}]} source={require('../assets/images&logos/mbVid.mp4')} useNativeControls resizeMode={ResizeMode.COVER} />
                </View>

                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Image source={require('../assets/images&logos/mb.jpg')} style={[{height: '100%'}, {width: '100%'}]} />
                </View>
            </ScrollView>
        </View>
    </View>
  )
};

export default MyMediaPage;