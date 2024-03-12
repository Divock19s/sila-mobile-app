import { View, Text, Pressable, ScrollView, ActivityIndicator, FlatList, Linking, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

const EcommercePage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState(null);
    const [boughtEcommerce, setBoughtEcommerce] = useState(false);
    const [buyLoading, setBuyLoading] = useState(false);

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
            const userApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();

                    setBoughtEcommerce(data.user.eCommerceFormation);
                } catch (err) {
                    console.error(err);
                }
            };
    
            userApi();
        }
    }, [userInfo, buyLoading]);

    const buy = () => {
        setBuyLoading(true);

        if (userInfo !== null) {
            const userApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                    const data = await response.json();

                    const currentEurWallet = data.user.eurWallet;

                    const patchWalletApi = async () => {
                        try {
                            const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    eurWallet: currentEurWallet - 99
                                })
                            });

                            const data = await response.json();

                            const patchEcommerce = async () => {
                                try {
                                    const response = await fetch(`https://sila-b.onrender.com/users/eCommerce/${userInfo._id}`, {
                                        method: 'PATCH',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            eCommerceFormation: true
                                        })
                                    });

                                    const data = await response.json();

                                    const paymentHistoryApi = async () => {
                                        try {
                                            const response = await fetch('https://sila-b.onrender.com/paymentHistory', {
                                                method: 'POST',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    userID: userInfo._id,
                                                    type: 'Purchased E-commerce formation',
                                                    amount: '-99'
                                                })
                                            });

                                            const data = await response.json();
                                            setBuyLoading(false);
                                        } catch (err) {
                                            console.error(err);
                                        }
                                    };

                                    paymentHistoryApi();
                                } catch (err) {
                                    console.error(err);
                                }
                            };

                            patchEcommerce();
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    patchWalletApi();
                } catch (err) {
                    console.error(err);
                }
            };

            userApi();
        }
    };

    const eCommerceData = [{
        name: 'Video-1',
        link: "https://drive.google.com/file/d/172cdsqm3VRCM1RDa-ZS2n7kkW51AAWg8/view?usp=sharing"
    }, {
        name: 'Video-2',
        link: "https://drive.google.com/file/d/1hzugFgJ8Mf7EOw520XoWHHw1sG5rDt0w/view?usp=sharing"
    }, {
        name: 'Video-3',
        link: "https://drive.google.com/file/d/1LOixi7Pn_w38O4ChKNgubwqOvH2L5P0o/view?usp=sharing"
    }, {
        name: 'Video-4',
        link: "https://drive.google.com/file/d/1fBjtHb_qaFSLXiqn0dXH-reNLDGpLkca/view?usp=sharing"
    }, {
        name: 'Video-5',
        link: "https://drive.google.com/file/d/1jusig6vdlw7ZbbtyQZ3HVy219v0d94XQ/view?usp=sharing"
    },
    {
        name: 'Video-6',
        link: "https://drive.google.com/file/d/1gmRL8LxYYkSEYvVbuZ2B_7NmNqTH47Wx/view?usp=sharing"
    },
    {
        name: 'Video-7',
        link: "https://drive.google.com/file/d/19QHUuZKLQeCUy16wHUwlvPDqlp-PjYK7/view?usp=sharing"
    }, {
        name: 'Video-8',
        link: "https://drive.google.com/file/d/1Nht5wPogMbm4vVZvuG2Pd9R_7dLsRkx6/view?usp=sharing"
    }, {
        name: 'Video-9',
        link: "https://drive.google.com/file/d/1j5sXASUwrA3_TA7HKp_TYNDsJG5tmHIB/view?usp=sharing"
    }, {
        name: 'Video-10',
        link: "https://drive.google.com/file/d/1UKB1B2CLnIru-jPnMiiTbjXVyWWyeitS/view?usp=sharing"
    }, {
        name: 'Video-11',
        link: "https://drive.google.com/file/d/14mQkW9VkljI-yZL2N-HAb8dTlB_80UpG/view?usp=sharing"
    }, {
        name: 'Video-12',
        link: "https://drive.google.com/file/d/19cJAQO_CUndGfB2br4RctODVNFGRZy_L/view?usp=sharing"
    },
    {
        name: 'Video-13',
        link: "https://drive.google.com/file/d/12Xi7ZQKE2R5t6Y5nlr41udZHqRwCX3Cz/view?usp=sharing"
    },
    {
        name: 'Video-14',
        link: "https://drive.google.com/file/d/13EisztZHp8YR8MLYk3NeDkczVLQr0cIc/view?usp=sharing"
    },
    {
        name: 'Video-15',
        link: "https://drive.google.com/file/d/1nPvtHAGEJtxNhwBBPl6yK2kLG-CA48ow/view?usp=sharing"
    }, {
        name: 'Video-16',
        link: "https://drive.google.com/file/d/1xLBZxk-ijl7JdhVEane_nBwHOYHAArT5/view?usp=sharing"
    }, {
        name: 'Video-17',
        link: "https://drive.google.com/file/d/1WetltC-H5EuMswayWD7vmfOADy3jovWY/view?usp=sharing"
    },
    {
        name: 'Video-18',
        link: "https://drive.google.com/file/d/1AGebf1gfkUc318_zCLaeCpbZrfeC_Bna/view?usp=sharing"
    },
    {
        name: 'Video-19',
        link: "https://drive.google.com/file/d/1nALWifIQfW_BQsIPEPuXN9VtsB0aM_R0/view?usp=sharing"
    }, 
    {
        name: 'Video-20',
        link: "https://drive.google.com/file/d/1jj79EaqlCwHoPS7gPluk3wA2R_0BoeAd/view?usp=sharing"
    }, 
    {
        name: 'Video-21',
        link: "https://drive.google.com/file/d/1ekgYe7atxf6Zshk8UBzgCIvpgLkZI6s0/view?usp=sharing"
    },
    {
        name: 'Video-22',
        link: "https://drive.google.com/file/d/1arNop_XSMlPuEvx9IMQRNKVvHOtIFGrq/view?usp=sharing"
    }, 
    {
        name: 'Video-23',
        link: "https://drive.google.com/file/d/1rXQHsTwiESuBKmazA-DievY7gnxYZGei/view?usp=sharing"
    },
    {
        name: 'Video-24',
        link: "https://drive.google.com/file/d/1bH0Z397Mi8o7GIRCt3P1P_AorAR3PIni/view?usp=sharing"
    },
    {
        name: 'Video-25',
        link: "https://drive.google.com/file/d/1O3byRjyaG6aCzRa6vzNTAQSai7Udmu3V/view?usp=sharing"
    },
    {
        name: 'Video-26',
        link: "https://drive.google.com/file/d/1YIuQn-kI1XPwzShLCQBPbD7cGueBMgpz/view?usp=sharing"
    },
    {
        name: 'Video-27',
        link: "https://drive.google.com/file/d/1_wbjqu1nuTPqVtYBhMJCRNp3raFGQA6P/view?usp=sharing"
    }, 
    {
        name: 'Video-28',
        link: "https://drive.google.com/file/d/1loPs3s84WlmAXgmXscMcyArxHywdbkPC/view?usp=sharing"
    }, 
    {
        name: 'Video-29',
        link: "https://drive.google.com/file/d/1wGDG1Y2u9AqfplTIE5pJiX4tXZvD5rd-/view?usp=sharing"
    }, 
    {
        name: 'Video-30',
        link: "https://drive.google.com/file/d/16n_dFT4R9N7l4bGUUFVjZdNdaJbdt2Nd/view?usp=sharing"
    }];

  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        {
            !boughtEcommerce && (
            <View style={[{padding: 20}, {borderRadius: 30}, {backgroundColor: '#7538D4'}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name="checkmark-circle" size={24} color="#fff" />
                    <Text style={[{color: '#fff'}]}>You have enough credit!</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {marginTop: 30}, {alignItems: 'center'}, {gap: 20}]}>
                    <Pressable onPress={buy} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 30}]}>
                        {
                            buyLoading ? (
                                <ActivityIndicator size={'large'} color={'#7538D4'} />
                            ) : (
                                <Text style={[{color: '#7538D4'}]}>Buy Now!</Text>
                            )
                        }
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Formation')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {padding: 20}, {borderRadius: 30}]}>
                        <Text style={[{color: '#fff'}]}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
            )
        }

        <View style={[{backgroundColor: 'lightgrey'}, {marginTop: 30}, {borderRadius: 50}, {padding: 30}]}>
            <FlatList showsVerticalScrollIndicator={false} data={eCommerceData} renderItem={({item}) => (
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {justifyContent: 'space-between'}, {borderRadius: 30}, {backgroundColor: '#fff'}, {marginBottom: 30}]}>
                    <MaterialCommunityIcons name="movie-open" size={24} color="black" />
                    <Text>{item.name}</Text>
                    {
                        boughtEcommerce ? (
                            <>
                                <AntDesign name="unlock" size={24} color="black" />
                                <Pressable onPress={() => Linking.openURL(item.link)} style={[{alignItems: 'center'}]}>
                                    <EvilIcons name="external-link" size={24} color="black" />
                                    <Text>Open</Text>
                                </Pressable>
                            </>
                        ) : (
                            <AntDesign name="lock" size={24} color="black" />
                        )
                    }
                </View>
            )} />
        </View>
    </View>
  )
};

export default EcommercePage;