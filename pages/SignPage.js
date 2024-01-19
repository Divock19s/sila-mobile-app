import { View, Text, ImageBackground } from 'react-native';
import Sign from '../components/Sign';

const SignPage = () => {
  return (
    <ImageBackground source={require('../assets/images&logos/background-gradient-lights.jpg')} style={[{flex: 1}]}>
      <Sign />
    </ImageBackground>
  )
}

export default SignPage;