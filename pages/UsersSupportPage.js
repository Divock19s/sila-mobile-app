import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import BottomNav from '../components/BottomNav';
import { useNavigation } from '@react-navigation/native';

const UsersSupportPage = () => {

    const navigation = useNavigation();

  return (
    <View style={[{flex: 1}]}>
        <View style={[{height: 700}, {paddingHorizontal: 20}]}>
            <ScrollView>
                <Pressable onPress={() => navigation.navigate('Support')} style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {borderRadius: 50}, {padding: 10}, {marginVertical: 20}]}>
                    <Image style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}} />
                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Name of user</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Support')} style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {borderRadius: 50}, {padding: 10}, {marginVertical: 20}]}>
                    <Image style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}} />
                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Name of user</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Support')} style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {borderRadius: 50}, {padding: 10}, {marginVertical: 20}]}>
                    <Image style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}} />
                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Name of user</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Support')} style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {borderRadius: 50}, {padding: 10}, {marginVertical: 20}]}>
                    <Image style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}} />
                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Name of user</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Support')} style={[{backgroundColor: 'purple'}, {flexDirection: 'row'}, {justifyContent: 'center'}, {alignItems: 'center'}, {gap: 30}, {borderRadius: 50}, {padding: 10}, {marginVertical: 20}]}>
                    <Image style={[{height: 60}, {width: 60}, {borderRadius: 100 / 2}]} source={{uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'}} />
                    <Text style={[{fontFamily: 'Ubuntu-Medium'}, {color: '#fff'}]}>Name of user</Text>
                </Pressable>
            </ScrollView>
        </View>

        <BottomNav />
    </View>
  )
}

export default UsersSupportPage