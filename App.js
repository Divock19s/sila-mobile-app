import { View } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import data from './Context';

//Pages imports:
import TopUpPage from './pages/TopUpPage';
import ProfilePage from './pages/ProfilePage';
import TransactionsPage from './pages/TransactionsPage';
import PaymentsHistoryPage from './pages/PaymentsHistoryPage';
import FacebookPage from './pages/FacebookPage';
import CreateADPage from './pages/CreateADPage';
import DashboardPage from './pages/DashboardPage';
import SignPage from './pages/SignPage';
import StartUpPage from './pages/StartUpPage';
import AccountsListPage from './pages/AccountsListPage';
import NewAdAccountPage from './pages/NewAdAccountPage';
import BMshareLogsPage from './pages/BMshareLogsPage';
import RefundRecordPage from './pages/RefundRecordPage';
import RefundPage from './pages/RefundPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ServicesPage from './pages/ServicesPage';
//


//Navigation imports:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//

export default function App() {

  //states for the context
  const [totalDepositOfADs, setTotalDepositOfADs] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  //

  
  const Stack = createNativeStackNavigator();

  return (
    <data.Provider value={{ totalDepositOfADs, setTotalDepositOfADs,
    totalCost, setTotalCost }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='StartUp' screenOptions={{headerShown: false,
        contentStyle: {backgroundColor: '#fff'}}}>
          <Stack.Screen name='Sign' component={SignPage} />
          <Stack.Screen name='Dashboard' component={DashboardPage} />
          <Stack.Screen name='TopUp' component={TopUpPage} />
          <Stack.Screen name='Profile' component={ProfilePage} />
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
          <Stack.Screen name='Services' component={ServicesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </data.Provider>
  );
};