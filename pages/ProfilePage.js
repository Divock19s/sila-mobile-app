import { View, Text } from 'react-native';
import ProfileTopSection from '../components/ProfileTopSection';
import ProfileOptions from '../components/ProfileOptions';
import BottomNav from '../components/BottomNav';

const ProfilePage = () => {
  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        <ProfileTopSection />
        <ProfileOptions />
        <BottomNav />
    </View>
  )
}

export default ProfilePage;