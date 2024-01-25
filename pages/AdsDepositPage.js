import { View, Text, TextInput, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';

const AdsDepositPage = () => {

  const navigation = useNavigation();

  const [adAccount, setAdAccount] = useState(null);
  const [chargeAmount, setChargeAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const commision = parseInt(chargeAmount) * 6 / 100;
    setTotalCost(parseInt(chargeAmount) + commision);
  }, [chargeAmount]);

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
        <FontAwesome name="dollar" size={24} color="#fff" />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Ads Deposit Record</Text>
      </View>

      <View style={[{marginTop: 80}]}>
        <RNPickerSelect
          onValueChange={(value) => setAdAccount(value)}
          items={[
            { label: 'Account1', value: 'irjodg' },
            { label: 'Account2', value: 'esjfiosjef' }
          ]}
        />

        <TextInput onChangeText={(text) => setChargeAmount(text)} style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}, {borderColor: 'purple'}]} placeholder='Charge amount...' keyboardType='numeric' />

        <View style={[{marginTop: 30}, {borderRadius: 20}, {padding: 20}, {gap: 10}, {backgroundColor: 'purple'}]}>
          <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}, {fontSize: 17}]}>Charge amount:</Text>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
              <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}, {fontSize: 17}]}>{chargeAmount}</Text>
              <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
            </View>
          </View>

          <View style={[{flexDirection: 'row'}, {gap: 20}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}, {fontSize: 17}]}>Total cost:</Text>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
              <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}, {fontSize: 17}]}>{totalCost}</Text>
              <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
            </View>
          </View>
        </View>

        <View style={[{flexDirection: 'row'}, {gap: 20}, {marginTop: 30}, {justifyContent: 'flex-end'}]}>
          <Pressable onPress={() => navigation.navigate('Meta')} style={[{borderWidth: 3}, {padding: 15}, {borderRadius: 30}, {paddingHorizontal: 25}, {borderColor: 'purple'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>Cancel</Text>
          </Pressable>

          <Pressable style={[{backgroundColor: 'purple'}, {padding: 15}, {borderRadius: 30}, {paddingHorizontal: 40}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Pay</Text>
          </Pressable>
        </View>
      </View>

      <BottomNav />
    </View>
  )
}

export default AdsDepositPage