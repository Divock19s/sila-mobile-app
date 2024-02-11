import { View, Text, ScrollView, Dimensions, Pressable, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import { LineChart } from "react-native-chart-kit";

const HomePage = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get('window');

  return (
    <View style={[{flex: 1}, {padding: 30}]}>
        <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
            <View>
                <Text style={[{fontSize: 20}, {fontWeight: 300}]}>Hello (User)</Text>
                <Text>Discover joy in every interaction!</Text>
            </View>
            <Image source={require('../assets/images&logos/mb.jpg')} style={[{height: 50}, {width: 50}, {borderRadius: 100 / 2}]} />
        </View>

        <Text style={[{fontSize: 16}, {marginTop: 40}]}>Services</Text>

        <View style={[{marginTop: 20}]}>
            <ScrollView horizontal>
                <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                    <Entypo name="code" size={30} color="#fff" />
                    <Text style={[{fontSize: 16}, {color: '#fff'}]}>Development</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                    <MaterialIcons name="movie-filter" size={30} color="#fff" />
                    <Text style={[{fontSize: 16}, {color: '#fff'}]}>Media buying</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                    <Entypo name="video-camera" size={30} color="#fff" />
                    <Text style={[{fontSize: 16}, {color: '#fff'}]}>Shooting</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('ComingSoon')} style={[{alignItems: 'center'}, {backgroundColor: '#7538D4'}, {borderRadius: 20}, {height: 130}, {width: 130}, {justifyContent: 'center'}, {gap: 10}, {marginRight: 10}]}>
                    <AntDesign name="barschart" size={30} color="#fff" />
                    <Text style={[{fontSize: 16}, {color: '#fff'}]}>Ads</Text>
                </Pressable>
            </ScrollView>
        </View>

        <Text style={[{fontSize: 16}, {marginTop: 20}]}>Net stats:</Text>

        <LineChart
            data={{
            labels: ["5s", "10s", "15s", "20s", "25s", "30s"],
            datasets: [
                {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]
                }
            ]
            }}
            width={width - 50} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="mb"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#7538D4",
            backgroundGradientFrom: "#7538D4",
            backgroundGradientTo: "#7538D4",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "3",
                strokeWidth: "2",
                stroke: "#fff"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />

        <BottomNav />
    </View>
  )
}

export default HomePage