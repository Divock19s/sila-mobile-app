import { View, Text, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import RefundRecord from '../components/RefundRecord';
import BottomNav from '../components/BottomNav';

const RefundRecordPage = () => {

  const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <View style={[{height: height / 12}, {backgroundColor: '#7538D4'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
        <FontAwesome5 name="money-check-alt" size={24} color="#fff" />
        <Text style={[{color: '#fff'}, {fontSize: 17}]}>Refund Record</Text>
      </View>

      <RefundRecord />
      <BottomNav />
    </View>
  )
}

export default RefundRecordPage