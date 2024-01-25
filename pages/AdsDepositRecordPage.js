import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AdsDepositRecord from '../components/AdsDepositRecord';
import BottomNav from '../components/BottomNav';

const AdsDepositRecordPage = () => {
  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
        <FontAwesome5 name="file-invoice-dollar" size={24} color="#fff" />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Ads Deposit Record</Text>
      </View>

      <AdsDepositRecord />
      <BottomNav />
    </View>
  )
}

export default AdsDepositRecordPage