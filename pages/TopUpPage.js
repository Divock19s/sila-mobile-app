import { View, Text, Pressable, TextInput, Alert, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const TopUpPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const {t} = useTranslation();

    const [paymentMethodPicker, setPaymentMethodPicker] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const [currencyPicker, setCurrencyPicker] = useState(false);
    const [currency, setCurrency] = useState(null);

    const [chargeAmount, setChargeAmount] = useState(null);
    const [transactionID, setTransactionID] = useState(null);

    const [amountError, setAmountError] = useState(false);

    const [photoProof, setPhotoProof] = useState(null);

    const [userInfo, setUserInfo] = useState(null);

    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        if (currency !== null) {
            setCurrencyPicker(false);
        }
    }, [currency]);

    useEffect(() => {
        if (paymentMethod !== null) {
            setPaymentMethodPicker(false);
        }
    }, [paymentMethod]);

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

    const saveChargeAmount = (text) => {
        setChargeAmount(text);

        if (parseInt(text) <= 200) {
            setAmountError(true);
        } else {
            setAmountError(false);
        };
    };

    const pickProof = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*'
                });

                if (response.canceled) {
                    Alert.alert('No photo was selected!');
                } else {
                    setPhotoProof(response.assets[0]);
                }
            } catch (err) {
                console.error();
            }
        };

        pick();
    };

    const sendTransaction = () => {
        setConfirmLoading(true);

        const formData = new FormData();

        if (currency !== null) {
            formData.append('currency', currency);
        }

        if (paymentMethod !== null) {
            formData.append('paymentMethod', paymentMethod);
        }

        if (chargeAmount !== null) {
            formData.append('chargeAmount', chargeAmount);
        }

        if (transactionID !== null) {
            formData.append('transactionID', transactionID);
        }

        if (photoProof !== null) {
            const file = {
                uri: photoProof.uri,
                type: photoProof.mimeType,
                name: photoProof.name
            }

            formData.append('photoProof', file);
        }

        if (userInfo !== null) {
            formData.append('userID', userInfo._id);
            formData.append('email', userInfo.email);
            formData.append('phoneNumber', userInfo.phoneNumber);
            formData.append('userName', userInfo.userName);
        }

        const transactionApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/transaction', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                setConfirmLoading(false);

                navigation.navigate('Transactions');
            } catch (err) {
                console.error(err);
                setConfirmLoading(false);
            }
        };

        if (currency === null) {
            Alert.alert('Please select a currency!');
            setConfirmLoading(false);
        } else if (paymentMethod === null) {
            Alert.alert('Please select a payment method!');
            setConfirmLoading(false);
        } else if (chargeAmount === null) {
            Alert.alert('Please provide a charge amount!');
            setConfirmLoading(false);
        } else if (paymentMethod !== 'Cash' && transactionID === null) {
            Alert.alert('Please fill-in the transaction ID!');
            setConfirmLoading(false);
        } else if (photoProof === null) {
            Alert.alert('Please provide the photo proof!');
            setConfirmLoading(false);
        } else if (chargeAmount <= 200) {
            Alert.alert('Please change the amount, 200 or less is not available!');
            setConfirmLoading(false);
        } else {
            transactionApi();

            if (userInfo !== null) {
                const sendEmail = async () => {
                    try {
                        const response = await fetch('https://sila-b.onrender.com/sendMail/sentTopUp', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                userEmail: userInfo.email,
                                paymentMethod: paymentMethod,
                                transferAmount: chargeAmount,
                                transactionID: transactionID
                            })
                        });

                        const data = await response.json();
                    } catch (err) {
                        console.error(err);
                    }
                };

                sendEmail();
            }
        }
    };

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 30}]}>
        <View style={[{height: height / 12}, {backgroundColor: '#7538D4'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <Foundation name="dollar" size={50} color="#fff" />
            <Text style={[{color: '#fff'}, {fontSize: 17}]}>{t('top-up')}</Text>
        </View>

        <View style={[{marginTop: 100}, {flex: 1}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable onPress={() => setCurrencyPicker(!currencyPicker)} style={[{height: height / 12}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {paddingHorizontal: 30}, {borderRadius: 20}, {backgroundColor: '#7538D4'}]}>
                    {
                        currency !== null ? (
                            <Text style={[{fontSize: 17}, {color: '#fff'}]}>{currency}</Text>
                        ) : (
                            <Text style={[{fontSize: 17}, {color: 'gray'}]}>{t('currency')}</Text>
                        )
                    }
                    
                    {
                        currencyPicker ? (
                            <MaterialIcons name="arrow-drop-up" size={30} color="#fff" />
                        ) : (
                            <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />
                        )
                    }
                </Pressable>

                {
                    currencyPicker && (
                        <View style={[{borderWidth: 3}, {borderRadius: 20}, {borderColor: '#7538D4'}]}>
                            <Pressable onPress={() => setCurrency('EUR')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                                <Text style={[{fontSize: 17}]}>EUR {t('all-services')}</Text>
                            </Pressable>

                            <Pressable onPress={() => setCurrency('USD')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                                <Text style={[{fontSize: 17}]}>USD {t('ads-only')}</Text>
                            </Pressable>
                        </View>
                    )
                }

                {/* Payment method */}
                <Pressable onPress={() => setPaymentMethodPicker(!paymentMethodPicker)} style={[{height: height / 12}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {paddingHorizontal: 30}, {borderRadius: 20}, {backgroundColor: '#7538D4'}, {marginTop: 30}]}>
                    {
                        paymentMethod !== null ? (
                            <Text style={[{fontSize: 17}, {color: '#fff'}]}>{paymentMethod}</Text>
                        ) : (
                            <Text style={[{fontSize: 17}, {color: 'gray'}]}>{t('payment-method')}</Text>
                        )
                    }
                    
                    {
                        paymentMethodPicker ? (
                            <MaterialIcons name="arrow-drop-up" size={30} color="#fff" />
                        ) : (
                            <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />
                        )
                    }
                </Pressable>

                {
                    paymentMethodPicker && (
                        <View style={[{borderWidth: 3}, {borderRadius: 20}, {borderColor: '#7538D4'}]}>
                            {
                                currency === 'EUR' && (
                                    <>
                                        <Pressable onPress={() => setPaymentMethod('Paysera')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                                            <Text style={[{fontSize: 17}]}>Paysera</Text>
                                        </Pressable>

                                        <Pressable onPress={() => setPaymentMethod('Cash')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                                            <Text style={[{fontSize: 17}]}>Cash</Text>
                                        </Pressable>
                                    </>
                                )
                            }

                            {
                                currency === 'USD' && (
                                    <Pressable onPress={() => setPaymentMethod('Binance')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                                        <Text style={[{fontSize: 17}]}>Binance</Text>
                                    </Pressable>
                                )
                            }
                        </View>
                    )
                }

                <TextInput onChangeText={(text) => saveChargeAmount(text)} value={chargeAmount} style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontSize: 17}, {borderColor: amountError ? 'red' : '#7538D4'}]} placeholder='Charge Amount, eg: 500' keyboardType='numeric' />
                {
                    amountError && (
                        <Text style={[{color: 'red'}]}>200 or less is not available!</Text>
                    )
                }

                {
                    paymentMethod !== 'Cash' && (
                        <TextInput onChangeText={(text) => setTransactionID(text)} style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontSize: 17}, {borderColor: '#7538D4'}]} placeholder='Transaction ID' />
                    )
                }

                <View style={[{marginTop: 30}]}>
                    <Text style={[{fontSize: 17}]}>{t('photo-proof')}</Text>

                    <Pressable onPress={pickProof} style={[{marginTop: 10}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        {
                            photoProof !== null ? (
                                <AntDesign name="checkcircle" size={50} color="#7538D4" />
                            ) : (
                                <AntDesign name="plus" size={50} color="#7538D4" />
                            )
                        }
                    </Pressable>
                </View>

                {
                    paymentMethod !== null && (
                        <>
                            {
                                paymentMethod === 'Paysera' && (
                                    <View style={[{marginTop: 20}]}>
                                        <Text style={[{fontSize: 17}, {marginBottom: 10}]}>Payment info:</Text>
                                        <Text style={[{color: 'gray'}]}>Paysera bank :</Text>
                                        <Text style={[{color: 'gray'}]}>Email: adomerou@gmail.com</Text>
                                        <Text style={[{color: 'gray'}]}>Recipient</Text>
                                        <Text style={[{color: 'gray'}]}>Abdallah Mermouri</Text>
                                        <Text style={[{color: 'gray'}]}>Your IBAN</Text>
                                        <Text style={[{color: 'gray'}]}>LT943500010003017272</Text>
                                        <Text style={[{color: 'gray'}]}>SWIFT/BIC</Text>
                                        <Text style={[{color: 'gray'}]}>EVIULT2VXXX</Text>
                                        <Text style={[{color: 'gray'}]}>Bank name</Text>
                                        <Text style={[{color: 'gray'}]}>Paysera LT, UAB</Text>
                                        <Text style={[{color: 'gray'}]}>Bank address</Text>
                                        <Text style={[{color: 'gray'}]}>Pilaitės pr. 16, Vilnius,</Text>
                                        <Text style={[{color: 'gray'}]}>LT-04352, Lithuania</Text>
                                        <Text style={[{color: 'gray'}]}>Correspondent bank name</Text>
                                        <Text style={[{color: 'gray'}]}>LIETUVOS BANKAS (BANK OF LITHUANIA)</Text>
                                        <Text style={[{color: 'gray'}]}>Correspondent bank address</Text>
                                        <Text style={[{color: 'gray'}]}>GEDIMINO 6, VILNIUS, Lietuva</Text>
                                        <Text style={[{color: 'gray'}]}>Correspondent bank SWIFT code</Text>
                                        <Text style={[{color: 'gray'}]}>LIABLT2XXXX</Text>
                                    </View>
                                )
                            }

                            {
                                paymentMethod === 'Binance' && (
                                    <View style={[{marginTop: 20}]}>
                                        <Text style={[{fontSize: 17}, {marginBottom: 10}]}>Payment info:</Text>
                                        <Text style={[{color: 'gray'}]}>Binance :</Text>
                                        <Text style={[{color: 'gray'}]}>Id: 38893440</Text>
                                        <Text style={[{color: 'gray'}]}>Usdt adresse TRC20  : TMNDfXxomc9AqdkMvMDBrqKy4q8JPMBpY5</Text>
                                        <Text style={[{color: 'gray'}]}>Username: sila_marketing</Text>
                                        <Text style={[{color: 'gray'}]}>Email: adomerou@gmail.com</Text>
                                    </View>
                                )
                            }
                        </>
                    )
                }

                <Pressable onPress={sendTransaction} style={[{backgroundColor: '#7538D4'}, {paddingVertical: 20}, {paddingHorizontal: 40}, {borderRadius: 60}, {justifyContent: 'center'}, {alignItems: 'center'}, {marginTop: 40}]}>
                    {
                        confirmLoading ? (
                            <ActivityIndicator color={'#fff'} size={'large'} />
                        ) : (
                            <Text style={[{fontSize: 17}, {color: '#fff'}]}>{t('confirm')}</Text>
                        )
                    }
                </Pressable>
            </ScrollView>
        </View>
    </View>
  )
};

export default TopUpPage;