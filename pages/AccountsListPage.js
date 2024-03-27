import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AccountsList from '../components/AccountsList';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const AccountsListPage = () => {

  const navigation = useNavigation();

  const {t} = useTranslation();

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
      <Pressable onPress={() => navigation.navigate('CreateAD')} style={[{backgroundColor: '#7538D4'}, {flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {padding: 20}, {borderRadius: 30}, {gap: 20}]}>
        <AntDesign name="plus" size={24} color="#fff" />
        <Text style={[{color: '#fff'}]}>{t('create-new-ad-account')}</Text>
      </Pressable>

      <AccountsList />
    </View>
  )
};

export default AccountsListPage;