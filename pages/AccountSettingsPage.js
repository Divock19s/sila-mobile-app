import { View, Text, Image, Pressable, TextInput, ScrollView, Alert, ActivityIndicator, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';

const AccountSettingsPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [changePhoneNumber, setChangePhoneNumber] = useState(false);
    const [changeUserName, setChangeUserName] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [deleteAccount, setDeleteAccount] = useState(false);

    const [userInfo, setUserInfo] = useState(null);

    const [phoneNumberInput, setNumberInput] = useState(null);
    const [phoneLoading, setPhoneLoading] = useState(false);

    const [userNameInput, setUserNameInput] = useState(null);
    const [userNameLoading, setUserNameLoading] = useState(false);

    const [currentPasswordInput, setCurrentPasswordInput] = useState(null);
    const [newPasswordInput, setNewPasswordInput] = useState(null);
    const [passwordLoading, setPasswordLoading] = useState(false);

    const [deleteAccountLoading, setDeleteAccountLoading] = useState(false);

    useEffect(() => {
        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('userInfo');
                setUserInfo(JSON.parse(response));
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();
    }, []);

    const changePhoto = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*'
                });

                if (response.canceled) {
                    Alert.alert('No photo was selected');
                } else {
                    if (userInfo !== null) {
                        const formData = new FormData();
                        const file = {
                            uri: response.assets[0].uri,
                            type: response.assets[0].mimeType,
                            name: response.assets[0].name
                        };
                        formData.append('profilePhoto', file);

                        const changePhotoApi = async () => {
                            try {
                                const response = await fetch(`https://sila-b.onrender.com/users/changeProfilePhoto/${userInfo._id}`, {
                                    method: 'PATCH',
                                    body: formData
                                });

                                const data = await response.json();

                                const asyncStorage = async () => {
                                    try {
                                        await AsyncStorage.setItem('userInfo', JSON.stringify(data.update));
                                        Alert.alert('Photo changed successfully!');
                                    } catch (err) {
                                        console.error(err);
                                    }
                                };

                                asyncStorage();
                            } catch (err) {
                                console.error(err);
                            }
                        };

                        changePhotoApi();
                    }
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick()
    };

    const changeNumber = () => {
        setPhoneLoading(true);

        if (userInfo !== null && phoneNumberInput !== null) {
            const changeNumberApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/phone/${userInfo._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            phoneNumber: phoneNumberInput
                        })
                    });

                    const data = await response.json();
                    setPhoneLoading(false);

                    const asyncStorage = async () => {
                        try {
                            await AsyncStorage.setItem('userInfo', JSON.stringify(data.update));
                            setChangePhoneNumber(false);
                            Alert.alert('Phone number updated successfully!');
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    asyncStorage();
                } catch (err) {
                    console.error(err);
                }
            };

            changeNumberApi();
        } else {
            setPhoneLoading(false);
            Alert.alert("Number field is empty");
        }
    };

    const changeName = () => {
        setUserNameLoading(true);

        if (userInfo !== null && userNameInput !== null) {
            const changeNameApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/userName/${userInfo._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userName: userNameInput
                        })
                    });

                    const data = await response.json();
                    setUserNameLoading(false);

                    const asyncStorage = async () => {
                        try {
                            await AsyncStorage.setItem('userInfo', JSON.stringify(data.update));
                            setChangeUserName(false);
                            Alert.alert('User name updated successfully!');
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    asyncStorage();
                } catch (err) {
                    console.error(err);
                }
            };

            changeNameApi();
        } else {
            setUserNameLoading(false);
            Alert.alert('User name field is empty');
        }
    };

    const handleChangePassword = () => {
        setPasswordLoading(true);

        if (userInfo !== null && currentPasswordInput !== null &&
        newPasswordInput !== null) {
            const currentPasswordCheckApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/users/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: userInfo.email,
                            password: currentPasswordInput
                        })
                    });

                    const data = await response.json();

                    if (data.userInfo) {
                        const changePasswordApi = async () => {
                            try {
                                const response = await fetch(`https://sila-b.onrender.com/users/changePassword/${userInfo._id}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        password: newPasswordInput
                                    })
                                });

                                const data = await response.json();
                                setPasswordLoading(false);

                                const asyncStorage = async () => {
                                    try {
                                        await AsyncStorage.setItem('userInfo', JSON.stringify(data.update));
                                        Alert.alert('Password changed successfully!');
                                        setChangePassword(false);
                                    } catch (err) {
                                        console.error(err);
                                    }
                                };

                                asyncStorage();
                            } catch (err) {
                                console.error(err);
                            }
                        };

                        changePasswordApi();
                    } else {
                        Alert.alert('Current password is wrong!');
                        setPasswordLoading(false);
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            currentPasswordCheckApi();
        } else {
            Alert.alert('Please fill-in all fields!');
            setPasswordLoading(false);
        }
    };

    const handleDeleteAccount = () => {
        setDeleteAccountLoading(true);

        if (userInfo !== null) {
            const deleteAccountApi = async () => {
                try {
                    const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`, {
                        method: 'DELETE'
                    });

                    const data = await response.json();
                    setDeleteAccountLoading(false);
                    Alert.alert('Account deleted successfully!');

                    const asyncStorage = async () => {
                        try {
                            await AsyncStorage.removeItem('userInfo');
                            setDeleteAccount(false);
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Sign' }]
                            });
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    asyncStorage();
                } catch (err) {
                    console.error(err);
                }
            };

            deleteAccountApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{height: height / 3}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}]}>
            {
                userInfo !== null && (
                    <Image style={[{height: 100}, {width: 100}, {borderRadius: 100 / 2}]} source={{uri: userInfo.profilePhoto}} />
                )
            }
            <Pressable onPress={changePhoto} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                <Text style={[]}>Change profile photo</Text>
                <Feather name="edit" size={24} color="black" />
            </Pressable>
        </View>

        <View style={[{padding: 30}, {gap: 40}, {height: height / 2}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[{gap: 10}, {marginBottom: 40}]}>
                    <Text style={[{fontSize: 17}]}>Email:</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: 'lightgray'}, {padding: 10}, {borderRadius: 30}]}>
                        {
                            userInfo !== null && (
                                <Text style={[]}>{userInfo.email}</Text>
                            )
                        }
                        <MaterialIcons name="email" size={24} color="black" />
                    </View>
                </View>

                <View style={[{gap: 10}, {marginBottom: 40}]}>
                    <Text style={[{fontSize: 17}]}>Phone number:</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: 'lightgray'}, {padding: 10}, {borderRadius: 30}]}>
                        {
                            userInfo !== null && (
                                <Text style={[]}>{userInfo.phoneNumber}</Text>
                            )
                        }
                        <Foundation name="telephone" size={24} color="black" />
                    </View>

                    <Pressable onPress={() => setChangePhoneNumber(true)} style={[{backgroundColor: '#7538D4'}, {alignSelf: 'flex-start'}, {padding: 10}, {borderRadius: 20}]}>
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Change phone number</Text>
                    </Pressable>

                    {
                        changePhoneNumber && (
                            <>
                                <TextInput onChangeText={(text) => setNumberInput(text)} style={[{borderBottomWidth: 3}, {borderColor: '#7538D4'}, , {fontSize: 16}]} keyboardType='numeric' placeholder='New phone number...' />
                                <View style={[{flexDirection: 'row'}, {gap: 20}, {justifyContent: 'flex-end'}]}>
                                    <Pressable onPress={() => setChangePhoneNumber(false)} style={[{borderWidth: 2}, {borderColor: '#7538D4'}, {borderRadius: 30}, {padding: 10}]}>
                                        <Text style={[, {fontSize: 16}]}>Cancel</Text>
                                    </Pressable>
                                    <Pressable onPress={changeNumber} style={[{borderRadius: 30}, {padding: 10}, {backgroundColor: '#7538D4'}]}>
                                        {
                                            phoneLoading ? (
                                                <ActivityIndicator color={'#fff'} />
                                            ) : (
                                                <Text style={[, {fontSize: 16}, {color: '#fff'}]}>Apply changes</Text>
                                            )
                                        }
                                    </Pressable>
                                </View>
                            </>
                        )
                    }
                </View>

                <View style={[{gap: 10}, {marginBottom: 40}]}>
                    <Text style={[{fontSize: 17}]}>User name:</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: 'lightgray'}, {padding: 10}, {borderRadius: 30}]}>
                        {
                            userInfo !== null && (
                                <Text style={[]}>{userInfo.userName}</Text>
                            )
                        }
                        <AntDesign name="user" size={24} color="black" />
                    </View>

                    <Pressable onPress={() => setChangeUserName(true)} style={[{backgroundColor: '#7538D4'}, {alignSelf: 'flex-start'}, {padding: 10}, {borderRadius: 20}]}>
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Change user name</Text>
                    </Pressable>

                    {
                        changeUserName && (
                            <>
                                <TextInput onChangeText={(text) => setUserNameInput(text)} style={[{borderBottomWidth: 3}, {borderColor: '#7538D4'}, , {fontSize: 16}]} placeholder='New user name...' />
                                <View style={[{flexDirection: 'row'}, {gap: 20}, {justifyContent: 'flex-end'}]}>
                                    <Pressable onPress={() => setChangeUserName(false)} style={[{borderWidth: 2}, {borderColor: '#7538D4'}, {borderRadius: 30}, {padding: 10}]}>
                                        <Text style={[, {fontSize: 16}]}>Cancel</Text>
                                    </Pressable>
                                    <Pressable onPress={changeName} style={[{borderRadius: 30}, {padding: 10}, {backgroundColor: '#7538D4'}]}>
                                        {
                                            userNameLoading ? (
                                                <ActivityIndicator color={'#fff'} />
                                            ) : (
                                                <Text style={[, {fontSize: 16}, {color: '#fff'}]}>Apply changes</Text>
                                            )
                                        }
                                    </Pressable>
                                </View>
                            </>
                        )
                    }
                </View>

                <View style={[{gap: 10}, {marginBottom: 40}]}>
                    <Text style={[{fontSize: 17}]}>Password:</Text>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {backgroundColor: 'lightgray'}, {padding: 10}, {borderRadius: 30}]}>
                        <Text style={[]}>*****************</Text>
                        <AntDesign name="key" size={24} color="black" />
                    </View>

                    <Pressable onPress={() => setChangePassword(true)} style={[{backgroundColor: '#7538D4'}, {alignSelf: 'flex-start'}, {padding: 10}, {borderRadius: 20}]}>
                        <Text style={[{fontSize: 16}, {color: '#fff'}]}>Change password</Text>
                    </Pressable>

                    {
                        changePassword && (
                            <>
                                <TextInput onChangeText={(text) => setCurrentPasswordInput(text)} style={[{borderBottomWidth: 3}, {borderColor: '#7538D4'}, , {fontSize: 16}]} placeholder='Current password...' />
                                <TextInput onChangeText={(text) => setNewPasswordInput(text)} style={[{borderBottomWidth: 3}, {borderColor: '#7538D4'}, , {fontSize: 16}]} placeholder='New password...' />
                                <View style={[{flexDirection: 'row'}, {gap: 20}, {justifyContent: 'flex-end'}]}>
                                    <Pressable onPress={() => setChangePassword(false)} style={[{borderWidth: 2}, {borderColor: '#7538D4'}, {borderRadius: 30}, {padding: 10}]}>
                                        <Text style={[, {fontSize: 16}]}>Cancel</Text>
                                    </Pressable>
                                    <Pressable onPress={handleChangePassword} style={[{borderRadius: 30}, {padding: 10}, {backgroundColor: '#7538D4'}]}>
                                        {
                                            passwordLoading ? (
                                                <ActivityIndicator color={'#fff'} />
                                            ) : (
                                                <Text style={[, {fontSize: 16}, {color: '#fff'}]}>Apply changes</Text>
                                            )
                                        }
                                    </Pressable>
                                </View>
                            </>
                        )
                    }
                </View>
                
                <Pressable onPress={() => setDeleteAccount(true)} style={[{alignItems: 'center'}, {gap: 10}, {backgroundColor: 'red'}, {padding: 10}, {borderRadius: 20}, {justifyContent: 'center'}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Text style={[, {color: '#fff'}, {fontSize: 16}]}>Delete account</Text>
                        <Feather name="trash" size={24} color="#fff" />
                    </View>

                    {
                        deleteAccount && (
                            <>
                                <Text style={[{fontSize: 16}, {color: '#fff'}]}>This is danger zone (do you really want to remove your account?)</Text>
                                <View style={[{flexDirection: 'row'}, {gap: 20}, {justifyContent: 'flex-end'}, {marginTop: 10}]}>
                                    <Pressable onPress={() => setDeleteAccount(false)} style={[{backgroundColor: '#fff'}, {borderRadius: 30}, {padding: 10}]}>
                                        <Text style={[, {fontSize: 16}]}>No</Text>
                                    </Pressable>
                                    <Pressable onPress={handleDeleteAccount} style={[{borderRadius: 30}, {padding: 10}, {backgroundColor: '#fff'}]}>
                                        {
                                            deleteAccountLoading ? (
                                                <ActivityIndicator color={'#000'} />
                                            ) : (
                                                <Text style={[, {fontSize: 16}]}>Yes delete!</Text>
                                            )
                                        }
                                    </Pressable>
                                </View>
                            </>
                        )
                    }
                </Pressable>
            </ScrollView>
        </View>

        <BottomNav />
    </View>
  )
}

export default AccountSettingsPage