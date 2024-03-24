import { View, Text, Animated, Dimensions } from 'react-native';
import ProfileTopSection from '../components/ProfileTopSection';
import ProfileOptions from '../components/ProfileOptions';

const ProfilePage = () => {

  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        <ProfileTopSection />
        <ProfileOptions />
    </View>
  )
}

export default ProfilePage;