import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import data from '../Context';
import { useContext } from 'react';

const CreateADCounter = () => {

    const {totalDepositOfADs, totalCost} = useContext(data);

  return (
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
            <Pressable style={[{paddingVertical: 17}, {paddingHorizontal: 40}, {borderRadius: 50}, {borderWidth: 4}, {borderColor: '#fff'}]}>
            <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 20}, {color: '#fff'}]}>Cancel</Text>
            </Pressable>

            <Pressable style={[{paddingVertical: 17}, {backgroundColor: '#fff'}, {paddingHorizontal: 40}, {borderRadius: 50}]}>
            <Text style={[{fontFamily: 'Ubuntu-Bold'}, {fontSize: 20}, {color: 'rgb(136,58,209)'}]}>Pay</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default CreateADCounter