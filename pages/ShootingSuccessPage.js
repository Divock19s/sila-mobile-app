import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ShootingSuccessPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const goHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Shooting' }]
        });
    };

  return (
    <View style={[{flex: 1}]}>
        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/ShootingDone.gif')} style={[{height: height / 2}, {width: width}]} />
            <Text style={[{marginTop: 30}, {fontSize: 20}, {fontWeight: 300}]}>Your shooting plan has been ordered successfully!</Text>
            <Pressable onPress={goHome} style={[{marginTop: 30}, {backgroundColor: '#7538D4'}, {borderRadius: 100 / 2}, {alignItems: 'center'}, {justifyContent: 'center'}, {height: 60}, {width: 60}]}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
            </Pressable>
        </View>
    </View>
  )
}

export default ShootingSuccessPage;