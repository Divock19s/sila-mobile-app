import { View, Text, Pressable, Dimensions, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

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

    const removeChoice = async () => {
      try {
        await AsyncStorage.removeItem('Choice');
      } catch (err) {
        console.error(err);
      }
    };

    removeChoice();

    navigation.reset({
      index: 0,
      routes: [{ name: 'Sign' }]
    });
  };

  return (
    <View style={[{borderRadius: 50}, {backgroundColor: '#7538D4'}, {padding: 20}, {marginTop: 20}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <Pressable onPress={() => navigation.navigate('Account')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={[]}>Account settings</Text>
          <EvilIcons name="chevron-right" size={30} color="black" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Language')} style={[{borderWidth: 3}, {borderColor: '#fff'}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {backgroundColor: '#fff'}, {justifyContent: 'space-between'}, {marginBottom: 20}]}>
          <Ionicons name="language-outline" size={30} color="black" />
          <Text style={[]}>Language settings</Text>
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