import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
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
//


//Navigation imports:
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//

SplashScreen.preventAutoHideAsync();

export default function App() {

  //states for the context
  const [totalDepositOfADs, setTotalDepositOfADs] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  //

  
  const Stack = createNativeStackNavigator();


  //Fonts config:
  const [fontsLoaded] = useFonts({
    'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //

  return (
    <data.Provider value={{ totalDepositOfADs, setTotalDepositOfADs,
    totalCost, setTotalCost }}>
      <View style={[{flex: 1}]} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Sign' screenOptions={{headerShown: false,
          contentStyle: {backgroundColor: '#fff'}}}>
            <Stack.Screen name='Sign' component={SignPage} />
            <Stack.Screen name='Dashboard' component={DashboardPage} />
            <Stack.Screen name='TopUp' component={TopUpPage} />
            <Stack.Screen name='Profile' component={ProfilePage} />
            <Stack.Screen name='Transactions' component={TransactionsPage} />
            <Stack.Screen name='PaymentHistory' component={PaymentsHistoryPage} />
            <Stack.Screen name='Meta' component={FacebookPage} />
            <Stack.Screen name='CreateAD' component={CreateADPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </data.Provider>
  );
};