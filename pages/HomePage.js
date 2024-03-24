import { View, Text, ScrollView, Dimensions, Pressable, Image, FlatList, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const HomePage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState(null);
    const [userWallet, setUserWallet] = useState(null);
    const [userEurWallet, setUserEurWallet] = useState(null);

    const [transactions, setTransactions] = useState(null);
    const [successfulPayments, setSuccessfulPayments] = useState(null);
    const [licenses, setLicenses] = useState(null);
    const [refunds, setRefunds] = useState(null);

    const [apiData, setApiData] = useState([]);

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
        if (userInfo !== null) {
          const usersApi = async () => {
            try {
              const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
              const data = await response.json();
              setUserEurWallet(data.user.eurWallet);
            } catch (err) {
              console.error(err);
            }
          };
      
          usersApi();
        }
    }, [userInfo]);

    useEffect(() => {
        if (userInfo !== null) {
          const usersApi = async () => {
            try {
              const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
              const data = await response.json();
              setUserWallet(data.user.wallet);
            } catch (err) {
              console.error(err);
            }
          };
      
          usersApi();
        }
      }, [userInfo]);

    useEffect(() => {
        const transactionsApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/transaction');
                const data = await response.json();

                let sum = [];

                if (userInfo !== null) {
                    data.transactions.map((x) => {
                        if (x.userID === userInfo._id) {
                            sum.push(x);
                        };
                    });
                };

                setTransactions(sum.length);
            } catch (err) {
                console.error(err);
            }
        };

        transactionsApi();
    }, [userInfo]);

    useEffect(() => {
        const paymentHistoryApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/paymentHistory');
                const data = await response.json();

                let sum = [];

                if (userInfo !== null) {
                    data.history.map((x) => {
                        if (x.userID === userInfo._id) {
                            sum.push(x);
                        };
                    });
                };

                setSuccessfulPayments(sum.length);
            } catch (err) {
                console.error(err);
            }
        };

        paymentHistoryApi();
    }, [userInfo]);

    useEffect(() => {
        const licenseApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/ad');
                const data = await response.json();

                let sum = [];

                if (userInfo !== null) {
                    data.ADs.map((x) => {
                        if (x.userID === userInfo._id) {
                            sum.push(x);
                        };
                    });
                };

                setLicenses(sum.length);
            } catch (err) {
                console.error(err);
            }
        };

        licenseApi();
    }, [userInfo]);

    useEffect(() => {
        const refundApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/refund');
                const data = await response.json();

                let sum = [];

                if (userInfo !== null) {
                    data.refunds.map((x) => {
                        if (x.userID === userInfo._id) {
                            sum.push(x);
                        };
                    });
                };

                setRefunds(sum.length);
            } catch (err) {
                console.error(err);
            }
        };

        refundApi();
    }, [userInfo]);

    useEffect(() => {
        const adminMediaApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/adminMedia');
                const data = await response.json();
                setApiData(data.media);
            } catch (err) {
                console.error(err);
            }
        };

        adminMediaApi();
    }, []);

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 20}, {paddingTop: 30}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                <View>
                    {
                        userInfo !== null && (
                            <Text style={[{fontSize: 20}, {fontWeight: 300}]}>Hello {userInfo.userName}</Text>
                        )
                    }
                    <Text>Discover joy in every interaction!</Text>
                </View>
                {
                    userInfo !== null && (
                        <Image source={{uri: userInfo.profilePhoto}} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}]} />
                    )
                }
            </View>

            <Pressable onPress={() => navigation.navigate('TopUp')} style={[{gap: 5}, {alignItems: 'center'}, {marginTop: 30}, {borderRadius: 16}, {backgroundColor: '#7538D4'}, {padding: 15}]}>
                <AntDesign name="plus" size={24} color="#fff" />
                <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>Re-charge your wallet</Text>
            </Pressable>

            <Text style={[{fontSize: 16}, {marginTop: 30}]}>Services</Text>

            <View style={[{marginTop: 20}]}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                        <Entypo name="code" size={30} color="#fff" />
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Development</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('MediaBuying')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                        <MaterialIcons name="movie-filter" size={30} color="#fff" />
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Media buying</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Shooting')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                        <Entypo name="video-camera" size={30} color="#fff" />
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Shooting</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Dashboard')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                        <AntDesign name="barschart" size={30} color="#fff" />
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Ads</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Formation')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                        <SimpleLineIcons name="graduation" size={30} color="#fff" />
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Formation</Text>
                    </Pressable>
                </ScrollView>
            </View>

            <Text style={[{fontSize: 16}, {marginTop: 30}]}>Account stats</Text>

            {
                transactions !== null && successfulPayments !== null && licenses !== null && refunds !== null && (
                    <LineChart
                        data={{
                        labels: ["Transactions      ", "Payments", "      Ads licenses", "      Refunds"],
                        datasets: [
                            {
                            data: [
                                transactions,
                                successfulPayments,
                                licenses,
                                refunds
                            ]
                            }
                        ]
                        }}
                        width={width - 40} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix=""
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#7538D4",
                        backgroundGradientFrom: "#7538D4",
                        backgroundGradientTo: "#7538D4",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "3",
                            strokeWidth: "2",
                            stroke: "#fff"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                )
            }

            {/* Euro Wallet */}
            <View style={[{borderRadius: 20}, {overflow: 'hidden'}, {marginTop: 30}, {backgroundColor: '#7538D4'}, {padding: 25}, {gap: 25}]}>
                <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                    <Text style={[{fontSize: 20}, {color: '#fff'}]}>Account Balance:</Text>
                    <Pressable onPress={() => Alert.alert('This is your Euro wallet credit!')}>
                        <Foundation name="info" size={35} color="#fff" />
                    </Pressable>
                </View>  

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    {
                    userEurWallet !== null && (
                        <Text style={[{fontSize: 50}, {color: '#fff'}]}>{userEurWallet.toFixed(2)}</Text>
                    )
                    }
                    <FontAwesome name="euro" size={35} color="#fff" />
                </View>
            </View>
            {/* //////// */}

            {/* Dollar Wallet */}
            <View style={[{borderRadius: 20}, {overflow: 'hidden'}, {backgroundColor: '#7538D4'}, {padding: 25}, {gap: 25}, {marginTop: 30}]}>
                <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                    <Text style={[{fontSize: 20}, {color: '#fff'}]}>Account Balance:</Text>
                    <Pressable onPress={() => Alert.alert('This is your Dollar wallet credit!')}>
                    <Foundation name="info" size={35} color="#fff" />
                    </Pressable>
                </View>  

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    {
                    userWallet !== null && (
                        <Text style={[{fontSize: 50}, {color: '#fff'}]}>{userWallet.toFixed(2)}</Text>
                    )
                    }
                    <Foundation name="dollar" size={50} color="#fff" />
                </View>
            </View>
            {/* ////// */}

            <FlatList showsVerticalScrollIndicator={false} data={apiData} keyExtractor={item => item._id} renderItem={({item}) => (
                <>
                    {
                        imageRegex.test(item.media) && (
                            <Image source={{uri: item.media}} style={[{height: 220}, {width: '100%'}, {borderRadius: 16}, {marginTop: 30}]} />
                        )
                    }

                    {
                        videoRegex.test(item.media) && (
                            <Video source={{uri: item.media}} style={[{height: 220}, {borderRadius: 16}, {marginTop: 30}]} resizeMode={ResizeMode.COVER} useNativeControls />
                        )
                    }
                </>
            )} />
        </ScrollView>
    </View>
  )
}

export default HomePage