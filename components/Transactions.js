import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Transactions = () => {

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
        const transactionsApi = async () => {
            try {
                const response = await fetch('http://192.168.1.2:4000/transaction');
                const data = await response.json();
                setApiData(data.transactions);
            } catch (err) {
                console.error(err);
            }
        };

        transactionsApi();
    }, []);

  return (
    <View style={[{paddingHorizontal: 30}]}>
        <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <Entypo name="wallet" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>My transactions</Text>
        </View>

        <View style={[{marginTop: 100}, {height: 630}]}>
            <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                if (item.userID === userID) {
                    return(
                        <View style={[{borderRadius: 50}, {backgroundColor: 'yellow'}, {padding: 20}, {marginBottom: 30}, {gap: 30}]}>
                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <Ionicons name="receipt-outline" size={24} color="black" />
                                <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Application ID: {item._id}</Text>
                            </View>
                            
                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <MaterialCommunityIcons name="bank" size={24} color="black" />
                                <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Transaction ID: {item.transactionID}</Text>
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <FontAwesome5 name="money-bill" size={24} color="black" />
                                <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Payment Method: {item.paymentMethod}</Text>
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                                <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 30}]}>{item.chargeAmount}</Text>
                                <MaterialCommunityIcons name="star-four-points" size={24} color="black" />
                            </View>

                            <View style={[{alignItems: 'center'}]}>
                                <View style={[{height: 200}, {width: 150}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                                    <Image style={[{flex: 1}, {resizeMode: 'stretch'}]} source={{uri: item.photoProof}} />
                                </View>
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Status:</Text>
                                {
                                    item.status === 'Pending' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                                            <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Pending</Text>
                                            <Ionicons name="time-sharp" size={24} color="#000" />
                                        </View>
                                    )
                                }
                            </View>
                        </View>
                    )
                }
            }} />
        </View>
    </View>
  )
};

export default Transactions;