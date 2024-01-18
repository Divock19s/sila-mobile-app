import { View } from 'react-native';
import SignPage from './pages/SignPage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import DashboardPage from './pages/DashboardPage';
import { StatusBar } from 'expo-status-bar';
import TopUpPage from './pages/TopUpPage';

SplashScreen.preventAutoHideAsync();

export default function App() {

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
    <View style={[{flex: 1}]} onLayout={onLayoutRootView}>
      {/* <SignPage /> */}
      {/* <DashboardPage /> */}
      <TopUpPage />
    </View>
  );
};