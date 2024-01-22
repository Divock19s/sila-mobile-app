import { View, Text, Pressable, TextInput, ScrollView, Alert, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import CreateADCounter from '../components/CreateADCounter';
import { CheckBox } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { AntDesign } from '@expo/vector-icons';
import data from '../Context';

const createADPage = () => {

  const { width, height } = Dimensions.get('screen');

  const {setTotalDepositOfADs, setTotalCost} = useContext(data);

  const [licenseType, setLicenseType] = useState(null);
  const [oldLicense, setOldLicenseName] = useState(null);
  const [newLicenseName, setNewLicenseName] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageURLs, setPageURLs] = useState([]);
  const [phpRedLine, setPhpRedLine] = useState(false);
  const [checked, setChecked] = useState(false);

  const [domainNumber, setDomainNumber] = useState(0);
  const [isAPP, setIsAPP] = useState('no');
  const [appIDs, setAPPIDs] = useState([]);
  const [domainName, setDomainName] = useState([]);

  const [shopifyShop, setShopifyShop] = useState('no');

  const [adAccountsNumber, setAdAccountsNumber] = useState(0);
  const [adAccountNames, setAdAccountNames] = useState([]);
  const [adAccountDeposits, setAdAccountDeposits] = useState([]);

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
      setTotalCost(totalDepositOfADs + 358);
    } else if (adAccountsNumber === 5 && totalDepositOfADs > 0) {
      setTotalCost(totalDepositOfADs + 537);
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

  return (
    <View style={[{flex: 1}, {padding: 40}]}>
      <View style={[{height: 450}]}>
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
              <Pressable onPress={() => setIsAPP('no')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                  {
                    isAPP === 'no' && (
                      <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                    )
                  }
                </View>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>No</Text>
              </Pressable>

              <Pressable onPress={() => setIsAPP('yes')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                  {
                    isAPP === 'yes' && (
                      <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                    )
                  }
                </View>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Yes</Text>
              </Pressable>
            </View>
          </View>

          {
            isAPP === 'yes' && renderAPPIDInput()
          }

          { renderDomainNameInput() }
        </View>

        {
          isAPP === 'no' && (
            <View style={[{marginTop: 30}]}>
              <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Do you currently have a Shopify shop at the time of this application?</Text>
              <View style={[{flexDirection: 'row'}, {gap: 30}, {alignItems: 'center'}, {marginTop: 20}]}>
                <Pressable onPress={() => setShopifyShop('no')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                  <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                    {
                      shopifyShop === 'no' && (
                        <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                      )
                    }
                  </View>
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>No</Text>
                </Pressable>

                <Pressable onPress={() => setShopifyShop('yes')} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                  <View style={[{height: 25}, {width: 25}, {borderRadius: 100 / 2}, {backgroundColor: 'rgb(136,58,209)'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                    {
                      shopifyShop === 'yes' && (
                        <View style={[{height: 10}, {width: 10}, {borderRadius: 100 / 2}, {backgroundColor: '#fff'}]}></View>
                      )
                    }
                  </View>
                  <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]}>Yes</Text>
                </Pressable>
              </View>

              {
                shopifyShop === 'yes' && (
                  <View style={[{marginTop: 20}, {flexDirection: 'row'}, {gap: 30}]}>
                    <Pressable style={[{borderWidth: 3}, {height: 100}, {width: 100}, {borderRadius: 20}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                      <AntDesign name="plus" size={30} color="black" />
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
          <TextInput style={[{borderBottomWidth: 3}, {marginTop: 10}, {borderColor: 'rgb(136,58,209)'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}]} placeholder='Fill remarks here...' />
        </View>
        </ScrollView>
      </View>

      <CreateADCounter />
    </View>
  )
};

export default createADPage;