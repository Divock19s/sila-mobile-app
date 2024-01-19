import { View, Text } from 'react-native';
import Transactions from '../components/Transactions';
import BottomNav from '../components/BottomNav';

const TransactionsPage = () => {
  return (
    <View style={[{flex: 1}]}>
      <Transactions />
      <BottomNav />
    </View>
  )
};

export default TransactionsPage;