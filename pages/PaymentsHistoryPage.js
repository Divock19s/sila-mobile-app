import { View, Text } from 'react-native';
import PaymentHistory from '../components/PaymentHistory';
import BottomNav from '../components/BottomNav';

const PaymentsHistoryPage = () => {
  return (
    <View style={[{flex: 1}]}>
      <PaymentHistory />
      <BottomNav />
    </View>
  )
};

export default PaymentsHistoryPage;