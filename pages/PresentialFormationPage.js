import { View, Text, Image, Dimensions, Pressable, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const PresentialFormationPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState(null);
    const [orderLoading, setOrderLoading] = useState(false);

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

    const order = () => {
        setOrderLoading(true);

        if (userInfo !== null) {
            const orderFormationApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/orderFormation', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber
                        })
                    });

                    const data = await response.json();
                    setOrderLoading(false);
                    Alert.alert('Order sent successfully!');
                    navigation.navigate('Formation');
                } catch (err) {
                    console.error(err);
                }
            };

            orderFormationApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <Image style={[{height: height / 2}, {width: width}]} source={require('../assets/images&logos/Present.gif')} />
        <Text style={[{padding: 20}, {marginTop: 30}, {fontSize: 18}, {fontWeight: 300}, {lineHeight: 40}]}>If you took the formation in the agency physically, or paid with cash instead of online, then you can order your formation now!</Text>
        <Pressable onPress={order} style={[{marginTop: 30}, {backgroundColor: '#7538D4'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {marginHorizontal: 20}]}>
            {
                orderLoading ? (
                    <ActivityIndicator size={'large'} color={'#fff'} />
                ) : (
                    <Text style={[{color: '#fff'}]}>Order now</Text>
                )
            }
        </Pressable>
    </View>
  )
}

export default PresentialFormationPage