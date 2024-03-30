import { View, Text, Pressable, TextInput, ScrollView, Alert, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Button, CheckBox } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';
import data from '../Context';
import * as DocumentPicker from 'expo-document-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const CreateVipAdPage = () => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');

  const {t} = useTranslation();

  const [newLicenseName, setNewLicenseName] = useState(null);

  const [website, setWebsite] = useState('');

  const [shopifyShop, setShopifyShop] = useState(false);
  const [shopifyScreenshot, setShopifyScreenshot] = useState(null);

  const [adAccountsNumber, setAdAccountsNumber] = useState(0);
  const [adAccountNames, setAdAccountNames] = useState([]);
  const [adAccountDeposits, setAdAccountDeposits] = useState([]);

  const [remark, setRemark] = useState(null);

  const [totalDepositOfADs, setTotalDepositOfADs] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [wallet, setWallet] = useState(null);

  const [payLoading, setPayLoading] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  const [firstApiDone, setFirstApiDone] = useState(false);
  const [secondApiDone, setSecondApiDone] = useState(false);
  const [thirdApiDone, setThirdApiDone] = useState(false);

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

  //picking shopify screenshot proof:
  const pickScreenshot = () => {
    const pick = async () => {
      try {
        const response = await DocumentPicker.getDocumentAsync({
          type: '*/*'
        });
  
        if (response.canceled) {
          Alert.alert('No screenshot was selected!');
        } else {
          setShopifyScreenshot(response.assets[0]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    pick();
  };
  //



  //rendering AD account sections according to picker number
  const renderADAccountSections = () => {
    const ADAccountSection = [];
    for (let i = 0; i < adAccountsNumber; i++) {
      ADAccountSection.push(
        <View style={[{borderWidth: 3}, {marginTop: 20}, {borderRadius: 20}, {borderColor: '#7538D4'}, {paddingHorizontal: 10}]}>
          <TextInput onChangeText={(text) => storeADaccountName(i, text)} style={[{borderBottomWidth: 3}, {borderColor: '#7538D4'}, {fontSize: 17}, {height: height / 15}]} placeholder={t('ad-account-name')} />
          <RNPickerSelect
            onValueChange={(value) => storeADaccountDeposit(i, value)}
            items={[
              { label: '200', value: 200 },
              { label: '250', value: 250 },
              { label: '300', value: 300 },
              { label: '450', value: 450 },
              { label: '500', value: 500 },
              { label: '850', value: 850 },
              { label: '1000', value: 1000 }
            ]}
          />
        </View>
      );
    }
    return ADAccountSection;
  };
  //



  //getting the AD account input values and storing them in ADaccountNames state, which is an array
  const storeADaccountName = (i, text) => {
    setAdAccountNames((prev) => {
      const newValue = [...prev];
      newValue[i] = text;
      return newValue;
    });
  };
  //


  //getting the AD account deposit values and storing them in ADaccountDeposit state, which is an array
  const storeADaccountDeposit = (i, text) => {
    setAdAccountDeposits((prev) => {
      const newValue = [...prev];
      newValue[i] = text;
      return newValue;
    });
  };
  //

  // deleting values from the array, after picker number changes
  useEffect(() => {
    setAdAccountDeposits((prev) => prev.slice(0, adAccountsNumber));
    setAdAccountNames((prev) => prev.slice(0, adAccountsNumber));
  }, [adAccountsNumber]);
  //

  useEffect(() => {
    //counting total deposit of ads
    const sum = adAccountDeposits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const commision1 = sum * 8 / 100;
    const commision3 = sum * 7 / 100;
    const commision5 = sum * 6 / 100;
    
    if (adAccountsNumber === 1) {
      setTotalDepositOfADs(sum + commision1);
    } else if (adAccountsNumber === 3) {
      setTotalDepositOfADs(sum + commision3);
    } else if (adAccountsNumber === 5) {
      setTotalDepositOfADs(sum + commision5);
    };
    //


    //counting total cost
    if (adAccountsNumber === 1 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 259);
    } else if (adAccountsNumber === 3 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 599);
    } else if (adAccountsNumber === 5 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 799);
    } else {
      setTotalCost(0);
    }
    //
  }, [adAccountsNumber, totalDepositOfADs, adAccountDeposits]);



  //Getting user wallet:
  useEffect(() => {
    if (userInfo !== null) {
      const usersApi = async () => {
        try {
          const response = await fetch(`https://sila-b.onrender.com/users/${userInfo._id}`);
          const data = await response.json();
          setWallet(data.user.wallet);
        } catch (err) {
          console.error(err);
        }
      };

      usersApi();
    }
  }, [userInfo]);
  //


  //Post form api:
  const postForm = () => {
    setPayLoading(true);

    const formData = new FormData();
    if (newLicenseName !== null) {
      formData.append('license', newLicenseName);
    };
    
    formData.append('website', website);

    formData.append('shopifyShop', shopifyShop);

    if (shopifyScreenshot !== null) {
      const file = {
        uri: shopifyScreenshot.uri,
        type: shopifyScreenshot.mimeType,
        name: shopifyScreenshot.name
      };

      formData.append('shopifyScreenshot', file);
    };

    formData.append('adNumber', adAccountsNumber);

    if (newLicenseName !== null) {
      adAccountNames.map((x, i) => {
        formData.append(`ads[${i}][adName]`, x);
        formData.append(`ads[${i}][licenseName]`, newLicenseName);
      });
    }

    adAccountDeposits.map((x, i) => {
      formData.append(`ads[${i}][adDeposit]`, x);
    });

    if (remark !== null) {
      formData.append('remark', remark);
    };

    formData.append('totalCost', totalCost);

    if (userInfo !== null) {
      formData.append('userID', userInfo._id);
      formData.append('email', userInfo.email);
      formData.append('phoneNumber', userInfo.phoneNumber);
    };

    const adApi = async () => {
      try {
        const response = await fetch('https://sila-b.onrender.com/adVip', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        setFirstApiDone(true);

        if (userInfo !== null) {
          const sendEmail = async () => {
            try {
              const response = await fetch('https://sila-b.onrender.com/sendMail/ad', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  userEmail: userInfo.email
                })
              });

              const data = await response.json();
            } catch (err) {
              console.error(err);
            }
          };
  
          sendEmail();
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (newLicenseName === null) {
      Alert.alert('Please write a license name');
      setPayLoading(false);
    } else if (website === '') {
      Alert.alert('Please write the website URL');
      setPayLoading(false);
    } else if (shopifyShop && shopifyScreenshot === null) {
      Alert.alert('Please provide the Shopify screenshot proof!');
      setPayLoading(false);
    } else if (adAccountsNumber === null || adAccountsNumber === 0) {
      Alert.alert('Please select Ad Account number!');
      setPayLoading(false);
    } else if (adAccountNames.length === 0) {
      Alert.alert('Please fill-in Ad Account name(s)!');
      setPayLoading(false);
    } else if (adAccountDeposits.length === 0) {
      Alert.alert('Please fill-in Ad Account deposit(s)!');
      setPayLoading(false);
    } else if (wallet !== null && wallet < totalCost) {
      Alert.alert('Your balance is not sufficient!');
      setPayLoading(false);
    } else {
      adApi();

      if (userInfo !== null && wallet !== null) {
        const patchWalletApi = async () => {
          try {
            const response = await fetch(`https://sila-b.onrender.com/users/wallet/${userInfo._id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                wallet: wallet - totalCost
              })
            });

            const data = await response.json();
            setSecondApiDone(true);
          } catch (err) {
            console.error(err);
          }
        };

        patchWalletApi();

        const paymentHistoryApi = async () => {
          try {
            const response = await fetch('https://sila-b.onrender.com/paymentHistory', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                userID: userInfo._id,
                type: 'Created a new license',
                amount: `-${totalCost}`,
                service: 'Ads'
              })
            });

            const data = await response.json();
            setThirdApiDone(true);
          } catch (err) {
            console.error(err);
          }
        };

        paymentHistoryApi();
      }
    }
  };
  //

  useEffect(() => {
    if (firstApiDone && secondApiDone && thirdApiDone) {
      setPayLoading(false);
      navigation.navigate('SuccessVip');
    }
  }, [firstApiDone, secondApiDone, thirdApiDone]);

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 40}, {paddingTop: 40}]}>
      <View style={[{height: height / 1.6}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[{backgroundColor: '#7538D4'}, {marginBottom: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {padding: 20}, {borderRadius: 10}]}>
            <Text style={[{color: '#fff'}]}>{t('unlimited-pages-domains')}</Text>
            <Ionicons name="checkmark-circle" size={24} color="#fff" />
          </View>

          <View>
            <Text style={[{fontSize: 20}]}>License:</Text>
            <TextInput onChangeText={(text) => setNewLicenseName(text)} style={[{borderBottomWidth: 3}, {borderColor: '#7538D4'}, {fontSize: 17}, {marginTop: 20}]} placeholder='Choose a name for this license' />
          </View>

          <View style={[{marginTop: 30}]}>
            <Text style={[{fontSize: 20}]}>{t('website')}</Text>
            <TextInput onChangeText={(text) => setWebsite(text)} style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: '#7538D4'}, {fontSize: 17}]} placeholder={t('website-placeholder')} />
          </View>

          <View style={[{marginTop: 30}]}>
            <Text style={[{fontSize: 16}]}>{t('shopify-shop-question')}</Text>
            <View style={[{flexDirection: 'row'}, {gap: 30}, {alignItems: 'center'}, {marginTop: 20}]}>
              <Pressable onPress={() => setShopifyShop(false)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                  {
                    !shopifyShop && (
                      <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                    )
                  }
                </View>
                <Text style={[{fontSize: 16}]}>{t('no')}</Text>
              </Pressable>

              <Pressable onPress={() => setShopifyShop(true)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                  {
                    shopifyShop && (
                      <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                    )
                  }
                </View>
                <Text style={[{fontSize: 16}]}>{t('yes')}</Text>
              </Pressable>
            </View>

            {
              shopifyShop && (
                <View style={[{marginTop: 20}, {flexDirection: 'row'}, {gap: 30}]}>
                  <Pressable onPress={pickScreenshot} style={[{borderWidth: 1}, {height: 100}, {width: 100}, {borderRadius: 20}, {justifyContent: 'center'}, {alignItems: 'center'}, {overflow: 'hidden'}]}>
                    {
                      shopifyScreenshot !== null ? (
                        <Image style={[{height: 100}, {width: 100}]} source={{uri: 'https://i.pinimg.com/originals/51/8c/fc/518cfc9e3de40195948e2a1f1108a0fe.gif'}} />
                      ) : (
                        <AntDesign name="plus" size={30} color="black" />
                      )
                    }
                  </Pressable>

                  <Pressable style={[{height: 100}, {width: 100}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                    <Image style={[{flex: 1}]} source={{uri: 'https://ads.hdedu.net/assets/shopify_example-33e120ba.jpg'}} />
                  </Pressable>
                </View>
              )
            }
          </View>

          <View style={[{marginTop: 30}]}>
            <Text style={[{fontSize: 20}]}>{t('ad-account-number')}</Text>
            <RNPickerSelect
              onValueChange={(value) => setAdAccountsNumber(value)}
              items={[
                { label: '1', value: 1 },
                { label: '3', value: 3 },
                { label: '5', value: 5 }
              ]}
            />

            { renderADAccountSections() }
          </View>

          <View style={[{marginTop: 30}]}>
            <Text style={[{fontSize: 16}]}>{t('remark-section')}</Text>
            <TextInput onChangeText={(text) => setRemark(text)} style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: '#7538D4'}, {fontSize: 17}]} placeholder={t('remark-placeholder')} />
          </View>
        </ScrollView>
      </View>

      {/* Counter */}

      <View style={[{position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {borderTopLeftRadius: 30}, {borderTopRightRadius: 30}, {backgroundColor: '#7538D4'}, {padding: 20}, {gap: 15}]}>
        <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
          <Text style={[{color: '#fff'}, {fontSize: 17}]}>Total deposit of ADs:</Text>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Text style={[{color: '#fff'}, {fontSize: 20}]}>{totalDepositOfADs}</Text>
            <Foundation name="dollar" size={30} color="#fff" />
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
          <Text style={[{color: '#fff'}, {fontSize: 17}]}>{t('total-cost')}</Text>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Text style={[{color: '#fff'}, {fontSize: 20}]}>{totalCost}</Text>
            <Foundation name="dollar" size={30} color="#fff" />
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Entypo name="wallet" size={24} color="#fff" />
            <Text style={[{color: '#fff'}, {fontSize: 17}]}>{t('wallet')}</Text>
          </View>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            {
              wallet !== null && (
                <Text style={[{color: '#fff'}, {fontSize: 20}]}>{wallet.toFixed(2)}</Text>
              )
            }
            <Foundation name="dollar" size={30} color="#fff" />
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
          <Pressable onPress={() => navigation.navigate('Ads')} style={[{paddingHorizontal: 30}, {paddingVertical: 10}, {borderRadius: 50}, {borderWidth: 4}, {borderColor: '#fff'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Text style={[{fontSize: 20}, {color: '#fff'}]}>{t('cancel')}</Text>
          </Pressable>

          <Pressable onPress={postForm} style={[{backgroundColor: '#fff'}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {paddingHorizontal: 30}, {paddingVertical: 10}]}>
            {
              payLoading ? (
                <ActivityIndicator color={'#7538D4'} size={'large'} />
              ) : (
                <Text style={[{fontSize: 20}, {color: '#7538D4'}]}>{t('pay')}</Text>
              )
            }
          </Pressable>
        </View>
      </View>
    </View>
  )
};

export default CreateVipAdPage;