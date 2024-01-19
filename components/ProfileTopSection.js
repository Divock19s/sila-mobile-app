import { View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileTopSection = () => {
  return (
    <View style={[{height: 200}, {borderRadius: 50}, {backgroundColor: 'rgb(136,58,209)'}, {gap: 25}, {padding: 20}, {elevation: 50}]}>
      <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
        <Ionicons name="time-sharp" size={24} color="#fff" />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Joined in: 2020.05.10</Text>
      </View>
      
      <View style={[{justifyContent: 'center'}, {alignItems: 'center'}, {gap: 5}]}>
        <Image style={[{height: 70}, {width: 70}, {borderRadius: 100 / 2}]} source={{uri: 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>User</Text>
      </View>
    </View>
  )
}

export default ProfileTopSection;