import { View, Text, Pressable, ScrollView, ActivityIndicator, FlatList, Linking, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import data from '../Context';

const FormationVideosPage = () => {

    const { pressedFormation } = useContext(data);

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const {t} = useTranslation();

    const [userInfo, setUserInfo] = useState('');
    const [buyLoading, setBuyLoading] = useState(false);
    const [formationPurchased, setFormationPurchased] = useState(false);

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
        const getUser = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                const data = await response.json();

                if (response.ok) {
                    const isFormationPurchased = data.user.formations.some(
                        (x) => x.formationId === pressedFormation._id
                    );
                    setFormationPurchased(isFormationPurchased);
                };
            } catch (err) {
                console.error(err);
            }
        };

        getUser();
    });

    const buy = () => {
        setBuyLoading(true);

        const getUser = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
                const data = await response.json();

                if (response.ok) {
                    const userEuroWallet = data.user.eurWallet;

                    const changeEurWallet = async () => {
                        try {
                            const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userInfo._id}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    eurWallet: userEuroWallet - pressedFormation.price
                                })
                            });

                            const data = await response.json();

                            if (response.ok) {
                                const pushFormation = async () => {
                                    try {
                                        const response = await fetch(`https://sila-b.onrender.com/users/pushFormation/${userInfo._id}`, {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                formationId: pressedFormation._id
                                            })
                                        });

                                        const data = await response.json();

                                        if (response.ok) {
                                            const paymentHistory = async () => {
                                                try {
                                                    const response = await fetch(`https://sila-b.onrender.com/paymentHistory`, {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            userID: userInfo._id,
                                                            type: `Purchased ${pressedFormation.name} formation`,
                                                            amount: `-${pressedFormation.price}`
                                                        })
                                                    });

                                                    const data = await response.json();

                                                    if (response.ok) {
                                                        //End of purchase
                                                        setBuyLoading(false);
                                                        Alert.alert('Purchase successful! 🎉');
                                                        navigation.navigate('Formation');
                                                    };
                                                } catch (err) {
                                                    console.error(err);
                                                }
                                            };

                                            paymentHistory();
                                        };
                                    } catch (err) {
                                        console.error(err);
                                    }
                                };

                                pushFormation();
                            };
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    if (userEuroWallet >= pressedFormation.price) {
                        changeEurWallet();
                    } else {
                        Alert.alert('Oops, you don\'t have enough credit!');
                        setBuyLoading(false);
                    };
                };
            } catch (err) {
                console.error(err);
            }
        };

        getUser();
    };

  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        {
            !formationPurchased && (
                <View style={[{padding: 20}, {borderRadius: 30}, {backgroundColor: '#7538D4'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Ionicons name="checkmark-circle" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}]}>{t('you-have-enough-credit')}</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {marginTop: 30}, {alignItems: 'center'}, {gap: 20}]}>
                        <Pressable onPress={buy} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 30}]}>
                            {
                                buyLoading ? (
                                    <ActivityIndicator color={'#7538D4'} size={'large'} />
                                ) : (
                                    <Text style={[{color: '#7538D4'}]}>{t('buy-now')}</Text>
                                )
                            }
                        </Pressable>

                        <Pressable onPress={() => navigation.navigate('Formation')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {padding: 20}, {borderRadius: 30}]}>
                            <Text style={[{color: '#fff'}]}>{t('cancel')}</Text>
                        </Pressable>
                    </View>
                </View>
            )
        }

        <View style={[{backgroundColor: 'lightgrey'}, {marginTop: 30}, {borderRadius: 50}, {padding: 30}]}>
            <FlatList showsVerticalScrollIndicator={false} data={pressedFormation.videos} keyExtractor={item => item._id} renderItem={({item}) => (
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {justifyContent: 'space-between'}, {borderRadius: 30}, {backgroundColor: '#fff'}, {marginBottom: 30}]}>
                    <MaterialCommunityIcons name="movie-open" size={24} color="black" />
                    <Text style={[{width: width / 3}, {fontWeight: 700}]}>{item.videoName}</Text>
                    {
                        formationPurchased ? (
                            <>
                                <AntDesign name="unlock" size={24} color="black" />
                                <TouchableOpacity onPress={() => Linking.openURL(item.videoLink)}>
                                    <EvilIcons name="external-link" size={24} color="black" />
                                </TouchableOpacity>
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

export default FormationVideosPage;