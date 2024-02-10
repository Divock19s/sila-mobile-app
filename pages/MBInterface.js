import { View, Text, Image, Dimensions, Pressable, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const MBInterface = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const [userInfo, setUserInfo] = useState(null);

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

  return (
    <View style={[{flex: 1}]}>
        <View style={[{height: height / 1.2}]}>
            <ScrollView>
                <View style={[{alignItems: 'center'}]}>
                    <Image source={require('../assets/images&logos/mbgif.gif')} style={[{height: 300}, {width: 300}]} />
                </View>

                <View style={[{alignItems: 'center'}, {paddingHorizontal: 20}, {gap: 20}]}>
                    {
                        userInfo !== null && (
                            <Image source={{uri: userInfo.profilePhoto}} style={[{height: 80}, {width: 80}, {borderRadius: 100 / 2}]} />
                        )
                    }
                    
                    {
                        userInfo !== null && (
                            <Text style={[{fontWeight: 600}]}>Hi there! {userInfo.userName}</Text>
                        )
                    }
                    <Text style={[{fontSize: 16}, {fontWeight: 300}]}>Discover our new service where we can edit your content as well as managing your Ads and sending you all the analytics every week with just $0.65</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {marginTop: 40}, {paddingHorizontal: 30}]}>
                    <Pressable onPress={() => navigation.navigate('Services')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {alignSelf: 'flex-end'}]}>
                        <AntDesign name="home" size={30} color="#fff" />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('MBPacks')} style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {alignSelf: 'flex-end'}]}>
                        <AntDesign name="plus" size={30} color="#fff" />
                    </Pressable>
                </View>
            </ScrollView>
        </View>

        <Pressable onPress={() => navigation.navigate('MyMedia')} style={[{position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {flexDirection: 'row'}, {alignItems: 'center'}, {padding: 20}, {borderTopRightRadius: 30}, {borderTopLeftRadius: 30}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#7538D4'}]}>
            <MaterialIcons name="movie-filter" size={24} color="#fff" />
            <Text style={[{fontWeight: 500}, {color: '#fff'}]}>My Media</Text>
        </Pressable>
    </View>
  )
};

export default MBInterface;