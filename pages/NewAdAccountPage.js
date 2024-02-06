import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import NewAdAccount from '../components/NewAdAccount';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';

const NewAdAccountPage = () => {

  const navigation = useNavigation();

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <Pressable onPress={() => navigation.navigate('CreateAD')} style={[{backgroundColor: '#7538D4'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {padding: 20}, {borderRadius: 30}, {gap: 20}]}>
        <AntDesign name="plus" size={24} color="#fff" />
        <Text style={[{color: '#fff'}]}>Create new Ad Account</Text>
      </Pressable>

      <NewAdAccount />
      <BottomNav />
    </View>
  )
}

export default NewAdAccountPage