import { View, Text, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileOptions = () => {

  const navigation = useNavigation();

  const logout = () => {
    const asyncStorage = async () => {
      try {
        await AsyncStorage.removeItem('userInfo');
      } catch (err) {
        console.error(err);
      }
    };

    asyncStorage();

    navigation.reset({
      index: 0,
      routes: [{ name: 'Sign' }]
    });
  };

  return (
    <View style={[{borderRadius: 50}, {backgroundColor: '#rgb(136,58,209)'}, {gap: 25}, {padding: 20}, {marginTop: 20}, {elevation: 50}]}>
      <Pressable onPress={() => navigation.navigate('Transactions')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <Entypo name="wallet" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>My transactions</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('PaymentHistory')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
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

      <Pressable onPress={logout} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {elevation: 50}]}>
        <Feather name="log-out" size={24} color="black" />
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Logout</Text>
        <EvilIcons name="chevron-right" size={30} color="black" />
      </Pressable>
    </View>
  )
};

export default ProfileOptions;