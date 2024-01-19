import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PaymentHistory = () => {
  return (
    <View style={[{paddingHorizontal: 30}]}>
        <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <MaterialIcons name="history-toggle-off" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>Payments history</Text>
        </View>

        <View style={[{height: 600}, {marginTop: 100}]}>
            <ScrollView>
                <View style={[{borderRadius: 50}, {backgroundColor: 'rgb(136,58,209)'}, {padding: 20}, {marginBottom: 30}, {gap: 10}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <AntDesign name="shoppingcart" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Type: FB application</Text>
                    </View>
                    
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="receipt-outline" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Application ID: 4954385043859</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 50}, {color: '#fff'}]}>-800</Text>
                        <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                        <Ionicons name="time-sharp" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>On: 2023.04.12</Text>
                    </View>
                </View>

                <View style={[{height: 200}, {borderRadius: 50}, {backgroundColor: 'rgb(136,58,209)'}, {padding: 20}, {marginBottom: 30}, {gap: 10}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <AntDesign name="shoppingcart" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Type: FB application</Text>
                    </View>
                    
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="receipt-outline" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Application ID: 4954385043859</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 50}, {color: '#fff'}]}>+200</Text>
                        <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                        <Ionicons name="time-sharp" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>On: 2023.04.12</Text>
                    </View>
                </View>

                <View style={[{height: 200}, {borderRadius: 50}, {backgroundColor: 'rgb(136,58,209)'}, {padding: 20}, {marginBottom: 30}, {gap: 10}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <AntDesign name="shoppingcart" size={24} color="#fff" />
                        <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}]}>Type: FB application</Text>
                    </View>
                    
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                        <Ionicons name="receipt-outline" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Application ID: 4954385043859</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 50}, {color: '#fff'}]}>-500</Text>
                        <MaterialCommunityIcons name="star-four-points" size={30} color="#fff" />
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                        <Ionicons name="time-sharp" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>On: 2023.04.12</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default PaymentHistory