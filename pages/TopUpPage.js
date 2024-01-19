import { View, Text, Pressable, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { AntDesign } from '@expo/vector-icons';

const TopUpPage = () => {

    const [paymentMethodPicker, setPaymentMethodPicker] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);

    useEffect(() => {
        if (paymentMethod !== null) {
            setPaymentMethodPicker(false);
        }
    }, [paymentMethod]);

  return (
    <View style={[{flex: 1}, {paddingHorizontal: 30}]}>
        <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Top Up</Text>
        </View>

        <Pressable onPress={() => setPaymentMethodPicker(!paymentMethodPicker)} style={[{height: 70}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}, {paddingHorizontal: 30}, {borderRadius: 20}, {marginTop: 150}, {backgroundColor: 'rgb(136,58,209)'}]}>
            {
                paymentMethod !== null ? (
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}, {color: '#fff'}]}>{paymentMethod}</Text>
                ) : (
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 17}, {color: 'gray'}]}>Payment method</Text>
                )
            }
            
            {
                paymentMethodPicker ? (
                    <MaterialIcons name="arrow-drop-up" size={30} color="#fff" />
                ) : (
                    <MaterialIcons name="arrow-drop-down" size={30} color="#fff" />
                )
            }
        </Pressable>

        {
            paymentMethodPicker && (
                <View style={[{borderWidth: 3}, {borderRadius: 20}, {borderColor: 'rgb(136,58,209)'}]}>
                    <Pressable onPress={() => setPaymentMethod('Baridi mob')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Baridi mob</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('USDT')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>USDT</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Wise')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Wise</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Paypal')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Paypal</Text>
                    </Pressable>

                    <Pressable onPress={() => setPaymentMethod('Payoneer')} style={[{justifyContent: 'center'}, {alignItems: 'center'}, {padding: 20}]}>
                        <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}]}>Payoneer</Text>
                    </Pressable>
                </View>
            )
        }

        <TextInput style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}, {borderColor: 'rgb(136,58,209)'}]} placeholder='Charge Amount, eg: 500' keyboardType='numeric' />

        <TextInput style={[{borderBottomWidth: 3}, {marginTop: 30}, {fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}, {borderColor: 'rgb(136,58,209)'}]} placeholder='Transaction ID' keyboardType='numeric' />

        <View style={[{marginTop: 30}]}>
            <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 17}]}>Photo proof:</Text>

            <Pressable style={[{marginTop: 10}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
                <AntDesign name="plus" size={50} color="rgb(136,58,209)" />
            </Pressable>
        </View>

        <View style={[{flexDirection: 'row'}, {marginTop: 100}, {justifyContent: 'center'}, {gap: 20}]}>
            <Pressable style={[{paddingVertical: 20}, {paddingHorizontal: 60}, {borderRadius: 60}, {borderWidth: 3}, {borderColor: 'rgb(136,58,209)'}]}>
                <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Regular'}]}>Cancel</Text>
            </Pressable>

            <Pressable style={[{backgroundColor: 'rgb(136,58,209)'}, {paddingVertical: 20}, {paddingHorizontal: 60}, {borderRadius: 60}]}>
                <Text style={[{fontSize: 17}, {fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Confirm</Text>
            </Pressable>
        </View>

        <BottomNav />
    </View>
  )
};

export default TopUpPage;