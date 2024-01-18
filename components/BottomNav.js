import { View, Dimensions, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNav = () => {

  return (
    <View style={[{borderWidth: 3}, {height: 90}, {position: 'absolute'}, {bottom: 0}, {right: 0}, {left: 0}, {backgroundColor: '#fff'}, {borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {elevation: 50}, {alignItems: 'center'}, {padding: 30}, {flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
        <Pressable style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome name="facebook" size={24} color="black" />
        </Pressable>

        <Pressable style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <AntDesign name="google" size={24} color="black" />
        </Pressable>

        <Pressable style={[{height: 80}, {width: 80}, {borderRadius: 100 / 2}, {marginTop: -50}, {backgroundColor: '#000'}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderWidth: 8}, {borderColor: '#fff'}]}>
            <AntDesign name="home" size={35} color="#fff" />
        </Pressable>

        <Pressable style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome name="snapchat-ghost" size={24} color="black" />
        </Pressable>

        <Pressable style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}, {elevation: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <FontAwesome5 name="tiktok" size={24} color="black" />
        </Pressable>
    </View>
  )
};

export default BottomNav;