import { View, Text, ImageBackground } from 'react-native';
import Dashboard from '../components/Dashboard';
import BottomNav from '../components/BottomNav';

const DashboardPage = () => {
  return (
    <ImageBackground style={[{flex: 1}, {paddingHorizontal: 30}]} source={require('../assets/images&logos/376d26a7bae7aa92b9a9d2a8eb6d70c9.jpg')}>
      <Dashboard />
      <BottomNav />
    </ImageBackground>
  )
}

export default DashboardPage