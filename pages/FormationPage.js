import { View, Text, Alert, Pressable, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import FormationTab from '../components/FormationTab';
import { useTranslation } from 'react-i18next';
import data from '../Context';

const FormationPage = () => {

    const { setPressedFormation } = useContext(data);

    const navigation = useNavigation();

    const {width, height} = Dimensions.get('window');

    const {t} = useTranslation();

    const [userInfo, setUserInfo] = useState(null);
    const [userEurWallet, setUserEurWallet] = useState(null);

    const [apiData, setApiData] = useState([]);

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

    useEffect(() => {
        if (userInfo !== null) {
          const usersApi = async () => {
            try {
              const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
              const data = await response.json();
              setUserEurWallet(data.user.eurWallet);
            } catch (err) {
              console.error(err);
            }
          };
      
          usersApi();
        }
    }, [userInfo]);

    useEffect(() => {
        const getFormations = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/formation/getFormations');
                const data = await response.json();

                if (response.ok) {
                    setApiData(data.formations);
                };
            } catch (err) {
                console.error(err);
            }
        };

        getFormations();
    }, []);

    const goToVideos = (_id) => {
        const target = apiData.find((x) => x._id === _id);
        setPressedFormation(target);

        navigation.navigate('FormationVideos');
    };

  return (
    <View style={[{flex: 1}, {padding: 20}]}>
        <View style={[{height: height / 1.2}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <View>
                        {
                            userInfo !== null && (
                                <Text style={[{fontSize: 20}, {fontWeight: 300}]}>{t('hello')} {userInfo.userName}</Text>
                            )
                        }
                        <Text>{t('home-page-sub-greet')}</Text>
                    </View>
                    {
                        userInfo !== null && (
                            <Pressable onPress={() => navigation.navigate('Profile')}>
                                <Image source={{uri: userInfo.profilePhoto}} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}]} />
                            </Pressable>
                        )
                    }
                </View>

                <Pressable onPress={() => navigation.navigate('TopUp')} style={[{gap: 5}, {alignItems: 'center'}, {marginTop: 30}, {borderRadius: 16}, {backgroundColor: '#7538D4'}, {padding: 15}]}>
                    <AntDesign name="plus" size={24} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>{t('re-charge-your-wallet')}</Text>
                </Pressable>

                {/* Euro Wallet */}
                <View style={[{borderRadius: 20}, {overflow: 'hidden'}, {backgroundColor: '#7538D4'}, {padding: 25}, {gap: 25}, {marginTop: 30}]}>
                    <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
                        <Text style={[{fontSize: 20}, {color: '#fff'}]}>{t('account-balance')}</Text>
                        <Pressable onPress={() => Alert.alert(t('eur-wallet-tooltip'))}>
                            <Foundation name="info" size={35} color="#fff" />
                        </Pressable>
                    </View>  

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        {
                        userEurWallet !== null && (
                            <Text style={[{fontSize: 50}, {color: '#fff'}]}>{userEurWallet.toFixed(2)}</Text>
                        )
                        }
                        <FontAwesome name="euro" size={35} color="#fff" />
                    </View>
                </View>
                {/* //////// */}

                <FlatList data={apiData} keyExtractor={item => item._id} renderItem={({item}) => (
                    <View style={[{backgroundColor: '#7538D4'}, {marginTop: 30}, {padding: 20}, {borderRadius: 30}, {gap: 30}]}>
                        <View style={[{flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {flexWrap: 'wrap'}, {gap: 20}]}>
                            <Image style={[{height: 70}, {width: 70}]} source={{uri: item.photo}} />
                            <Text style={[{color: '#fff'}, {fontSize: 16}, {fontWeight: 300}]}>{item.name}</Text>
                            <View style={[{flexDirection: 'row'}, {gap: 5}]}>
                                <FontAwesome name="euro" size={20} color="#fff" />
                                <Text style={[{color: '#fff'}, {fontSize: 40}]}>{item.price}</Text>
                            </View>
                        </View>

                        <Pressable onPress={() => goToVideos(item._id)} style={[{backgroundColor: '#fff'}, {padding: 20}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                            <Text style={[{fontWeight: 500}, {color: '#7538D4'}]}>{item.status}</Text>
                        </Pressable>
                    </View>
                )} />
            </ScrollView>
        </View>

        <FormationTab />
    </View>
  )
}

export default FormationPage