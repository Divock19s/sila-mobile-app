import { View, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const NewAdAccount = () => {

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
        const licenseApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/ad');
                const data = await response.json();
                setApiData(data.ADs);
            } catch (err) {
                console.error(err);
            }
        };

        licenseApi();
    }, []);

  return (
    <View style={[{marginTop: 30}, {height: height / 1.4}]}>
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
                                <Text style={[{color: '#fff'}]}>Ads number:</Text>
                                <Text style={[{color: '#fff'}]}>{item.adNumber}</Text>
                            </View>

                            {
                                item.status === 'Pending' && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <Text style={[{color: '#fff'}]}>Status:</Text>
                                        <Text style={[{color: '#fff'}]}>Pending</Text>
                                        <Ionicons name="time" size={24} color="#fff" />
                                    </View>
                                )
                            }

                            {
                                item.status === 'Accepted' && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <Text style={[{color: '#fff'}]}>Status:</Text>
                                        <Text style={[{color: '#fff'}]}>Accepted</Text>
                                        <Ionicons name="checkmark-done" size={24} color="#fff" />
                                    </View>
                                )
                            }

                            {
                                item.status === 'Rejected' && (
                                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                        <Text style={[{color: '#fff'}]}>Status:</Text>
                                        <Text style={[{color: '#fff'}]}>Rejected</Text>
                                        <AntDesign name="close" size={24} color="#fff" />
                                    </View>
                                )
                            }

                            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                                <MaterialIcons name="attach-money" size={24} color="#fff" />
                                <Text style={[{color: '#fff'}]}>Total cost:</Text>
                                <Text style={[{color: '#fff'}]}>{`${item.totalCost} USD`}</Text>
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

export default NewAdAccount