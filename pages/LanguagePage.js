import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const LanguagePage = () => {

    const navigation = useNavigation();

    const {t} = useTranslation();

    const switchToEnglish = () => {
        const saveLang = async () => {
            try {
                await AsyncStorage.setItem('lang', 'en');
                i18next.changeLanguage('en');
                navigation.navigate('Profile');
            } catch (err) {
                console.error(err);
            }
        };

        saveLang();
    };

    const switchToArabic = () => {
        const saveLang = async () => {
            try {
                await AsyncStorage.setItem('lang', 'ar');
                i18next.changeLanguage('ar');
                navigation.navigate('Profile');
            } catch (err) {
                console.error(err);
            }
        };

        saveLang();
    };

  return (
    <View style={[{flex: 1}, {padding: 40}]}>
        <View style={[{backgroundColor: '#7538D4'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {padding: 30}, {borderRadius: 20}, {gap: 30}]}>
            <Ionicons name="language-outline" size={24} color="#fff" />
            <Text style={[{color: '#fff'}]}>{t('language-settings')}</Text>
        </View>

        <View style={[{gap: 40}, {marginTop: 50}]}>
            <TouchableOpacity onPress={switchToEnglish} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}, {backgroundColor: 'lightgray'}, {padding: 20}, {borderRadius: 20}]}>
                <Image style={[{height: 50}, {width: 50}]} source={require('../assets/images&logos/Usa.png')} />
                <Text>English</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={switchToArabic} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}, {backgroundColor: 'lightgray'}, {padding: 20}, {borderRadius: 20}]}>
                <Image style={[{height: 50}, {width: 50}]} source={require('../assets/images&logos/Arabic.png')} />
                <Text>العربية</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
};

export default LanguagePage;