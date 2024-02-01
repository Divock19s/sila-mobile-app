import { View, Dimensions, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {

    const navigation = useNavigation();

  return (
    <View style={[{height: 90}, {position: 'absolute'}, {bottom: 0}, {right: 0}, {left: 0}, {backgroundColor: '#fff'}, {borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {elevation: 50}, {alignItems: 'center'}, {padding: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
        <Pressable onPress={() => navigation.navigate('Meta')} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Image style={[{height: 20}, {width: 30}, {resizeMode: 'stretch'}]} source={require('../assets/images&logos/brand-meta-icon-512x358-6oqf35bx.png')} />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <AntDesign name="google" size={24} color="black" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Dashboard')} style={[{height: 80}, {width: 80}, {borderRadius: 100 / 2}, {marginTop: -50}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderWidth: 8}, {borderColor: '#fff'}]}>
            <AntDesign name="home" size={35} color="#fff" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome name="snapchat-ghost" size={24} color="black" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome5 name="tiktok" size={24} color="black" />
        </Pressable>
    </View>
  )
};

export default BottomNav;