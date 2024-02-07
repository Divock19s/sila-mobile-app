import { View, Text, Dimensions, Image, ScrollView, Animated, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';

const MediaBuyingPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const slideWindow = new Animated.Value(height);
    const firstVid = new Animated.Value(height);
    const secondVid = new Animated.Value(height);
    const thirdVid = new Animated.Value(height);

    useEffect(() => {
        Animated.timing(slideWindow, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true
        }).start();

        Animated.timing(firstVid, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();

        Animated.timing(secondVid, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();

        Animated.timing(thirdVid, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start();
    }, []);

  return (
    <View style={[{flex: 1}, {backgroundColor: '#7538D4'}, {padding: 50}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
            <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
            <Text style={[{fontWeight: '800'}, {fontSize: 17}, {color: '#fff'}]}>Media Buying</Text>
        </View>

        <Text style={[{fontWeight: 100}, {marginTop: 20}, {color: '#fff'}, {fontSize: 25}]}>Welcome to our new service!</Text>

        <Animated.View style={[{height: height / 1.4}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {backgroundColor: '#fff'}, {borderTopLeftRadius: 40}, {borderTopRightRadius: 40}, {padding: 20}, {transform: [{translateY: slideWindow}]}]}>
            <ScrollView>
                <Animated.View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}, {justifyContent: 'center'}, {marginBottom: 20}, {transform: [{translateY: firstVid}]}]}>
                    <View style={[{height: height / 6}, {width: width / 2}, {overflow: 'hidden'}, {borderRadius: 30}]}>
                        <Video style={[{flex: 1}]} source={require('../assets/images&logos/mbVid.mp4')} useNativeControls resizeMode={ResizeMode.COVER} isLooping shouldPlay />
                    </View>
                    <Text style={[{width: width / 4}]}>Lorem ipsum dolor sit fjsijfeisjfosejfisefjisefjiosejfseiojfisjfiefhsfysegfyusegfyusgefesfyu</Text>
                </Animated.View>

                <Animated.View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}, {justifyContent: 'center'}, {marginBottom: 20}, {transform: [{translateY: secondVid}]}]}>
                    <Text style={[{width: width / 4}]}>Lorem ipsum dolor sit fjsijfeisjfosejfisefjisefjiosejfseiojfisjfiefhsfysegfyusegfyusgefesfyu</Text>
                    <View style={[{height: height / 6}, {width: width / 2}, {overflow: 'hidden'}, {borderRadius: 30}]}>
                        <Image resizeMode='cover' style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/images&logos/mb.jpg')} />
                    </View>
                </Animated.View>

                <Animated.View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}, {justifyContent: 'center'}, {marginBottom: 20}, {transform: [{translateY: thirdVid}]}]}>
                    <View style={[{height: height / 6}, {width: width / 2}, {overflow: 'hidden'}, {borderRadius: 30}]}>
                        <Video style={[{flex: 1}]} source={require('../assets/images&logos/mbVid.mp4')} useNativeControls resizeMode={ResizeMode.COVER} isLooping shouldPlay />
                    </View>
                    <Text style={[{width: width / 4}]}>Lorem ipsum dolor sit fjsijfeisjfosejfisefjisefjiosejfseiojfisjfiefhsfysegfyusegfyusgefesfyu</Text>
                </Animated.View>

                <View style={[{flexDirection: 'row'}, {marginTop: 20}, {alignItems: 'flex-start'}, {gap: 20}]}>
                    <SimpleLineIcons name="location-pin" size={24} color="black" />
                    <Text style={[{width: width / 1.5}]}>You can send your media whether it is photos or videos, from anywhere, anytime!</Text>
                </View>

                <Text style={[{marginTop: 30}, {textAlign: 'center'}]}>Our new media buying service offers you the ability to deliver us your photos or videos, and we can hire our proffesional group of designers and video editors to give you the best results that you anticipate</Text>

                <View style={[{marginTop: 30}]}>
                    <Pressable onPress={() => navigation.navigate('MBPacks')} style={[{backgroundColor: '#7538D4'}, {padding: 15}, {borderRadius: 10}, {alignItems: 'center'}, {justifyContent: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontSize: 15}, {fontWeight: 500}]}>Get Started</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Services')} style={[{borderWidth: 2}, {borderColor: '#7538D4'}, {padding: 15}, {borderRadius: 10}, {alignItems: 'center'}, {justifyContent: 'center'}, {marginTop: 20}]}>
                        <Text style={[{color: '#7538D4'}, {fontSize: 15}, {fontWeight: 500}]}>Discover other services</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </Animated.View>
    </View>
  )
};

export default MediaBuyingPage;