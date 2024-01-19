import { View, Text, ScrollView, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Transactions = () => {
  return (
    <View style={[{paddingHorizontal: 30}]}>
        <View style={[{height: 70}, {backgroundColor: 'rgb(136,58,209)'}, {borderBottomLeftRadius: 50}, {borderBottomRightRadius: 50}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {position: 'absolute'}, {left: 0}, {right: 0}]}>
            <Entypo name="wallet" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 17}]}>My transactions</Text>
        </View>

        <View style={[{marginTop: 100}, {height: 630}]}>
            <ScrollView>
                <View style={[{borderRadius: 50}, {backgroundColor: 'yellow'}, {padding: 20}, {marginBottom: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Ionicons name="receipt-outline" size={24} color="black" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Application ID: 94394830948</Text>
                    </View>
                    
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <MaterialCommunityIcons name="bank" size={24} color="black" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Transaction ID: 494589054048509448954</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <FontAwesome5 name="money-bill" size={24} color="black" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Payment Method: USDT</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 30}]}>500</Text>
                        <MaterialCommunityIcons name="star-four-points" size={24} color="black" />
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <View style={[{height: 200}, {width: 150}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                            <Image style={[{flex: 1}, {resizeMode: 'stretch'}]} source={{uri: 'https://storage.googleapis.com/support-forums-api/attachment/thread-191661601-15203805108075818741.JPG'}} />
                        </View>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Status:</Text>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                            <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>Pending</Text>
                            <Ionicons name="time-sharp" size={24} color="#000" />
                        </View>
                    </View>
                </View>
        
                <View style={[{borderRadius: 50}, {backgroundColor: 'green'}, {padding: 20}, {marginBottom: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Ionicons name="receipt-outline" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Application ID: 94394830948</Text>
                    </View>
                    
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <MaterialCommunityIcons name="bank" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Transaction ID: 494589054048509448954</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <FontAwesome5 name="money-bill" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Payment Method: USDT</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 30}, {color: '#fff'}]}>500</Text>
                        <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <View style={[{height: 200}, {width: 150}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                            <Image style={[{flex: 1}, {resizeMode: 'stretch'}]} source={{uri: 'https://storage.googleapis.com/support-forums-api/attachment/thread-191661601-15203805108075818741.JPG'}} />
                        </View>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Succeeded</Text>
                            <Entypo name="check" size={24} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={[{borderRadius: 50}, {backgroundColor: 'red'}, {padding: 20}, {marginBottom: 30}, {gap: 30}]}>
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Ionicons name="receipt-outline" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Application ID: 94394830948</Text>
                    </View>
                    
                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <MaterialCommunityIcons name="bank" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Transaction ID: 494589054048509448954</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <FontAwesome5 name="money-bill" size={24} color="#fff" />
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Payment Method: USDT</Text>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}, {justifyContent: 'center'}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Medium'}, {fontSize: 30}, {color: '#fff'}]}>500</Text>
                        <MaterialCommunityIcons name="star-four-points" size={24} color="#fff" />
                    </View>

                    <View style={[{alignItems: 'center'}]}>
                        <View style={[{height: 200}, {width: 150}, {borderRadius: 20}, {overflow: 'hidden'}]}>
                            <Image style={[{flex: 1}, {resizeMode: 'stretch'}]} source={{uri: 'https://storage.googleapis.com/support-forums-api/attachment/thread-191661601-15203805108075818741.JPG'}} />
                        </View>
                    </View>

                    <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                        <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 5}]}>
                            <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Rejected</Text>
                            <Ionicons name="close" size={24} color="#fff" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    </View>
  )
};

export default Transactions;