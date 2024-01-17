import { View, Text } from 'react-native';
import Sign from '../components/Sign';

const SignPage = () => {
  return (
    <View style={[{flex: 1}, {backgroundColor: 'rgb(141,26,244)'}]}>
      <Sign />
    </View>
  )
}

export default SignPage;