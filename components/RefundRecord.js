import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const RefundRecord = () => {
  return (
    <View style={[{marginTop: 80}, {height: 600}]}>
        <ScrollView>
            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>94583945839585</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Entypo name="dots-three-horizontal" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Refund reason:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>I hate you!</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="dollar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Amount:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>1200</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Pending</Text>
                    <Ionicons name="time" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <AntDesign name="calendar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Date:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>05.04.2022</Text>
                </View>
            </View>

            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>94583945839585</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Entypo name="dots-three-horizontal" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Refund reason:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>I hate you!</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="dollar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Amount:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>1200</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Pending</Text>
                    <Ionicons name="time" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <AntDesign name="calendar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Date:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>05.04.2022</Text>
                </View>
            </View>

            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>94583945839585</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Entypo name="dots-three-horizontal" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Refund reason:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>I hate you!</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="dollar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Amount:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>1200</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Pending</Text>
                    <Ionicons name="time" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <AntDesign name="calendar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Date:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>05.04.2022</Text>
                </View>
            </View>

            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>94583945839585</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Entypo name="dots-three-horizontal" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Refund reason:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>I hate you!</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="dollar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Amount:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>1200</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Pending</Text>
                    <Ionicons name="time" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <AntDesign name="calendar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Date:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>05.04.2022</Text>
                </View>
            </View>

            <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>94583945839585</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="id-card-o" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Entypo name="dots-three-horizontal" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Refund reason:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>I hate you!</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <FontAwesome name="dollar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Amount:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>1200</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Status:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Pending</Text>
                    <Ionicons name="time" size={24} color="#fff" />
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                    <AntDesign name="calendar" size={24} color="#fff" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Date:</Text>
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>05.04.2022</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default RefundRecord