import { View } from 'react-native';
import SignPage from './pages/SignPage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import DashboardPage from './pages/DashboardPage';
import { StatusBar } from 'expo-status-bar';
import TopUpPage from './pages/TopUpPage';
import ProfilePage from './pages/ProfilePage';
import TransactionsPage from './pages/TransactionsPage';
import PaymentsHistoryPage from './pages/PaymentsHistoryPage';
import FacebookPage from './pages/FacebookPage';
import CreateADPage from './pages/CreateADPage';
import data from './Context';

SplashScreen.preventAutoHideAsync();

export default function App() {

  //states for the context
  const [totalDepositOfADs, setTotalDepositOfADs] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  //

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

  return (
    <data.Provider value={{ totalDepositOfADs, setTotalDepositOfADs,
    totalCost, setTotalCost }}>
      <View style={[{flex: 1}]} onLayout={onLayoutRootView}>
        {/* <SignPage /> */}
        {/* <DashboardPage /> */}
        {/* <TopUpPage /> */}
        {/* <ProfilePage /> */}
        {/* <TransactionsPage /> */}
        {/* <PaymentsHistoryPage /> */}
        {/* <FacebookPage /> */}
        <CreateADPage />
      </View>
    </data.Provider>
  );
};