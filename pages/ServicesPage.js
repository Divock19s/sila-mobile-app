import { View, Text, Pressable, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const {t} = useTranslation();

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 30}]}>
        <View style={[{borderBottomWidth: 4}, {justifyContent: 'center'}, {alignItems: 'center'}, {height: height / 8}, {borderColor: '#7538D4'}, {flexDirection: 'row'}, {gap: 20}]}>
            <Octicons name="server" size={30} color="#7538D4" />
            <Text style={[{fontSize: 16}, {color: '#7538D4'}]}>{t('our-services')}</Text>
        </View>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: '#7538D4'}, {marginTop: 30}, {borderRadius: 20}]}>
            <Entypo name="code" size={30} color="#fff" />
            <Text style={[{fontSize: 16}, {color: '#fff'}]}>{t('development')}</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('MediaBuying')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: '#7538D4'}, {marginTop: 30}, {borderRadius: 20}]}>
            <MaterialIcons name="movie-filter" size={30} color="#fff" />
            <Text style={[{fontSize: 16}, {color: '#fff'}]}>{t('media-buying')}</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Shooting')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: '#7538D4'}, {marginTop: 30}, {borderRadius: 20}]}>
            <Entypo name="video-camera" size={30} color="#fff" />
            <Text style={[{fontSize: 16}, {color: '#fff'}]}>{t('shooting')}</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Dashboard')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: '#7538D4'}, {marginTop: 30}, {borderRadius: 20}]}>
            <AntDesign name="barschart" size={30} color="#fff" />
            <Text style={[{fontSize: 16}, {color: '#fff'}]}>{t('ads')}</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Formation')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: '#7538D4'}, {marginTop: 30}, {borderRadius: 20}]}>
            <SimpleLineIcons name="graduation" size={30} color="#fff" />
            <Text style={[{fontSize: 16}, {color: '#fff'}]}>{t('formation')}</Text>
        </Pressable>
    </View>
  )
}

export default ServicesPage