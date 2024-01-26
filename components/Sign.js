import { View, Text, Image, Pressable, Dimensions, TextInput, Animated, Alert, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Sign = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('screen');

    const [signWindow, setSignWindow] = useState('signUp');

    const underline = new Animated.Value(7);

    const greeting = new Animated.Value(400);

    const signAnimation = new Animated.Value(height);

    const [userName, setUserName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [emailSignUp, setEmailSignUp] = useState(null);
    const [passwordSignUp, setPasswordSignUp] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const [emailSignIn, setEmailSignIn] = useState(null);
    const [passwordSignIn, setPasswordSignIn] = useState(null);

    const [signUpLoading, setSignUpLoading] = useState(false);
    const [signInLoading, setSignInLoading] = useState(false);

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

    const pickProfilePhoto = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*'
                });

                if (response.canceled) {
                    Alert.alert('No photo was selected!');
                } else {
                    setProfilePhoto(response.assets[0]);
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick();
    };


    //Signing up:
    const signUp = () => {
        setSignUpLoading(true);

        const formData = new FormData();
        
        if (userName !== null) {
            formData.append('userName', userName);
        }

        if (phoneNumber !== null) {
            formData.append('phoneNumber', phoneNumber);
        }

        if (emailSignUp !== null) {
            formData.append('email', emailSignUp);
        }

        if (passwordSignUp !== null) {
            formData.append('password', passwordSignUp);
        }

        if (profilePhoto !== null) {
            const file = {
                uri: profilePhoto.uri,
                type: profilePhoto.mimeType,
                name: profilePhoto.name
            };

            formData.append('profilePhoto', file);
        }

        const createUserApi = async () => {
            try {
                const response = await fetch('http://192.168.1.3:4000/users', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                setSignUpLoading(false);

                const asyncStorage = async () => {
                    try {
                        await AsyncStorage.setItem('userInfo', JSON.stringify(data.user));
                    } catch (err) {
                        console.error(err);
                    }
                };

                asyncStorage();

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }]
                });
            } catch (err) {
                console.error(err);
            }
        };

        if (userName === null) {
            Alert.alert('Please enter a user name!');
        } else if (emailSignUp === null) {
            Alert.alert('Please provide your email!');
        } else if (passwordSignUp === null) {
            Alert.alert('Please enter a strong password!');
        } else {
            createUserApi();
        }
    };
    //


    //Signing in:
    const signIn = () => {
        setSignInLoading(true);

        if (emailSignIn !== null && passwordSignIn !== null) {
            const signApi = async () => {
                try {
                    const response = await fetch('http://192.168.1.3:4000/users/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: emailSignIn,
                            password: passwordSignIn
                        })
                    });

                    const data = await response.json();
                    setSignInLoading(false);

                    if (data.userInfo) {
                        const asyncStorage = async () => {
                            try {
                                await AsyncStorage.setItem('userInfo', JSON.stringify(data.userInfo));
                            } catch (err) {
                                console.error(err);
                            }
                        };

                        asyncStorage();

                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }]
                        });
                    } else {
                        Alert.alert('Oops, please re-check your credentials!');
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            signApi();
        } else {
            setSignInLoading(false);
            Alert.alert('Please fill-in both email and password!');
        }
    };
    //

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

      <Animated.View style={[{backgroundColor: '#fff'}, {height: signWindow === 'signUp' ? height / 1.4 : height / 2}, {width: '100%'}, {position: 'absolute'}, {bottom: 0}, {borderTopLeftRadius: 50}, {borderTopRightRadius: 50}, {padding: 50}, {gap: 40}, {elevation: 50}, {transform: [{translateY: signAnimation}]}]}>
        {
            signWindow === 'signUp' && (
                <>
                    <View style={[{gap: 10}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 5}]}>
                            <Text style={[{fontSize: 20}, {color: 'red'}]}>*</Text>
                            <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Username:</Text>
                        </View>
                        <TextInput onChangeText={(text) => setUserName(text)} style={[{borderBottomWidth: 1}, {borderBottomColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Choose a name for your account...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 5}]}>
                            <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Phone number:</Text>
                        </View>
                        <TextInput onChangeText={(text) => setPhoneNumber(text)} style={[{borderBottomWidth: 1}, {borderBottomColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Type your phone number...' keyboardType='numeric' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 5}]}>
                            <Text style={[{fontSize: 20}, {color: 'red'}]}>*</Text>
                            <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Email:</Text>
                        </View>
                        <TextInput onChangeText={(text) => setEmailSignUp(text)} style={[{borderBottomWidth: 1}, {borderBottomColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Type your email...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 5}]}>
                            <Text style={[{fontSize: 20}, {color: 'red'}]}>*</Text>
                            <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Password:</Text>
                        </View>
                        <TextInput onChangeText={(text) => setPasswordSignUp(text)} style={[{borderBottomWidth: 1}, {borderBottomColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Choose a strong password...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Profile photo:</Text>
                        <Pressable onPress={pickProfilePhoto} style={[{justifyContent: 'center'}, {alignItems: 'center'}]}>
                            <AntDesign name="plus" size={40} color="black" />
                        </Pressable>
                    </View>

                    <Pressable onPress={signUp} style={[{backgroundColor: 'rgb(136,58,209)'}, {height: height / 15}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        {
                            signUpLoading ? (
                                <ActivityIndicator color={'#fff'} size={'large'} />
                            ) : (
                                <Text style={[{color: '#fff'}, {fontSize: 20}, {fontFamily: 'Ubuntu-Bold'}]}>Sign Up</Text>
                            )
                        }
                    </Pressable>
                </>
            )
        }

        {
            signWindow === 'signIn' && (
                <>
                    <View style={[{gap: 10}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 5}]}>
                            <Text style={[{fontSize: 20}, {color: 'red'}]}>*</Text>
                            <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Email:</Text>
                        </View>
                        <TextInput onChangeText={(text) => setEmailSignIn(text)} style={[{borderBottomWidth: 1}, {borderBottomColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Type your email...' />
                    </View>

                    <View style={[{gap: 10}]}>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 5}]}>
                            <Text style={[{fontSize: 20}, {color: 'red'}]}>*</Text>
                            <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Password:</Text>
                        </View>
                        <TextInput onChangeText={(text) => setPasswordSignIn(text)} style={[{borderBottomWidth: 1}, {borderBottomColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}]} placeholder='Choose a strong password...' />
                    </View>

                    <Pressable onPress={signIn} style={[{backgroundColor: 'rgb(136,58,209)'}, {height: height / 15}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                        {
                            signInLoading ? (
                                <ActivityIndicator color={'#fff'} size={'large'} />
                            ) : (
                                <Text style={[{color: '#fff'}, {fontSize: 20}, {fontFamily: 'Ubuntu-Bold'}]}>Sign In</Text>
                            )
                        }
                    </Pressable>
                </>
            )
        }
      </Animated.View>
    </View>
  )
};

export default Sign;