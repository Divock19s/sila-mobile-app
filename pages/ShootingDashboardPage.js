import { View, Text, Image, Dimensions, Pressable, ScrollView, Animated, FlatList, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShootingDashboardPage = () => {

    const { width, height } = Dimensions.get('window');

    const value = new Animated.Value(height);

    const [apiData, setApiData] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

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
        const shootingLinkApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/shootingLink');
                const data = await response.json();
                setApiData(data.shootingLink);
            } catch (err) {
                console.error(err);
            }
        };

        shootingLinkApi();
    }, []);

    const openLink = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        Linking.openURL(target.link);
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/shooting.gif')} style={[{height: height / 2}, {width: width}]} />
        </View>

        <Animated.View style={[{height: height / 2}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {borderTopRightRadius: 50}, {borderTopLeftRadius: 50}, {backgroundColor: 'lightgray'}, {padding: 30}, {transform: [{translateY: value}]}]}>
            <Text style={[{textAlign: 'center'}, {fontSize: 16}, {fontWeight: 300}, {textDecorationLine: 'underline'}]}>You can see all of your videos and photos here:</Text>
            {
                userInfo !== null && (
                    <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userInfo._id) {
                            return(
                                <View style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 10}, {marginTop: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                                    <Text>{item.link}</Text>
                                    <Pressable onPress={() => openLink(item._id)}>
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

export default ShootingDashboardPage;