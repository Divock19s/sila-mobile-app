import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons } from '@expo/vector-icons';

const SupportPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                setUserInfo(JSON.parse(response));
            } catch (err) {
                console.error(err);
            }
        };

        getUserInfo();
    }, []);

    const pickImage = () => {
        const pick = async () => {
            try {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: false,
                    aspect: [4, 3],
                    quality: 1,
                });

                if (!result.canceled) {
                    setImage(result.assets[0].uri);
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick();
    };

  return (
    <View style={[{flex: 1}]}>
        {/* Header */}
        <View style={[{borderBottomWidth: 2}, {padding: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {borderColor: 'lightgrey'}]}>
            <TouchableOpacity onPress={() => navigation.navigate('BottomNav')} style={[{height: 50}, {width: 50}, {backgroundColor: 'rgba(0, 0, 0, .1)'}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}]}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <Text style={[{fontSize: 16}, {fontWeight: 700}]}>UserName</Text>
            
            <View style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}, {overflow: 'hidden'}]}>
                <Image style={[{flex: 1}]} source={{uri: userInfo.profilePhoto}} />
            </View>
        </View>
        {/* ////// */}



        {/* Messages */}
        <View style={[{flex: 1}, {padding: 10}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Text Message */}
                <View style={[{backgroundColor: '#7538D4'}, {padding: 15}, {borderRadius: 50}, {alignSelf: 'flex-start'}, {flexDirection: 'row'}, {gap: 20}, {marginBottom: 30}]}>
                    <Text style={[{color: '#fff'}, {maxWidth: width / 2}]}>This is a message test</Text>
                    <View style={[{alignSelf: 'flex-end'}, {marginBottom: -8}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                        <Text style={[{color: 'lightgrey'}]}>16:21</Text>
                        <Ionicons name="checkmark-done" size={20} color="#fff" />
                    </View>
                </View>
                {/* //////////// */}

                {/* Photo Message */}
                <TouchableOpacity style={[{height: height / 4}, {width: width / 3}, {borderRadius: 20}, {overflow: 'hidden'}, {borderWidth: 4}, {borderColor: '#7538D4'}, {marginBottom: 30}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/images&logos/1.jpg')} />
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}, {backgroundColor: '#7538D4'}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {padding: 10}]}>
                        <Text style={[{color: 'lightgrey'}]}>16:21</Text>
                        <Ionicons name="checkmark-done" size={20} color="#fff" />
                    </View>
                </TouchableOpacity>
                {/* ///////////// */}

                {/* Text Message Received */}
                <View style={[{backgroundColor: '#000'}, {padding: 15}, {borderRadius: 50}, {alignSelf: 'flex-end'}, {flexDirection: 'row'}, {gap: 20}, {marginBottom: 30}]}>
                    <Text style={[{color: '#fff'}, {maxWidth: width / 2}]}>This is a message test</Text>
                    <View style={[{alignSelf: 'flex-end'}, {marginBottom: -8}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                        <Text style={[{color: 'lightgrey'}]}>16:21</Text>
                        <Ionicons name="checkmark-done" size={20} color="#fff" />
                    </View>
                </View>
                {/* //////////// */}

                {/* Photo Message Received */}
                <TouchableOpacity style={[{height: height / 4}, {width: width / 3}, {borderRadius: 20}, {overflow: 'hidden'}, {borderWidth: 4}, {borderColor: '#000'}, {marginBottom: 30}, {alignSelf: 'flex-end'}]}>
                    <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/images&logos/1.jpg')} />
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}, {backgroundColor: '#000'}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {padding: 10}]}>
                        <Text style={[{color: 'lightgrey'}]}>16:21</Text>
                        <Ionicons name="checkmark-done" size={20} color="#fff" />
                    </View>
                </TouchableOpacity>
                {/* ///////////// */}
            </ScrollView>
        </View>
        {/* //////// */}

        {/* Message Input */}
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {padding: 10}]}>
            {
                image !== '' ? (
                    <>
                        <View style={[{height: height / 5}, {width: width / 3}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                            <Image style={[{height: '100%'}, {width: '100%'}]} source={{uri: image}} />
                        </View>

                        <TouchableOpacity style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 30}, {padding: 20}, {borderRadius: 50}, {backgroundColor: '#7538D4'}]}>
                            <Text style={[{color: '#fff'}, {fontWeight: 500}]}>Send photo</Text>
                            <Feather name="send" size={24} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setImage('')} style={[{height: 50}, {width: 50}, {backgroundColor: 'red'}, {borderRadius: 100 / 2}, {position: 'absolute'}, {top: 5}, {right: 5}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                            <EvilIcons name="close" size={24} color="#fff" />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={pickImage} style={[{height: 50}, {width: 50}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}]}>
                            <MaterialIcons name="insert-photo" size={24} color="#fff" />
                        </TouchableOpacity>

                        <TextInput style={[{borderWidth: 1}, {flex: 1}, {height: height / 17}, {borderRadius: 50}, {paddingHorizontal: 30}, {borderColor: 'lightgrey'}]} placeholder='Message...' />

                        <TouchableOpacity style={[{height: 50}, {width: 50}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {borderRadius: 100 / 2}]}>
                            <Feather name="send" size={24} color="#fff" />
                        </TouchableOpacity>
                    </>
                )
            }
        </View>
        {/* ///////////// */}
    </View>
  )
};

export default SupportPage;