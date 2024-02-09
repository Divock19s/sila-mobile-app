import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Animated, Dimensions, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const MyLandingPagesPage = () => {

    const { width, height } = Dimensions.get('window');

    const value = new Animated.Value(height);

    const [hideWindow, setHideWindow] = useState(false);

    useEffect(() => {
        Animated.timing(value, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);

  return (
    <View style={[{flex: 1}, {backgroundColor: '#7538D4'}]}>
        <View style={[{backgroundColor: '#fff'}, {padding: 25}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 50}, {flexDirection: 'row'}, {gap: 20}]}>
            <MaterialIcons name="web" size={27} color="black" />
            <Text>My landing pages</Text>
        </View>

        <View style={[{marginTop: 20}, {padding: 20}, {flex: 1}]}>
            <ScrollView>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: 'rgba(255, 255, 255, .5)'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 30}]}>
                    <Text style={[{fontWeight: 300}, {color: '#fff'}, {fontSize: 16}]}>Mockuppage-fake.com</Text>
                    <Pressable style={[{borderLeftWidth: 2}, {paddingHorizontal: 15}, {borderColor: '#fff'}]}>
                        <Feather name="copy" size={27} color="#fff" />
                    </Pressable>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: 'rgba(255, 255, 255, .5)'}, {padding: 10}, {borderRadius: 20}, {marginBottom: 30}]}>
                    <Text style={[{fontWeight: 300}, {color: '#fff'}, {fontSize: 16}]}>Mockuppage-fake.com</Text>
                    <Pressable style={[{borderLeftWidth: 2}, {paddingHorizontal: 15}, {borderColor: '#fff'}]}>
                        <Feather name="copy" size={27} color="#fff" />
                    </Pressable>
                </View>
            </ScrollView>
        </View>

        {
            !hideWindow && (
                <Animated.View style={[{position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {backgroundColor: '#fff'}, {padding: 10}, {overflow: 'hidden'}, {gap: 20}, {transform: [{translateY: value}]}]}>
                    <View style={[{alignItems: 'center'}]}>
                        <Image source={require('../assets/images&logos/web.gif')} style={[{height: 150}, {width: 150}]} />
                    </View>
                    <Text style={[{textAlign: 'center'}]}>All of your landing pages will be shown here!</Text>
                    <Pressable onPress={() => setHideWindow(true)} style={[{backgroundColor: '#7538D4'}, {alignSelf: 'center'}, {padding: 20}, {paddingHorizontal: 100}, {borderRadius: 50}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 300}, {fontSize: 20}]}>Got it</Text>
                    </Pressable>
                </Animated.View>
            )
        }
    </View>
  )
};

export default MyLandingPagesPage;