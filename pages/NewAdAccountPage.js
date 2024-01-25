import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import NewAdAccount from '../components/NewAdAccount';
import BottomNav from '../components/BottomNav';

const NewAdAccountPage = () => {
  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <Pressable style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {padding: 20}, {borderRadius: 30}, {gap: 20}]}>
        <AntDesign name="plus" size={24} color="#fff" />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}]}>Create new Ad Account</Text>
      </Pressable>

      <NewAdAccount />
      <BottomNav />
    </View>
  )
}

export default NewAdAccountPage