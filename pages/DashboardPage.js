import { View, Text, ImageBackground } from 'react-native';
import Dashboard from '../components/Dashboard';
import BottomNav from '../components/BottomNav';

const DashboardPage = () => {
  return (
    <View style={[{flex: 1}, {paddingHorizontal: 30}, {paddingTop: 40}]}>
      <Dashboard />
    </View>
  )
}

export default DashboardPage