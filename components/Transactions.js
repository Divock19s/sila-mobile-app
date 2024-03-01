import { View, Text, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Transactions = () => {

    const { width, height } = Dimensions.get('window');

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
                const response = await fetch('https://sila-b.onrender.com/transaction');
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
        <View style={[{height: height / 12}, {backgroundColor: '#7538D4'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <Entypo name="wallet" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontSize: 17}]}>My transactions</Text>
        </View>

        <View style={[{marginTop: 100}, {height: height / 1.4}]}>
            <FlatList showsVerticalScrollIndicator={false} data={apiData} keyExtractor={item => item._id} renderItem={({item}) => {
                if (item.userID === userID) {
                    return(
                        <View style={[{borderRadius: 50}, {backgroundColor: '#000'}, {padding: 20}, {marginBottom: 30}, {gap: 30}]}>
                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <Ionicons name="receipt-outline" size={24} color="#fff" />
                                <Text style={[{color: '#fff'}, {width: width / 2}]}>Application ID: {item._id}</Text>
                            </View>
                            
                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <MaterialCommunityIcons name="bank" size={24} color="#fff" />
                                <Text style={[{color: '#fff'}, {width: width / 2}]}>Transaction ID: {item.transactionID}</Text>
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <FontAwesome5 name="money-bill" size={24} color="#fff" />
                                <Text style={[{color: '#fff'}]}>Payment Method: {item.paymentMethod}</Text>
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                                <Text style={[{fontSize: 30}, {color: '#fff'}]}>{item.chargeAmount}</Text>
                                {
                                    item.currency === 'USD' ? (
                                        <Foundation name="dollar" size={30} color="#fff" />
                                    ) : (
                                        <Foundation name="euro" size={30} color="#fff" />
                                    )
                                }
                            </View>

                            <View style={[{alignItems: 'center'}]}>
                                <View style={[{height: height / 4}, {width: width / 2.5}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                                    <Image style={[{flex: 1}, {resizeMode: 'stretch'}]} source={{uri: item.photoProof}} />
                                </View>
                            </View>

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                                <Text style={[{color: '#fff'}]}>Status:</Text>
                                {
                                    item.status === 'Pending' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                                            <Text style={[{color: '#fff'}]}>Pending</Text>
                                            <Ionicons name="time-sharp" size={24} color="#fff" />
                                        </View>
                                    )
                                }

                                {
                                    item.status === 'Accepted' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                                            <Text style={[{color: '#fff'}]}>Accepted</Text>
                                            <Feather name="check" size={24} color="#fff" />
                                        </View>
                                    )
                                }

                                {
                                    item.status === 'Rejected' && (
                                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                                            <Text style={[{color: '#fff'}]}>Rejected</Text>
                                            <AntDesign name="close" size={24} color="#fff" />
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