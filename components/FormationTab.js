import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const FormationTab = () => {

  const navigation = useNavigation();

  const {t} = useTranslation();

  return (
    <View style={[{borderRadius: 50}, {position: 'absolute'}, {bottom: 20}, {left: 20}, {right: 20}, {backgroundColor: '#7538D4'}, {padding: 20}, {alignItems: 'center'}, {flexDirection: 'row'}, {justifyContent: 'space-between'}]}>
      <Pressable onPress={() => navigation.navigate('Formation')} style={[{backgroundColor: '#fff'}, {alignItems: 'center'}, {justifyContent: 'center'}, {height: 45}, {width: 45}, {borderRadius: 100 / 2}]}>
        <AntDesign name="home" size={24} color="black" />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('PresentialFormation')} style={[{backgroundColor: '#fff'}, {alignItems: 'center'}, {justifyContent: 'center'}, {borderRadius: 30}, {flexDirection: 'row'}, {padding: 10}, {gap: 20}]}>
        <Ionicons name="hand-right-outline" size={24} color="black" />
        <Text style={[{fontWeight: 500}]}>{t('i-was-present')}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Services')} style={[{backgroundColor: '#fff'}, {alignItems: 'center'}, {justifyContent: 'center'}, {height: 45}, {width: 45}, {borderRadius: 100 / 2}]}>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </Pressable>
    </View>
  )
};

export default FormationTab;