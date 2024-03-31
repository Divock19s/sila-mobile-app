import { View, Text, Image, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AccountSuccessPage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const bottomSheetRef = useRef(null);

    const goToChoice = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Choice' }]
        });
    };

  return (
    <View style={[{flex: 1}, {backgroundColor: '#7538D4'}]}>
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={['30%', '80%']}
        >
            <BottomSheetView style={[{flex: 1}, {alignItems: 'center'}, {padding: 20}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                    <Ionicons name="checkmark-circle" size={30} color="#7538D4" />
                    <Text style={[{fontSize: 16}, {fontWeight: 500}]}>Your Account has been created successfully!</Text>
                </View>

                <Image style={[{width: 300}, {height: 300}, {marginTop: 50}]} source={require('../assets/images&logos/AccountDone.gif')} />

                <TouchableOpacity onPress={goToChoice} style={[{backgroundColor: '#7538D4'}, {padding: 20}, {width: width - 70}, {borderRadius: 50}, {justifyContent: 'center'}, {alignItems: 'center'}, {marginTop: 50}]}>
                    <Text style={[{color: '#fff'}]}>Continue to the APP Dashboard</Text>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheet>
    </View>
  )
};

export default AccountSuccessPage;