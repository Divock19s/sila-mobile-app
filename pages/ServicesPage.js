import { View, Text, Pressable, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ServicesPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 30}]}>
        <View style={[{borderBottomWidth: 4}, {justifyContent: 'center'}, {alignItems: 'center'}, {height: height / 8}, {borderColor: 'purple'}, {flexDirection: 'row'}, {gap: 20}]}>
            <Octicons name="server" size={30} color="purple" />
            <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 16}, {color: 'purple'}]}>Our services</Text>
        </View>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: 'purple'}, {marginTop: 30}, {borderRadius: 20}]}>
            <Entypo name="code" size={30} color="#fff" />
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 16}, {color: '#fff'}, {width: width / 2}]}>Development (Apps & Websites)</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: 'purple'}, {marginTop: 30}, {borderRadius: 20}]}>
            <MaterialIcons name="movie-filter" size={30} color="#fff" />
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 16}, {color: '#fff'}]}>Media buying</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: 'purple'}, {marginTop: 30}, {borderRadius: 20}]}>
            <Entypo name="video-camera" size={30} color="#fff" />
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 16}, {color: '#fff'}]}>Shooting</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Dashboard')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {backgroundColor: 'purple'}, {marginTop: 30}, {borderRadius: 20}]}>
            <AntDesign name="barschart" size={30} color="#fff" />
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 16}, {color: '#fff'}]}>Ads</Text>
        </Pressable>

        <BottomNav />
    </View>
  )
}

export default ServicesPage