import { View, Text, Pressable, TextInput, ScrollView, Alert, Image, Dimensions, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Button, CheckBox } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OldLicensePage = () => {

  const navigation = useNavigation();

  const { width, height } = Dimensions.get('screen');

  const [oldLicense, setOldLicense] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageURLs, setPageURLs] = useState([]);
  const [phpRedLine, setPhpRedLine] = useState(false);
  const [checked, setChecked] = useState(false);

  const [domainNumber, setDomainNumber] = useState(0);
  const [isAPP, setIsAPP] = useState(false);
  const [appIDs, setAPPIDs] = useState([]);
  const [domainName, setDomainName] = useState([]);

  const [shopifyShop, setShopifyShop] = useState(false);
  const [shopifyScreenshot, setShopifyScreenshot] = useState(null);

  const [adAccountsNumber, setAdAccountsNumber] = useState(0);
  const [adAccountNames, setAdAccountNames] = useState([]);
  const [adAccountDeposits, setAdAccountDeposits] = useState([]);

  const [remark, setRemark] = useState(null);

  const [totalDepositOfADs, setTotalDepositOfADs] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const [payLoading, setPayLoading] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  const [licenseData, setLicenseData] = useState([]);

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
    const licenseApi = async () => {
        try {
            const response = await fetch('http://192.168.1.3:4000/ad');
            const data = await response.json();

            if (userInfo !== null) {
                const transformedData = data.ADs.map((x) => {
                    if (x.userID === userInfo._id) {
                        return({
                            label: x.license,
                            value: x
                        })
                    }
                });

                setLicenseData(transformedData);
            }
        } catch (err) {
            console.error(err);
        }
    };

    licenseApi();
  }, [userInfo]);

  //rendering url inputs according to picker number
  const renderPageURLInputs = () => {
    const textInputs = [];
    for (let i = 0; i < pageNumber; i++) {
      textInputs.push(
        <TextInput onChangeText={(text) => storeURLs(i, text)} style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: phpRedLine ? 'red' : 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}]} placeholder='URL...' />
      );
    }
    return textInputs;
  };
  //


  //getting the url input values and storing them in pageURL state, which is an array
  const storeURLs = (i, text) => {
    setPageURLs((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[i] = text;
      return newInputValues;
    });

    const regex = /\bphp\b/i;

    if(regex.test(text)) {
      setPhpRedLine(true);
    } else {
      setPhpRedLine(false);
    }
  };
  //


  // deleting values from the array, after picker number changes
  useEffect(() => {
    setPageURLs((prev) => prev.slice(0, pageNumber));
  }, [pageNumber]);
  //

  //copying admin to clipboard
  const copy = async () => {
    try {
      await Clipboard.setStringAsync('https://www.facebook.com/rina.magar.332/');
      Alert.alert('Copied successfully!');
    } catch (err) {
      console.error(err);
    };
  };
  //


  //rendering app id inputs according to picker number
  const renderAPPIDInput = () => {
    const appIDInput = [];
    for (let i = 0; i < domainNumber; i++) {
      appIDInput.push(
        <TextInput onChangeText={(text) => storeAPPIDs(i, text)} style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}]} placeholder='APP ID...' />
      );
    }
    return appIDInput;
  };
  //


  //getting the app id input values and storing them in APPID state, which is an array
  const storeAPPIDs = (i, text) => {
    setAPPIDs((prev) => {
      const newValue = [...prev];
      newValue[i] = text;
      return newValue;
    });
  };
  //

  //rendering domain name inputs according to picker number
  const renderDomainNameInput = () => {
    const DomainInput = [];
    for (let i = 0; i < domainNumber; i++) {
      DomainInput.push(
        <TextInput onChangeText={(text) => storeDomainName(i, text)} style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}]} placeholder='Enter domain name...' />
      );
    }
    return DomainInput;
  };
  //

  //getting the domain input values and storing them in domainName state, which is an array
  const storeDomainName = (i, text) => {
    setDomainName((prev) => {
      const newValue = [...prev];
      newValue[i] = text;
      return newValue;
    });
  };
  //


  // deleting values from the array, after picker number changes
  useEffect(() => {
    setAPPIDs((prev) => prev.slice(0, domainNumber));
    setDomainName((prev) => prev.slice(0, domainNumber));
  }, [domainNumber]);
  //


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
        <View style={[{borderWidth: 3}, {marginTop: 20}, {borderRadius: 20}, {borderColor: 'rgb(136,58,209)'}, {paddingHorizontal: 10}]}>
          <TextInput onChangeText={(text) => storeADaccountName(i, text)} style={[{borderBottomWidth: 3}, {borderColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}, {height: 50}]} placeholder='AD account name...' />
          <RNPickerSelect
            onValueChange={(value) => storeADaccountDeposit(i, value)}
            items={[
              { label: '100', value: 100 },
              { label: '150', value: 150 },
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

  useEffect(() => {
    //counting total deposit of ads
    const sum = adAccountDeposits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const commision = sum * 6 / 100;
    const totalDepositOfADs = sum + commision;
    
    setTotalDepositOfADs(totalDepositOfADs);
    //


    //counting total cost
    if (adAccountsNumber === 1 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 179);
    } else if (adAccountsNumber === 3 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 299);
    } else if (adAccountsNumber === 5 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 499);
    } else {
      setTotalCost(0);
    }
    //
  }, [adAccountDeposits]);


  // deleting values from the array, after picker number changes
  useEffect(() => {
    setAdAccountDeposits((prev) => prev.slice(0, adAccountsNumber));
  }, [adAccountsNumber]);
  //



  //Update form api:
  const updateForm = () => {
    if (oldLicense !== null) {
        if (pageNumber !== null && pageNumber > 0) {
            const updatePageNumber = async () => {
                try {
                    const response = await fetch(`http://192.168.1.3:4000/ad/${oldLicense._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            pageNumber: oldLicense.pageNumber + pageNumber
                        })
                    });

                    const data = await response.json();
                    console.log(data);
                } catch (err) {
                    console.error(err);
                }
            };

            updatePageNumber();
        };

        if (domainNumber !== null && domainNumber > 0) {
            const updateDomainNumber = async () => {
                try {
                    const response = await fetch(`http://192.168.1.3:4000/ad/${oldLicense._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            domainNumber: oldLicense.domainNumber + domainNumber
                        })
                    });

                    const data = await response.json();
                    console.log(data);
                } catch (err) {
                    console.error(err);
                }
            };

            updateDomainNumber();
        };

        if (adAccountsNumber !== null && adAccountsNumber > 0) {
            const updateAdAccountsNumber = async () => {
                try {
                    const response = await fetch(`http://192.168.1.3:4000/ad/${oldLicense._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            adNumber: oldLicense.adNumber + adAccountsNumber
                        })
                    });

                    const data = await response.json();
                    console.log(data);
                } catch (err) {
                    console.error(err);
                }
            };

            updateAdAccountsNumber();
        };

        if (pageURLs.length !== 0) {
            pageURLs.map((x) => {
                const pushPageURLs = async () => {
                    try {
                        const response = await fetch(`http://192.168.1.3:4000/ad/pageURL/${oldLicense._id}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                pageURL: x
                            })
                        });
    
                        const data = await response.json();
                        console.log(data);
                    } catch (err) {
                        console.error(err);
                    }
                };
    
                pushPageURLs();
            })
        }

        if (domainName.length !== 0) {
            domainName.map((x) => {
                const pushDomainName = async () => {
                    try {
                        const response = await fetch(`http://192.168.1.3:4000/ad/domain/${oldLicense._id}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                domainName: x
                            })
                        });
    
                        const data = await response.json();
                        console.log(data);
                    } catch (err) {
                        console.error(err);
                    }
                };
    
                pushDomainName();
            })
        }

        if (adAccountNames.length !== 0 && adAccountDeposits.length !== 0) {
            const names = adAccountNames.map((x) => x);
            const deposits = adAccountDeposits.map((x) => x);

            const pushAd = async () => {
                try {
                    const response = await fetch(`http://192.168.1.3:4000/ad/ads/${oldLicense._id}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            adName: names,
                            adDeposit: deposits
                        })
                    });

                    const data = await response.json();
                    console.log(data);
                } catch (err) {
                    console.error(err);
                }
            };

            pushAd();
        }
    }
  };
  //

  return (
    <View style={[{flex: 1}, {padding: 40}]}>
      <View style={[{height: 450}, {marginBottom: 30}]}>
        <ScrollView>
        <View>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>Select license</Text>
            <RNPickerSelect
                onValueChange={(value) => setOldLicense(value)}
                items={licenseData}
            />
        </View>

        <View style={[{marginTop: 30}]}>
          <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>Page number:</Text>
          <RNPickerSelect
            onValueChange={(value) => setPageNumber(value)}
            items={[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '3', value: 3 },
              { label: '4', value: 4 },
              { label: '5', value: 5 }
            ]}
          />

          { renderPageURLInputs() }
          
          {
            phpRedLine && (
              <Text style={[{color: 'red'}, {fontFamily: 'Ubuntu-Regular'}]}>This URL type is unaccepted, please add a URL that has a username. eg: 'https://facebook.com/Amine'</Text>
            )
          }
        </View>

        <View style={[{marginTop: 30}]}>
          <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>Domain Number:</Text>
          <RNPickerSelect
            onValueChange={(value) => setDomainNumber(value)}
            items={[
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '3', value: 3 },
              { label: '4', value: 4 },
              { label: '5', value: 5 }
            ]}
          />

          { renderDomainNameInput() }
        </View>

        <View style={[{marginTop: 30}]}>
          <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>AD accounts number:</Text>
          {
            oldLicense !== null && (
                <>
                    {
                        oldLicense.adNumber === 1 && (
                            <RNPickerSelect
                                onValueChange={(value) => setAdAccountsNumber(value)}
                                items={[
                                { label: '1', value: 1 },
                                { label: '3', value: 3 }
                                ]}
                            />
                        )
                    }

                    {
                        oldLicense.adNumber === 2 && (
                            <RNPickerSelect
                                onValueChange={(value) => setAdAccountsNumber(value)}
                                items={[
                                { label: '1', value: 1 },
                                { label: '3', value: 3 }
                                ]}
                            />
                        )
                    }

                    {
                        oldLicense.adNumber === 3 && (
                            <RNPickerSelect
                                onValueChange={(value) => setAdAccountsNumber(value)}
                                items={[
                                { label: '1', value: 1 }
                                ]}
                            />
                        )
                    }

                    {
                        oldLicense.adNumber === 4 && (
                            <RNPickerSelect
                                onValueChange={(value) => setAdAccountsNumber(value)}
                                items={[
                                { label: '1', value: 1 }
                                ]}
                            />
                        )
                    }
                </>
            )
          }

          { renderADAccountSections() }
        </View>
        </ScrollView>
      </View>

      {/* Counter */}

      <View style={[{height: 250}, {position: 'absolute'}, {bottom: 0}, {left: 0}, {right: 0}, {borderTopLeftRadius: 30}, {borderTopRightRadius: 30}, {backgroundColor: 'rgb(136,58,209)'}, {padding: 30}, {justifyContent: 'space-between'}]}>
        <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
          <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}]}>Total deposit of ADs:</Text>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>{totalDepositOfADs}</Text>
            <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
          <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}]}>Total cost:</Text>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>{totalCost}</Text>
            <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Entypo name="wallet" size={24} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}]}>Wallet:</Text>
          </View>
          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>600</Text>
            <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
          <Pressable style={[{paddingVertical: 17}, {paddingHorizontal: 40}, {borderRadius: 50}, {borderWidth: 4}, {borderColor: '#fff'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 20}, {color: '#fff'}]}>Cancel</Text>
          </Pressable>

          <Pressable onPress={updateForm} style={[{paddingVertical: 17}, {backgroundColor: '#fff'}, {paddingHorizontal: 40}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            {
              payLoading ? (
                <ActivityIndicator color={'rgb(136,58,209)'} size={'large'} />
              ) : (
                <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 20}, {color: 'rgb(136,58,209)'}]}>Pay</Text>
              )
            }
          </Pressable>
        </View>
      </View>
    </View>
  )
};

export default OldLicensePage;