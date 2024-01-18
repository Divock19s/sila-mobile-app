import { View, Text, Image, Pressable, Dimensions, TextInput, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Sign = () => {

    const { width, height } = Dimensions.get('screen');

    const [signWindow, setSignWindow] = useState('signUp');

    const underline = new Animated.Value(7);

    const greeting = new Animated.Value(400);

    const signAnimation = new Animated.Value(height);

    const switchToSignIn = () => {
        setSignWindow('signIn');
    };

    useEffect(() => {
        if (signWindow === 'signIn') {
            Animated.timing(underline, {
                toValue: -95,
                duration: 200,
                useNativeDriver: true
            }).start();

            Animated.timing(greeting, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();

            Animated.timing(signAnimation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(underline, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start();

            Animated.timing(greeting, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();

            Animated.timing(signAnimation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();
        }
    }, [signWindow]);

  return (
    <View style={[{flex: 1}]}>
      <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {paddingRight: 10}]}>
        <Image style={[{transform: [{scale: .5}]}]} source={require('../assets/images&logos/5f2e4560-d176-43d4-a8b7-731bb145cb40-e1698547045253.webp')} />
        
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
            <Pressable onPress={switchToSignIn} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 10}, {paddingHorizontal: 20}]}>
                <Text style={[{fontSize: 17}, {color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Sign In</Text>
            </Pressable>

            <Pressable onPress={() => setSignWindow('signUp')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 10}, {paddingHorizontal: 20}]}>
                <Text style={[{fontSize: 17}, {color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Sign Up</Text>
            </Pressable>

            <Animated.View style={[{height: 4}, {width: width / 5}, {backgroundColor: '#fff'}, {position: 'absolute'}, {right: 7}, {bottom: 5}, {borderRadius: 40}, {transform: [{translateX: underline}]}]} />
        </View>
      </View>

      {
        signWindow === 'signUp' ? (
            <Animated.View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}, {paddingLeft: 40}, {transform: [{translateY: greeting}]}]}>
                <AntDesign name="customerservice" size={35} color="#fff" />
                <View style={[{gap: 10}]}>
                    <Text style={[{color: '#fff'}, {fontSize: 25}, {fontFamily: 'Ubuntu-Medium'}]}>Hi, get on board!</Text>
                    <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Light'}]}>Sign up below to continue...</Text>
                </View>
            </Animated.View>
        ) : (
            <Animated.View style={[{marginTop: 100}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}, {paddingLeft: 40}, {transform: [{translateY: greeting}]}]}>
                <MaterialCommunityIcons name="google-assistant" size={45} color="#fff" />
                <View style={[{gap: 10}]}>
                    <Text style={[{color: '#fff'}, {fontSize: 25}, {fontFamily: 'Ubuntu-Medium'}]}>Hello, again!</Text>
                    <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Light'}]}>Feel free to sign in</Text>
                </View>
            </Animated.View>
        )
      }

      <Animated.View style={[{backgroundColor: '#fff'}, {height: signWindow === 'signUp' ? height / 1.5 : height / 2}, {width: '100%'}, {position: 'absolute'}, {bottom: 0}, {borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {padding: 50}, {gap: 40}, {elevation: 50}, {transform: [{translateY: signAnimation}]}]}>
        {
            signWindow === 'signUp' && (
                <>
                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Username:</Text>
                        <TextInput style={[{borderBottomWidth: 1}, {borderBottomColor: '#000'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Choose a name for your account...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Phone Number:</Text>
                        <TextInput style={[{borderBottomWidth: 1}, {borderBottomColor: '#000'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Type your phone number...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Email:</Text>
                        <TextInput style={[{borderBottomWidth: 1}, {borderBottomColor: '#000'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Type your email...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Password:</Text>
                        <TextInput style={[{borderBottomWidth: 1}, {borderBottomColor: '#000'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Choose a strong password...' />
                    </View>

                    <Pressable style={[{backgroundColor: '#000'}, {height: height / 15}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontSize: 20}, {fontFamily: 'Ubuntu-Bold'}]}>Sign Up</Text>
                    </Pressable>
                </>
            )
        }

        {
            signWindow === 'signIn' && (
                <>
                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Email:</Text>
                        <TextInput style={[{borderBottomWidth: 1}, {borderBottomColor: '#000'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Type your email...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Password:</Text>
                        <TextInput style={[{borderBottomWidth: 1}, {borderBottomColor: '#000'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Choose a strong password...' />
                    </View>

                    <Pressable style={[{backgroundColor: '#000'}, {height: height / 15}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        <Text style={[{color: '#fff'}, {fontSize: 20}, {fontFamily: 'Ubuntu-Bold'}]}>Sign In</Text>
                    </Pressable>
                </>
            )
        }
      </Animated.View>
    </View>
  )
};

export default Sign;