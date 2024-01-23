import { View, Text, Pressable, TextInput, ScrollView, Alert, Image, Dimensions, ActivityIndicator } from 'react-native';
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

const createADPage = () => {

  const { width, height } = Dimensions.get('screen');

  const [licenseType, setLicenseType] = useState(null);
  const [oldLicense, setOldLicenseName] = useState(null);
  const [newLicenseName, setNewLicenseName] = useState(null);

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

  useEffect(() => {
    setNewLicenseName(null);
  }, [licenseType]);

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



  //Post form api:
  const postForm = () => {
    setPayLoading(true);

    const formData = new FormData();
    if (newLicenseName !== null) {
      formData.append('license', newLicenseName);
    };
    formData.append('pageNumber', pageNumber);
    pageURLs.map((x) => {
      formData.append('pageURL', x);
    });
    formData.append('domainNumber', domainNumber);
    formData.append('isApp', isAPP);
    domainName.map((x) => {
      formData.append('domainName', x);
    });
    appIDs.map((x) => {
      formData.append('appID', x);
    });

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

    adAccountNames.map((x, i) => {
      formData.append(`ads[${i}][adName]`, x);
    });

    adAccountDeposits.map((x, i) => {
      formData.append(`ads[${i}][adDeposit]`, x);
    });

    if (remark !== null) {
      formData.append('remark', remark);
    };

    formData.append('totalCost', totalCost);

    const adApi = async () => {
      try {
        const response = await fetch('http://192.168.1.2:4000/ad', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        setPayLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (!checked) {
      Alert.alert('Please make sure you have already shared page with this profile: "https://www.facebook.com/rina.magar.332/"');
      setPayLoading(false);
    } else if (licenseType === null) {
      Alert.alert('Please choose a license type');
      setPayLoading(false);
    } else if (newLicenseName === null) {
      Alert.alert('Please write a license name');
      setPayLoading(false);
    } else if (pageNumber === null || pageNumber === 0) {
      Alert.alert('Please select Page number!');
      setPayLoading(false);
    } else if (pageURLs.length === 0) {
      Alert.alert('Please provide at least one Page URL');
      setPayLoading(false);
    } else if (phpRedLine) {
      Alert.alert('Please provide a valid Page URL!');
      setPayLoading(false);
    } else if (domainNumber === null || domainNumber === 0) {
      Alert.alert('Please select Domain number!');
      setPayLoading(false);
    } else if (domainName.length === 0) {
      Alert.alert('Please provide at least one Domain name');
      setPayLoading(false);
    } else if (isAPP && appIDs.length === 0) {
      Alert.alert('Please provide App id(s)');
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
    } else {
      adApi();
    }
  };
  //

  return (
    <View style={[{flex: 1}, {padding: 40}]}>
      <View style={[{height: 450}, {marginBottom: 30}]}>
        <ScrollView>
          <View>
          <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>License:</Text>

          <RNPickerSelect
            onValueChange={(value) => setLicenseType(value)}
            items={[
                { label: 'New license', value: 'new' },
                { label: 'Old license', value: 'old' }
            ]}
          />
        </View>

        {
          licenseType !== null && (
            <>
              {
                licenseType === 'new' ? (
                  <TextInput onChangeText={(text) => setNewLicenseName(text)} style={[{borderBottomWidth: 3}, {borderColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}]} placeholder='Choose a name for this license' />
                ) : (
                  <RNPickerSelect
                    onValueChange={(value) => setOldLicenseName(value)}
                    items={[
                      { label: 'License1', value: '1' },
                      { label: 'License2', value: '2' }
                    ]}
                  />
                )
              }
            </>
          )
        }

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

          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {marginTop: 20}]}>
            <CheckBox checked={checked} onPress={() => setChecked(!checked)} checkedColor='rgb(136,58,209)' />
            <Text>Please make sure you have already shared your page with this profile:</Text>
          </View>

          <View style={[{alignItems: 'center'}]}>
            <Text style={[{backgroundColor: 'rgb(136,58,209)'}, {color: '#fff'}, {padding: 5}, {borderRadius: 10}]}>https://www.facebook.com/rina.magar.332/</Text>
            <Pressable onPress={copy}>
              <Feather name="copy" size={30} color="black" />
            </Pressable>
          </View>
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

          <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 20}]}>
            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>is APP?</Text>
            <View style={[{flexDirection: 'row'}, {gap: 30}, {alignItems: 'center'}]}>
              <Pressable onPress={() => setIsAPP(false)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                  {
                    !isAPP && (
                      <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                    )
                  }
                </View>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>No</Text>
              </Pressable>

              <Pressable onPress={() => setIsAPP(true)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                  {
                    isAPP && (
                      <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                    )
                  }
                </View>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Yes</Text>
              </Pressable>
            </View>
          </View>

          {
            isAPP && renderAPPIDInput()
          }

          { renderDomainNameInput() }
        </View>

        {
          !isAPP && (
            <View style={[{marginTop: 30}]}>
              <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Do you currently have a Shopify shop at the time of this application?</Text>
              <View style={[{flexDirection: 'row'}, {gap: 30}, {alignItems: 'center'}, {marginTop: 20}]}>
                <Pressable onPress={() => setShopifyShop(false)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                  <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                    {
                      !shopifyShop && (
                        <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                      )
                    }
                  </View>
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>No</Text>
                </Pressable>

                <Pressable onPress={() => setShopifyShop(true)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                  <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                    {
                      shopifyShop && (
                        <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                      )
                    }
                  </View>
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Yes</Text>
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
          )
        }

        <View style={[{marginTop: 30}]}>
          <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 20}]}>AD accounts number:</Text>
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
          <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>if you have any special requirements, please feel free to add them here:</Text>
          <TextInput onChangeText={(text) => setRemark(text)} style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}]} placeholder='Fill remarks here...' />
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

          <Pressable onPress={postForm} style={[{paddingVertical: 17}, {backgroundColor: '#fff'}, {paddingHorizontal: 40}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
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

export default createADPage;