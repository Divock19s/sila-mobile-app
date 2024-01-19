import { View, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ProfileOptions = () => {
  return (
    <View style={[{borderRadius: 50}, {backgroundColor: '#rgb(136,58,209)'}, {gap: 25}, {padding: 20}, {marginTop: 20}, {elevation: 50}]}>
      <Pressable style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <Entypo name="wallet" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>My transactions</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>

      <Pressable style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <MaterialIcons name="history-toggle-off" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Payments history</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>

      <Pressable style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <MaterialIcons name="electrical-services" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Our services</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>

      <Pressable style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <AntDesign name="user" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Account settings</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>

      <Pressable style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <Feather name="log-out" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Logout</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>
    </View>
  )
};

export default ProfileOptions;