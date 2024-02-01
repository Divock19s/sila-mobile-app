import { View, Text, ScrollView, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const PaymentHistory = () => {

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
        const paymentHistoryApi = async () => {
            try {
                const response = await fetch('http://192.168.1.3:4000/paymentHistory');
                const data = await response.json();
                setApiData(data.history);
            } catch (err) {
                console.error(err);
            }
        };

        paymentHistoryApi();
    }, []);

  return (
    <View style={[{paddingHorizontal: 30}]}>
        <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <MaterialIcons name="history-toggle-off" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Payments history</Text>
        </View>

        <View style={[{height: 600}, {marginTop: 100}]}>
            {
                userID !== null && (
                    <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                        if (item.userID === userID) {
                            return(
                                <View style={[{borderRadius: 50}, {backgroundColor: 'rgb(136,58,209)'}, {padding: 20}, {marginBottom: 30}, {gap: 10}]}>
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <AntDesign name="shoppingcart" size={24} color="#fff" />
                                        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Type: {item.type}</Text>
                                    </View>
                                    
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                                        <Ionicons name="receipt-outline" size={24} color="#fff" />
                                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Application ID: {item._id}</Text>
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 50}, {color: '#fff'}]}>{item.amount}</Text>
                                        <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
                                    </View>

                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                                        <Ionicons name="time-sharp" size={24} color="#fff" />
                                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>On: {`${item.date.slice(0, 4)} . ${item.date.slice(5, 7)} . ${item.date.slice(8, 10)}`}</Text>
                                    </View>
                                </View>
                            )
                        }
                    }} />
                )
            }
        </View>
    </View>
  )
}

export default PaymentHistory