import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import data from './Context';
import './lang/i18n';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Pages imports:
import BottomNav from './components/BottomNav';
import TopUpPage from './pages/TopUpPage';
import TransactionsPage from './pages/TransactionsPage';
import PaymentsHistoryPage from './pages/PaymentsHistoryPage';
import FacebookPage from './pages/FacebookPage';
import CreateADPage from './pages/CreateADPage';
import SignPage from './pages/SignPage';
import StartUpPage from './pages/StartUpPage';
import AccountsListPage from './pages/AccountsListPage';
import NewAdAccountPage from './pages/NewAdAccountPage';
import BMshareLogsPage from './pages/BMshareLogsPage';
import RefundRecordPage from './pages/RefundRecordPage';
import RefundPage from './pages/RefundPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import ComingSoonPage from './pages/ComingSoonPage';
import MediaBuyingPage from './pages/MediaBuyingPage';
import MBPacksPage from './pages/MBPacksPage';
import MBInterface from './pages/MBInterface';
import AddMediaPage from './pages/AddMediaPage';
import MyMediaPage from './pages/MyMediaPage';
import ShootingPage from './pages/ShootingPage';
import ShootingSuccessPage from './pages/ShootingSuccessPage';
import ShootingDashboardPage from './pages/ShootingDashboardPage';
import AddCreativePage from './pages/AddCreativePage';
import CreativeDashboardPage from './pages/CreativeDashboardPage';
import ChoicePage from './pages/ChoicePage';
import FormationPage from './pages/FormationPage';
import EcommercePage from './pages/EcommercePage';
import PresentialFormationPage from './pages/PresentialFormationPage';
import CreateVipAdPage from './pages/CreateVipAdPage';
import LanguagePage from './pages/LanguagePage';
//


//Navigation imports:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//

export default function App() {

  //states for the context
  const [pressedMediaPack, setPressedMediaPack] = useState(null);
  const [pressedCreativePack, setPressedCreativePack] = useState(null);
  //

  
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const getLanguage = async () => {
      try {
        const response = await AsyncStorage.getItem('lang');
        i18next.changeLanguage(response);
      } catch (err) {
        console.error(err);
      }
    };

    getLanguage();
  }, []);

  return (
    <data.Provider value={{ pressedMediaPack, setPressedMediaPack, pressedCreativePack,
    setPressedCreativePack }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='StartUp' screenOptions={{headerShown: false,
        contentStyle: {backgroundColor: '#fff'}}}>
          <Stack.Screen name='BottomNav' component={BottomNav} />
          <Stack.Screen name='Sign' component={SignPage} />
          <Stack.Screen name='TopUp' component={TopUpPage} />
          <Stack.Screen name='Transactions' component={TransactionsPage} />
          <Stack.Screen name='PaymentHistory' component={PaymentsHistoryPage} />
          <Stack.Screen name='Meta' component={FacebookPage} />
          <Stack.Screen name='CreateAD' component={CreateADPage} />
          <Stack.Screen name='StartUp' component={StartUpPage} />
          <Stack.Screen name='AccountsList' component={AccountsListPage} />
          <Stack.Screen name='NewAdAccount' component={NewAdAccountPage} />
          <Stack.Screen name='BMLogs' component={BMshareLogsPage} />
          <Stack.Screen name='RefundRecord' component={RefundRecordPage} />
          <Stack.Screen name='Refund' component={RefundPage} />
          <Stack.Screen name='Account' component={AccountSettingsPage} />
          <Stack.Screen name='ComingSoon' component={ComingSoonPage} />
          <Stack.Screen name='MediaBuying' component={MediaBuyingPage} />
          <Stack.Screen name='MBPacks' component={MBPacksPage} />
          <Stack.Screen name='MBInterface' component={MBInterface} />
          <Stack.Screen name='AddMedia' component={AddMediaPage} />
          <Stack.Screen name='MyMedia' component={MyMediaPage} />
          <Stack.Screen name='Shooting' component={ShootingPage} />
          <Stack.Screen name='ShootingSuccess' component={ShootingSuccessPage} />
          <Stack.Screen name='ShootingDashboard' component={ShootingDashboardPage} />
          <Stack.Screen name='AddCreative' component={AddCreativePage} />
          <Stack.Screen name='CreativeDashboard' component={CreativeDashboardPage} />
          <Stack.Screen name='Choice' component={ChoicePage} />
          <Stack.Screen name='Formation' component={FormationPage} />
          <Stack.Screen name='Ecommerce' component={EcommercePage} />
          <Stack.Screen name='PresentialFormation' component={PresentialFormationPage} />
          <Stack.Screen name='VipAd' component={CreateVipAdPage} />
          <Stack.Screen name='Language' component={LanguagePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </data.Provider>
  );
};