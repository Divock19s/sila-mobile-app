import { View, Text, ImageBackground } from 'react-native';
import Dashboard from '../components/Dashboard';
import BottomNav from '../components/BottomNav';

const DashboardPage = () => {
  return (
    <ImageBackground style={[{flex: 1}, {paddingHorizontal: 30}]} source={require('../assets/images&logos/background-gradient-lights.jpg')}>
      <Dashboard />
      <BottomNav />
    </ImageBackground>
  )
}

export default DashboardPage