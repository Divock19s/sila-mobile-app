import { View, Dimensions, Pressable, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const BottomNav = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{position: 'absolute'}, {bottom: 20}, {left: 20}, {right: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {justifyContent: 'space-between'}, {backgroundColor: '#7538D4'}, {borderRadius: 100}]}>
        <Pressable onPress={() => navigation.navigate('Home')} style={[{backgroundColor: '#fff'}, {padding: 13}, {borderRadius: 100 / 2}]}>
            <AntDesign name="home" size={27} color="#7538D4" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ComingSoon')}>
            <Entypo name="code" size={27} color="#fff" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('MediaBuying')}>
            <MaterialIcons name="movie-filter" size={27} color="#fff" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Dashboard')}>
            <AntDesign name="barschart" size={27} color="#fff" />
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Services')}>
            <Entypo name="dots-three-horizontal" size={27} color="#fff" />
        </Pressable>
    </View>
  )
};

export default BottomNav;