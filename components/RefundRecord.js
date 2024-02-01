import { View, Text, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const RefundRecord = () => {

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
        const refundApi = async () => {
            try {
                const response = await fetch('http://192.168.1.3:4000/refund');
                const data = await response.json();
                setApiData(data.refunds);
            } catch (err) {
                console.error(err);
            }
        };

        refundApi();
    }, []);

  return (
    <View style={[{marginTop: 80}, {height: 600}]}>
        {
            userID !== null && (
                <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                    if (item.userID === userID) {
                        return(
                            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>ID:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{item._id}</Text>
                                </View>

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{item.adAccountID}</Text>
                                </View>

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{item.adAccountName}</Text>
                                </View>

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <Entypo name="dots-three-horizontal" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Refund reason:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}, {width: 180}]}>{item.refundReason}</Text>
                                </View>

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <FontAwesome name="dollar" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Amount:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{item.amount}</Text>
                                </View>

                                {
                                    item.status === 'Pending' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Pending</Text>
                                            <Ionicons name="time" size={24} color="#fff" />
                                        </View>
                                    )
                                }

                                {
                                    item.status === 'Accepted' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Accepted</Text>
                                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                                        </View>
                                    )
                                }

                                {
                                    item.status === 'Rejected' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Rejected</Text>
                                            <AntDesign name="close" size={24} color="#fff" />
                                        </View>
                                    )
                                }

                                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                    <AntDesign name="calendar" size={24} color="#fff" />
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Date:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>{`${item.date.slice(0, 4)} . ${item.date.slice(5, 7)} . ${item.date.slice(8, 10)}`}</Text>
                                </View>
                            </View>
                        )
                    }
                }} />
            )
        }
    </View>
  )
}

export default RefundRecord