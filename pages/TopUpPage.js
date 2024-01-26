import { View, Text, Pressable, TextInput, Alert, ActivityIndicator } from 'react-native';
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

                    <Pressable onPress={() => setPaymentMethod('USDT')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>USDT</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Wise')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Wise</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Paypal')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Paypal</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Payoneer')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Payoneer</Text>
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

        <View style={[{flexDirection: 'row'}, {marginTop: 100}, {justifyContent: 'center'}, {gap: 20}]}>
            <Pressable style={[{paddingVertical: 20}, {paddingHorizontal: 60}, {borderRadius: 60}, {borderWidth: 3}, {borderColor: 'rgb(136,58,209)'}]}>
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