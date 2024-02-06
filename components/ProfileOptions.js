import { View, Text, Pressable, Dimensions, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileOptions = () => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

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
    <View style={[{borderRadius: 50}, {backgroundColor: '#7538D4'}, {padding: 20}, {marginTop: 20}, {elevation: 50}, {height: height / 1.8}]}>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate('Transactions')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <Entypo name="wallet" size={24} color="black" />
          <Text style={[]}>My transactions</Text>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('PaymentHistory')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <MaterialIcons name="history-toggle-off" size={24} color="black" />
          <Text style={[]}>Payments history</Text>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Services')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <MaterialIcons name="electrical-services" size={24} color="black" />
          <Text style={[]}>Our services</Text>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Account')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={[]}>Account settings</Text>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </Pressable>

        <Pressable onPress={logout} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <Feather name="log-out" size={24} color="black" />
          <Text style={[]}>Logout</Text>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </Pressable>
      </ScrollView>
    </View>
  )
};

export default ProfileOptions;