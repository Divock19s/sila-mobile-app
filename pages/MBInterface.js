import { View, Text, Image, Dimensions, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MBInterface = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}]}>
        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/mbgif.gif')} style={[{height: 400}, {width: 400}]} />
        </View>

        <View style={[{alignItems: 'center'}, {paddingHorizontal: 20}, {gap: 20}]}>
            <Image source={require('../assets/images&logos/mb.jpg')} style={[{height: 80}, {width: 80}, {borderRadius: 100 / 2}]} />
            <Text style={[{fontWeight: 600}]}>Hi there! (username)</Text>
            <Text style={[{fontSize: 16}, {fontWeight: 300}]}>Discover our new service where we can edit your content as well as managing your Ads and sending you all the analytics every week with just $0.65</Text>
            <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
        </View>

        <Pressable onPress={() => navigation.navigate('MBPacks')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {marginTop: 30}, {alignSelf: 'flex-end'}, {marginRight: 30}, {elevation: 50}]}>
            <AntDesign name="plus" size={30} color="#fff" />
        </Pressable>

        <View style={[{position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderTopRightRadius: 30}, {borderTopLeftRadius: 30}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#7538D4'}]}>
            <Pressable style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: '#fff'}, {alignItems: 'center'}, {gap: 5}]}>
                <Ionicons name="stats-chart" size={24} color="black" />
                <Text style={[{fontWeight: 500}]}>My Ads</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('MyMedia')} style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: '#fff'}, {alignItems: 'center'}, {gap: 5}]}>
                <MaterialIcons name="movie-filter" size={24} color="black" />
                <Text style={[{fontWeight: 500}]}>My Media</Text>
            </Pressable>

            <Pressable style={[{padding: 10}, {borderRadius: 10}, {backgroundColor: '#fff'}, {alignItems: 'center'}, {gap: 5}]}>
                <MaterialIcons name="web" size={24} color="black" />
                <Text style={[{fontWeight: 500}]}>My Landing pages</Text>
            </Pressable>
        </View>
    </View>
  )
};

export default MBInterface;