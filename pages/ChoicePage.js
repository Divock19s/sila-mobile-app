import { View, Text, Pressable, Image, Dimensions } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ChoicePage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

    const goToFormation = () => {
        const asyncStorage = async () => {
            try {
                await AsyncStorage.setItem('Choice', 'Formation');
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();

        navigation.reset({
            index: 0,
            routes: [{ name: 'Formation' }]
        });
    };

    const goToMarketing = () => {
        const asyncStorage = async () => {
            try {
                await AsyncStorage.setItem('Choice', 'Marketing');
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();

        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
        });
    };

  return (
    <View style={[{flex: 1}, {padding: 50}, {gap: 50}, {justifyContent: 'center'}, {alignItems: 'center'}]}>
        <Pressable onPress={goToFormation} style={[{borderWidth: 2}, {borderColor: '#7538D4'}, {height: 300}, {width: 300}, {borderRadius: 30}, {overflow: 'hidden'}, {backgroundColor: '#7538D4'}]}>
            <Image style={[{width: '100%'}, {height: '60%'}]} source={require('../assets/images&logos/Formation.gif')} />
            <View style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                <Text style={[{color: '#fff'}, {fontSize: 15}]}>I want to discover Formations!</Text>
                <SimpleLineIcons name="graduation" size={24} color="#fff" />
            </View>
        </Pressable>

        <Pressable onPress={goToMarketing} style={[{borderWidth: 2}, {borderColor: '#7538D4'}, {height: 300}, {width: 300}, {borderRadius: 30}, {overflow: 'hidden'}, {backgroundColor: '#7538D4'}]}>
            <Image style={[{width: '100%'}, {height: '60%'}]} source={require('../assets/images&logos/Marketing.gif')} />
            <View style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 20}]}>
                <Text style={[{color: '#fff'}, {fontSize: 15}]}>I want to do Marketing!</Text>
                <Entypo name="megaphone" size={24} color="#fff" />
            </View>
        </Pressable>
    </View>
  )
}

export default ChoicePage