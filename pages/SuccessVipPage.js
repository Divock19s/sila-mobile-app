import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const SuccessVipPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const {t} = useTranslation();

  return (
    <View style={[{flex: 1}]}>
        <Image style={[{width: width}, {height: height / 2}]} source={require('../assets/images&logos/VIP.gif')} />
        <Image style={[{width: 100}, {height: 100}, {alignSelf: 'center'}, {marginTop: 30}]} source={require('../assets/images&logos/Crown.png')} />
        <View style={[{backgroundColor: '#7538D4'}, {alignSelf: 'center'}, {marginTop: 30}, {padding: 20}, {alignItems: 'center'}, {gap: 20}, {borderRadius: 20}]}>
            <Text style={[{color: '#fff'}]}>{t('vip-success-message')}</Text>
            <Ionicons name="checkmark-circle" size={24} color="#fff" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Ads')} style={[{height: 50}, {width: 50}, {backgroundColor: '#7538D4'}, {borderRadius: 100 / 2}, {justifyContent: 'center'}, {alignItems: 'center'}, {marginTop: 30}, {alignSelf: 'center'}]}>
            <SimpleLineIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
  )
};

export default SuccessVipPage;