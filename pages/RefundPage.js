import { View, Text, TextInput, Pressable } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../components/BottomNav';

const RefundPage = () => {

  const navigation = useNavigation();

  const [adAccount, setAdAccount] = useState(null);
  const [refundReason, setRefundReason] = useState(null);
  const [refundAmount, setRefundAmount] = useState(0);

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
        <Foundation name="dollar" size={24} color="#fff" />
        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Refund</Text>
      </View>

      <View style={[{marginTop: 80}, {gap: 20}]}>
        <RNPickerSelect
          onValueChange={(value) => setAdAccount(value)}
          items={[
            { label: 'Account1', value: 'irjodg' },
            { label: 'Account2', value: 'esjfiosjef' }
          ]}
        />

        <RNPickerSelect
          onValueChange={(value) => setRefundReason(value)}
          items={[
            { label: 'Ads disabled', value: 'Ads disabled' },
            { label: 'Ads daily spend limit=0', value: 'Ads daily spend limit=0' },
            { label: 'Page die all', value: 'Page die all' },
            { label: "Everything is fine, don't want to use it anymore!", value: "Everything is fine, don't want to use it anymore!" }
          ]}
        />

        <TextInput onChangeText={(text) => setRefundAmount(text)} style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}, {borderColor: 'purple'}]} placeholder='Charge amount...' keyboardType='numeric' />

        <View style={[{flexDirection: 'row'}, {gap: 20}, {marginTop: 30}, {justifyContent: 'flex-end'}]}>
          <Pressable onPress={() => navigation.navigate('Meta')} style={[{borderWidth: 3}, {padding: 15}, {borderRadius: 30}, {paddingHorizontal: 25}, {borderColor: 'purple'}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>Cancel</Text>
          </Pressable>

          <Pressable style={[{backgroundColor: 'purple'}, {padding: 15}, {borderRadius: 30}, {paddingHorizontal: 40}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Apply refund</Text>
          </Pressable>
        </View>
      </View>

      <BottomNav />
    </View>
  )
}

export default RefundPage