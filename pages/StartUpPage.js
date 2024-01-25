import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const StartUpPage = () => {

    const navigation = useNavigation();

    const [showLoading, setShowLoading] = useState(false);

    const value = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(value, {
            toValue: 1,
            duration: 1000,
            delay: 2000,
            useNativeDriver: true
        }).start();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(true);
        }, 5000);
    }, []);

    useEffect(() => {
        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                
                if (response !== null) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Dashboard' }]
                    });
                } else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Sign' }]
                    });
                }
            } catch (err) {
                console.error(err);
            }
        };

        setTimeout(() => {
            asyncStorage();
        }, 8000);
    }, []);

  return (
    <View style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}]}>
      <Animated.View style={[{height: 120}, {width: 120}, {backgroundColor: 'purple'}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}, {opacity: value}]}>
        <Image source={require('../assets/images&logos/5f2e4560-d176-43d4-a8b7-731bb145cb40-e1698547045253.webp')} />
      </Animated.View>

      {
        showLoading && (
            <ActivityIndicator color={'purple'} size={'large'} />
        )
      }
    </View>
  )
}

export default StartUpPage