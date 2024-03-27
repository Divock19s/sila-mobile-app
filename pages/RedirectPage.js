import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RedirectPage = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const asyncStorage = async () => {
            try {
                const response = await AsyncStorage.getItem('Choice');
                
                if (response === null) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'StartUp' }]
                    });
                } else {
                    if (response === 'Formation') {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Formation' }]
                        });
                    } else {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'BottomNav' }]
                        });
                    }
                }
            } catch (err) {
                console.error(err);
            }
        };

        asyncStorage();
    }, []);

  return (
    <View>
    </View>
  )
};

export default RedirectPage;