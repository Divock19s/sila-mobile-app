import { View, Text, ScrollView, Pressable, TextInput, FlatList, Alert, ActivityIndicator, Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AccountsList = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [openBMInput, setOpenBMInput] = useState(false);
    const [bmShareID, setBmShareID] = useState(null);

    const [userInfo, setUserInfo] = useState(null);

    const [apiData, setApiData] = useState([]);

    const [shareLoading, setShareLoading] = useState(false);

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
        const adsApi = async () => {
            try {
                const response = await fetch('https://sila-vbyf.onrender.com/ad');
                const data = await response.json();
                setApiData(data.ADs);
            } catch (err) {
                console.error(err);
            }
        };

        adsApi();
    }, [userInfo]);

    const share = (_id) => {
        setShareLoading(true);

        if (userInfo !== null && bmShareID !== null) {
            apiData.map((x) => {
                if (x.userID === userInfo._id) {
                    x.ads.map((y) => {
                        if (y._id === _id) {
                            const bmShareApi = async () => {
                                try {
                                    const response = await fetch('https://sila-vbyf.onrender.com/bmShare', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            userID: userInfo._id,
                                            adID: y.adID,
                                            adName: y.adName,
                                            bmID: bmShareID
                                        })
                                    });

                                    const data = await response.json();
                                    setShareLoading(false);
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'BMLogs' }]
                                    });
                                } catch (err) {
                                    console.error(err);
                                }
                            };

                            bmShareApi();
                        }
                    })
                }
            })
        } else {
            Alert.alert('Please type bm share id!');
        }
    };

  return (
    <View style={[{marginTop: 30}, {height: height / 1.4}]}>
      {
        userInfo !== null && (
            <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                if (item.userID === userInfo._id) {
                    return(
                        <FlatList data={item.ads} keyExtractor={item => item._id} renderItem={({item: ad}) => (
                            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <Fontisto name="database" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>License name:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{ad.licenseName}</Text>
                                </View>

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{ad.adID}</Text>
                                </View>

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{ad.adName}</Text>
                                </View>

                                <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
                                    <Pressable onPress={() => setOpenBMInput(true)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                                        <FontAwesome name="share-alt" size={24} color="#000" />
                                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>BM share</Text>
                                    </Pressable>
                                </View>

                                {
                                    openBMInput && (
                                        <>
                                            <TextInput onChangeText={(text) => setBmShareID(text)} style={[{borderBottomWidth: 3}, {borderColor: '#fff'}, {color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]} placeholder='BM share ID...' placeholderTextColor={'gray'} />
                                            <View style={[{flexDirection: 'row'}, {justifyContent: 'flex-end'}, {gap: 30}]}>
                                                <Pressable onPress={() => setOpenBMInput(false)} style={[{borderWidth: 2}, {borderColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Cancel</Text>
                                                </Pressable>

                                                <Pressable onPress={() => share(ad._id)} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                                                    {
                                                        shareLoading ? (
                                                            <ActivityIndicator color={'#000'} />
                                                        ) : (
                                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>Share</Text>
                                                        )
                                                    }
                                                </Pressable>
                                            </View>
                                        </>
                                    )
                                }
                            </View>
                        )} />
                    )
                }
            }} />
        )
      }
    </View>
  )
}

export default AccountsList