import { View, Text, Pressable, Animated, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ShootingPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const value = new Animated.Value(0);

    const [section, setSection] = useState('shooting');
    const [userInfo, setUserInfo] = useState(null);

    const moveToCreative = () => {
        setSection('creative');
    };

    const moveToShooting = () => {
        setSection('shooting');
    };

    useEffect(() => {
        if (section === 'creative') {
            Animated.timing(value, {
                toValue: -width / 2,
                duration: 500,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(value, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();
        }
    }, [section]);

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

    const orderVid1 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'video',
                            shootingPlan: 'Shooting Petit Produit €39'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderVid2 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'video',
                            shootingPlan: 'Shooting Personne €69'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderVid3 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'video',
                            shootingPlan: 'Shooting Grand Produit €79'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderVid4 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'video',
                            shootingPlan: 'Shooting Magasin €199'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderVid5 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'video',
                            shootingPlan: 'Shooting Sociètè/Hotel €299'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderPhoto1 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'photo',
                            shootingPlan: 'Shooting Petit Produit €29'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderPhoto2 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'photo',
                            shootingPlan: 'Shooting Personne €59'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderPhoto3 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'photo',
                            shootingPlan: 'Shooting Grand Produit €69'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderPhoto4 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'photo',
                            shootingPlan: 'Shooting Magasin €99'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

    const orderPhoto5 = () => {
        if (userInfo !== null) {
            const shootingApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shooting', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: userInfo._id,
                            userName: userInfo.userName,
                            email: userInfo.email,
                            phoneNumber: userInfo.phoneNumber,
                            shootingType: 'photo',
                            shootingPlan: 'Shooting Sociètè/Hotel €179'
                        })
                    });

                    const data = await response.json();
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ShootingSuccess' }]
                    });
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingApi();
        }
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}]}>
            <Pressable onPress={moveToCreative} style={[{width: '50%'}, {padding: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}]}>
                <MaterialCommunityIcons name="movie-filter-outline" size={24} color="#7538D4" />
                <Text style={[{color: '#7538D4'}, {fontWeight: 500}, {fontSize: 15}]}>Creative</Text>
            </Pressable>

            <Pressable onPress={moveToShooting} style={[{width: '50%'}, {padding: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 20}]}>
                <Entypo name="video-camera" size={24} color="#7538D4" />
                <Text style={[{color: '#7538D4'}, {fontWeight: 500}, {fontSize: 15}]}>Shooting</Text>
            </Pressable>

            <Animated.View style={[{height: 5}, {width: '50%'}, {position: 'absolute'}, {bottom: 0}, {borderRadius: 50}, {backgroundColor: '#7538D4'}, {right: 0}, {transform: [{translateX: value}]}]} />
        </View>

        {
            section === 'shooting' && (
                <ScrollView style={[{padding: 20}]}>
                    <Pressable onPress={() => navigation.navigate('ShootingDashboard')} style={[{marginBottom: 20}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <FontAwesome name="square" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontWeight: 500}, {fontSize: 15}]}>My Shooting Dashboard</Text>
                    </Pressable>

                    <Text style={[{fontSize: 20}, {color: '#7538D4'}, {textAlign: 'center'}, {marginBottom: 20}]}>Dèplacement Grand Produit + €25</Text>

                    {/* Shooting videos' card */}
                    <View style={[{borderRadius: 20}, {backgroundColor: '#7538D4'}, {padding: 30}, {marginBottom: 30}]}>
                        <View style={[{alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>Shooting Videos</Text>
                            <Entypo name="dots-three-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>01 seul vidèo professionnelle</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 30}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Petit Produit</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€39</Text>
                            <Pressable onPress={orderVid1} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Personne</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€69</Text>
                            <Pressable onPress={orderVid2} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Grand Produit</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€79</Text>
                            <Pressable onPress={orderVid3} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Magasin</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€199</Text>
                            <Pressable onPress={orderVid4} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Sociètè/Hotel</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€299</Text>
                            <Pressable onPress={orderVid5} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* ///////////////////// */}

                    <Text style={[{fontSize: 20}, {color: '#7538D4'}, {textAlign: 'center'}, {marginBottom: 20}]}>Dèplacement Grand Produit Sur Alger + €25</Text>

                    {/* Shooting photo's card */}
                    <View style={[{borderRadius: 20}, {backgroundColor: '#7538D4'}, {padding: 30}, {marginBottom: 30}]}>
                        <View style={[{alignItems: 'center'}, {gap: 10}]}>
                            <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>Shooting Photos</Text>
                            <Entypo name="dots-three-vertical" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>5 Photos Par Produit</Text>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 30}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Petit Produit</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€29</Text>
                            <Pressable onPress={orderPhoto1} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Personne</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€59</Text>
                            <Pressable onPress={orderPhoto2} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Grand Produit</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€69</Text>
                            <Pressable onPress={orderPhoto3} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Magasin</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€99</Text>
                            <Pressable onPress={orderPhoto4} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>

                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>Shooting Sociètè/Hotel</Text>
                            <Text style={[{color: '#fff'}, {fontSize: 15}]}>€179</Text>
                            <Pressable onPress={orderPhoto5} style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 10}]}>
                                <Text>Order now</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* ///////////////////// */}
                </ScrollView>
            )
        }

        {
            section === 'creative' && (
                <ScrollView style={[{padding: 20}]}>
                    <Pressable style={[{marginBottom: 20}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}, {borderRadius: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <FontAwesome name="square" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontWeight: 500}, {fontSize: 15}]}>My Creative Dashboard</Text>
                    </Pressable>

                    {/* Pack Starter */}
                    <View style={[{borderRadius: 20}, {backgroundColor: '#7538D4'}, {padding: 30}, {marginBottom: 30}]}>
                        <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>Pack Starter</Text>
                        
                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>1 video Proffesional</Text>
                        </View>

                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>1 Script + 1 voix ALG</Text>
                        </View>

                        <Pressable style={[{marginTop: 30}, {alignSelf: 'flex-end'}, {padding: 20}, {backgroundColor: '#fff'}, {borderRadius: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Ionicons name="card-outline" size={24} color="black" />
                            <Text>Buy now</Text>
                            <Text>€29</Text>
                        </Pressable>
                    </View>
                    {/* //////////// */}

                    {/* Pack Medium */}
                    <View style={[{borderRadius: 20}, {backgroundColor: '#7538D4'}, {padding: 30}, {marginBottom: 30}]}>
                        <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>Pack Medium</Text>
                        
                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>3 video Proffesional</Text>
                        </View>

                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>3 Script + 3 voix ALG</Text>
                        </View>

                        <Pressable style={[{marginTop: 30}, {alignSelf: 'flex-end'}, {padding: 20}, {backgroundColor: '#fff'}, {borderRadius: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Ionicons name="card-outline" size={24} color="black" />
                            <Text>Buy now</Text>
                            <Text>€69</Text>
                        </Pressable>
                    </View>
                    {/* //////////// */}

                    {/* Pack Expert */}
                    <View style={[{borderRadius: 20}, {backgroundColor: '#7538D4'}, {padding: 30}, {marginBottom: 30}]}>
                        <Text style={[{color: '#fff'}, {fontSize: 20}, {fontWeight: 300}]}>Pack Expert</Text>
                        
                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>5 video Proffesional</Text>
                        </View>

                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>5 Script + 5 voix Off ALG</Text>
                        </View>

                        <View style={[{marginTop: 30}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                            <Ionicons name="checkmark-done" size={24} color="#fff" />
                            <Text style={[{fontSize: 15}, {color: '#fff'}, {fontWeight: 500}]}>1 Free Landing Page</Text>
                        </View>

                        <Pressable style={[{marginTop: 30}, {alignSelf: 'flex-end'}, {padding: 20}, {backgroundColor: '#fff'}, {borderRadius: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                            <Ionicons name="card-outline" size={24} color="black" />
                            <Text>Buy now</Text>
                            <Text>€129</Text>
                        </Pressable>
                    </View>
                    {/* //////////// */}
                </ScrollView>
            )
        }
    </View>
  )
};

export default ShootingPage;