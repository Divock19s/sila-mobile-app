import { View, Text, Image, Pressable, ScrollView, Dimensions, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';

const AddMediaPage = () => {

    const { width, height } = Dimensions.get('window');

    const [files, setFiles] = useState(null);

    const pickFiles = () => {
        const pick = async () => {
            try {
                const response = await DocumentPicker.getDocumentAsync({
                    type: '*/*',
                    multiple: true
                });

                if (response.canceled) {
                    Alert.alert('No media was selected!');
                } else {
                    setFiles(response);
                }
            } catch (err) {
                console.error(err);
            }
        };

        pick();
    };

  return (
    <View style={[{flex: 1}]}>
        <Pressable onPress={pickFiles} style={[{padding: 30}, {flexDirection: 'row'}, {backgroundColor: '#7538D4'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
            <AntDesign name="plus" size={30} color="#fff" />
            <Text style={[{color: '#fff'}, {fontWeight: 500}, {fontSize: 16}]}>Add your media</Text>
        </Pressable>

        <View style={[{alignItems: 'center'}]}>
            <Image source={require('../assets/images&logos/Innovation-v2.gif')} style={[{height: 200}, {width: 200}]} />
            <MaterialIcons name="keyboard-arrow-down" size={50} color="black" />
            <Text style={[{fontWeight: 300}, {fontSize: 16}]}>All of your Media will be shown here:</Text>
        </View>

        <View style={[{borderTopWidth: 5}, {flex: 1}, {marginHorizontal: 30}, {borderColor: '#7538D4'}, {padding: 10}]}>
            <ScrollView>
                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Video style={[{flex: 1}]} source={require('../assets/images&logos/mbVid.mp4')} useNativeControls resizeMode={ResizeMode.COVER} />
                </View>

                <View style={[{height: height / 5}, {borderRadius: 20}, {overflow: 'hidden'}, {marginBottom: 20}]}>
                    <Image source={require('../assets/images&logos/mb.jpg')} style={[{height: '100%'}, {width: '100%'}]} />
                </View>
            </ScrollView>
        </View>
    </View>
  )
};

export default AddMediaPage;