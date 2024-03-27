import { useEffect, useState } from 'react';
import { View, Text, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import { useTranslation } from 'react-i18next';

const StartUpPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const {t} = useTranslation();

    const logo = new Animated.Value(width);
    const signContainer = new Animated.Value(height);

    useEffect(() => {
        Animated.spring(logo, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);

    useEffect(() => {
        Animated.spring(signContainer, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);

  return (
    <View style={[{flex: 1}]}>
        <Video style={[{flex: 1}]} source={require('../assets/images&logos/Startup.mp4')} resizeMode={ResizeMode.COVER} isLooping shouldPlay />
        <Animated.View style={[{height: 100}, {width: 100}, {position: 'absolute'}, {alignSelf: 'center'}, {top: height / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {transform: [{translateX: logo}]}]}>
            <Image source={require('../assets/images&logos/5f2e4560-d176-43d4-a8b7-731bb145cb40-e1698547045253.webp')} />
        </Animated.View>

        <Animated.View style={[{position: 'absolute'}, {bottom: 20}, {alignSelf: 'center'}, {gap: 20}, {transform: [{translateY: signContainer}]}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Sign')} style={[{padding: 20}, {width: width - 70}, {borderRadius: 10}, {justifyContent: 'center'}, {alignItems: 'center'}, {backgroundColor: '#fff'}]}>
                <Text style={[{fontSize: 16}, {color: '#7538D4'}, {fontWeight: 700}]}>{t('sign-in')}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Sign')} style={[{padding: 20}, {width: width - 70}, {borderRadius: 10}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderWidth: 3}, {borderColor: '#fff'}]}>
                <Text style={[{fontSize: 16}, {color: '#fff'}, {fontWeight: 700}]}>{t('register-new-account')}</Text>
            </TouchableOpacity>
        </Animated.View>
    </View>
  )
}

export default StartUpPage