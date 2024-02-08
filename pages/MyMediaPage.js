import { View, Text, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MyMediaPage = () => {

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {backgroundColor: '#fff'}]}>
        <View style={[{backgroundColor: '#7538D4'}, {padding: 20}, {marginHorizontal: 30}, {borderRadius: 50}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}]}>
            <Entypo name="video-camera" size={24} color="#fff" />
            <Text style={[{textAlign: 'center'}, {fontWeight: 300}, {fontSize: 20}, {color: '#fff'}]}>My raw media:</Text>
        </View>

        <View style={[{marginHorizontal: 30}, {padding: 10}, {height: height / 2.2}]}>
            <ScrollView>
                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Video style={[{flex: 1}]} source={require('../assets/images&logos/mbVid.mp4')} useNativeControls resizeMode={ResizeMode.COVER} />
                </View>

                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Image source={require('../assets/images&logos/mb.jpg')} style={[{height: '100%'}, {width: '100%'}]} />
                </View>
            </ScrollView>
        </View>

        <View style={[{backgroundColor: '#7538D4'}, {padding: 20}, {marginHorizontal: 30}, {borderRadius: 50}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}]}>
            <MaterialCommunityIcons name="movie-check" size={24} color="#fff" />
            <Text style={[{textAlign: 'center'}, {fontWeight: 300}, {fontSize: 20}, {color: '#fff'}]}>My purchased media:</Text>
        </View>

        <View style={[{marginHorizontal: 30}, {padding: 10}, {flex: 1}]}>
            <ScrollView>
                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Video style={[{flex: 1}]} source={require('../assets/images&logos/mbVid.mp4')} useNativeControls resizeMode={ResizeMode.COVER} />
                </View>

                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Image source={require('../assets/images&logos/mb.jpg')} style={[{height: '100%'}, {width: '100%'}]} />
                </View>
            </ScrollView>
        </View>
    </View>
  )
};

export default MyMediaPage;