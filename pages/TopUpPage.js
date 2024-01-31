import { View, Text, Pressable, TextInput, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const TopUpPage = () => {

    const navigation = useNavigation();

    const [paymentMethodPicker, setPaymentMethodPicker] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const [chargeAmount, setChargeAmount] = useState(null);
    const [transactionID, setTransactionID] = useState(null);

    const [photoProof, setPhotoProof] = useState(null);

    const [userInfo, setUserInfo] = useState(null);

    const [confirmLoading, setConfirmLoading] = useState(false);

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
                const response = await fetch('http://192.168.1.3:4000/transaction', {
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

        if (paymentMethod === null) {
            Alert.alert('Please select a payment method!');
            setConfirmLoading(false);
        } else if (chargeAmount === null) {
            Alert.alert('Please provide a charge amount!');
            setConfirmLoading(false);
        } else if (transactionID === null) {
            Alert.alert('Please fill-in the transaction ID!');
            setConfirmLoading(false);
        } else if (photoProof === null) {
            Alert.alert('Please provide the photo proof!');
            setConfirmLoading(false);
        } else {
            transactionApi();
        }
    };

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 30}]}>
        <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Top Up</Text>
        </View>

        <Pressable onPress={() => setPaymentMethodPicker(!paymentMethodPicker)} style={[{height: 70}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {paddingHorizontal: 30}, {borderRadius: 20}, {marginTop: 150}, {backgroundColor: 'rgb(136,58,209)'}]}>
            {
                paymentMethod !== null ? (
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}, {color: '#fff'}]}>{paymentMethod}</Text>
                ) : (
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}, {color: 'gray'}]}>Payment method</Text>
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
                <View style={[{borderWidth: 3}, {borderRadius: 20}, {borderColor: 'rgb(136,58,209)'}]}>
                    <Pressable onPress={() => setPaymentMethod('Baridi mob')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Baridi mob</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('CCP')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>CCP</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Paysera')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Paysera</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('USDT')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>USDT</Text>
                    </Pressable>
                </View>
            )
        }

        <TextInput onChangeText={(text) => setChargeAmount(text)} style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}, {borderColor: 'rgb(136,58,209)'}]} placeholder='Charge Amount, eg: 500' keyboardType='numeric' />

        <TextInput onChangeText={(text) => setTransactionID(text)} style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}, {borderColor: 'rgb(136,58,209)'}]} placeholder='Transaction ID' />

        <View style={[{marginTop: 30}]}>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}]}>Photo proof:</Text>

            <Pressable onPress={pickProof} style={[{marginTop: 10}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                {
                    photoProof !== null ? (
                        <AntDesign name="checkcircle" size={50} color="rgb(136,58,209)" />
                    ) : (
                        <AntDesign name="plus" size={50} color="rgb(136,58,209)" />
                    )
                }
            </Pressable>
        </View>

        {
            paymentMethod !== null && (
                <>
                    {
                        paymentMethod === 'Baridi mob' && (
                            <View style={[{marginTop: 20}]}>
                                <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}, {marginBottom: 10}]}>Payment info:</Text>
                                <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Baridimob:</Text>
                                <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>RIP : 00799999004065438501</Text>
                            </View>
                        )
                    }

                    {
                        paymentMethod === 'CCP' && (
                            <View style={[{marginTop: 20}]}>
                                <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}, {marginBottom: 10}]}>Payment info:</Text>
                                <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>CCP:</Text>
                                <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>40654385 cle 44</Text>
                                <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>ABDALLAH MERMOURI</Text>
                            </View>
                        )
                    }

                    {
                        paymentMethod === 'Paysera' && (
                            <View style={[{marginTop: 20}, {height: 100}]}>
                                <ScrollView>
                                    <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}, {marginBottom: 10}]}>Payment info:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Paysera bank :</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Email: adomerou@gmail.com</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Recipient</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Abdallah Mermouri</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Your IBAN</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>LT943500010003017272</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>SWIFT/BIC</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>EVIULT2VXXX</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Bank name</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Paysera LT, UAB</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Bank address</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Pilaitės pr. 16, Vilnius,</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>LT-04352, Lithuania</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Correspondent bank name</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>LIETUVOS BANKAS (BANK OF LITHUANIA)</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Correspondent bank address</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>GEDIMINO 6, VILNIUS, Lietuva</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Correspondent bank SWIFT code</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>LIABLT2XXXX</Text>
                                </ScrollView>
                            </View>
                        )
                    }

                    {
                        paymentMethod === 'USDT' && (
                            <View style={[{marginTop: 20}, {height: 100}]}>
                                <ScrollView>
                                    <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}, {marginBottom: 10}]}>Payment info:</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Binance :</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Id: 38893440</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Usdt adresse TRC20  : TMNDfXxomc9AqdkMvMDBrqKy4q8JPMBpY5</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Username: sila_marketing</Text>
                                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: 'gray'}]}>Email: adomerou@gmail.com</Text>
                                </ScrollView>
                            </View>
                        )
                    }
                </>
            )
        }

        <View style={[{flexDirection: 'row'}, {marginTop: 100}, {justifyContent: 'center'}, {gap: 20}]}>
            <Pressable onPress={() => navigation.navigate('Dashboard')} style={[{paddingVertical: 20}, {paddingHorizontal: 60}, {borderRadius: 60}, {borderWidth: 3}, {borderColor: 'rgb(136,58,209)'}]}>
                <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Cancel</Text>
            </Pressable>

            <Pressable onPress={sendTransaction} style={[{backgroundColor: 'rgb(136,58,209)'}, {paddingVertical: 20}, {paddingHorizontal: 60}, {borderRadius: 60}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                {
                    confirmLoading ? (
                        <ActivityIndicator color={'#fff'} size={'large'} />
                    ) : (
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Confirm</Text>
                    )
                }
            </Pressable>
        </View>

        <BottomNav />
    </View>
  )
};

export default TopUpPage;