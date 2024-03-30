import { View, Text, Pressable, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const VipLogsPage = () => {

    const navigation = useNavigation();

    const {t} = useTranslation();

    const [userID, setUserID] = useState(null);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                setUserID(JSON.parse(response)._id);
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();
    }, []);

    useEffect(() => {
        const adVipApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/adVip');
                const data = await response.json();
                setApiData(data.ADs);
            } catch (err) {
                console.error(err);
            }
        };

        adVipApi();
    }, []);

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
        <Pressable onPress={() => navigation.navigate('VipAd')} style={[{backgroundColor: '#7538D4'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {padding: 20}, {borderRadius: 30}, {gap: 20}]}>
            <AntDesign name="plus" size={24} color="#fff" />
            <Text style={[{color: '#fff'}]}>{t('create-new-vip-account')}</Text>
        </Pressable>

        <View style={[{flex: 1}, {marginTop: 30}]}>
            {
                userID !== null && (
                    <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userID) {
                            return(
                                <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <FontAwesome name="id-card-o" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}]}>ID:</Text>
                                        <Text style={[{color: '#fff'}]}>{item._id}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <Fontisto name="database" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}]}>License name:</Text>
                                        <Text style={[{color: '#fff'}]}>{item.license}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <MaterialIcons name="format-list-numbered" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}]}>{t('ad-account-number')}</Text>
                                        <Text style={[{color: '#fff'}]}>{item.adNumber}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <Text style={[{color: '#fff'}]}>{t('status')}</Text>
                                        {
                                            item.status === 'Pending' && (
                                                <>
                                                    <Text style={[{color: '#fff'}]}>{t('pending')}</Text>
                                                    <Ionicons name="time" size={24} color="#fff" />
                                                </>
                                            )
                                        }

                                        {
                                            item.status === 'Accepted' && (
                                                <>
                                                    <Text style={[{color: '#fff'}]}>{t('accepted')}</Text>
                                                    <Ionicons name="checkmark-done" size={24} color="#fff" />
                                                </>
                                            )
                                        }

                                        {
                                            item.status === 'Rejected' && (
                                                <>
                                                    <Text style={[{color: '#fff'}]}>{t('rejected')}</Text>
                                                    <AntDesign name="close" size={24} color="#fff" />
                                                </>
                                            )
                                        }
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <MaterialIcons name="attach-money" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}]}>{t('total-cost')}</Text>
                                        <Text style={[{color: '#fff'}]}>{`${item.totalCost} USD`}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <Foundation name="web" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}]}>Website:</Text>
                                        <Text style={[{color: '#fff'}]}>{item.website}</Text>
                                    </View>

                                    {
                                        item.adID !== '' && (
                                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                                <AntDesign name="user" size={24} color="#fff" />
                                                <Text style={[{color: '#fff'}]}>Ad ID:</Text>
                                                <Text style={[{color: '#fff'}]}>{item.adID}</Text>
                                            </View>
                                        )
                                    }
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

export default VipLogsPage;