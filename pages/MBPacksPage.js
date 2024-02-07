import { View, Text, Pressable, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import data from '../Context';
import { useContext } from 'react';

const MBPacksPage = () => {

    const { width, height } = Dimensions.get('window');

    const navigation = useNavigation();

    const { pressedMediaPack, setPressedMediaPack } = useContext(data);

  return (
    <View style={[{flex: 1}]}>
        <View style={[{flexDirection: 'row'}, {padding: 40}, {justifyContent: 'space-between'}, {alignItems: 'center'}]}>
            <Pressable onPress={() => navigation.navigate('MediaBuying')}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#7538D4" />
            </Pressable>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}]}>
                <MaterialIcons name="movie-filter" size={30} color="#7538D4" />
                <Text style={[{color: '#7538D4'}, {fontSize: 16}, {fontWeight: 500}]}>Our Packs</Text>
            </View>
        </View>

        <ScrollView style={[{paddingHorizontal: 20}]}>
            <View style={[{borderRadius: 30}, {overflow: 'hidden'}, {marginBottom: 20}, {padding: 30}, {backgroundColor: "rgba(117, 56, 212, .3)"}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>Pack startup</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>$</Text>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 40}]}>399</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>12 Creative Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>4 Landing Page Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>Lancement Ads</Text>
                </View>

                <Pressable onPress={() => setPressedMediaPack('Pack startup / $399')} style={[{alignSelf: 'flex-end'}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 40}, {marginTop: 20}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <MaterialCommunityIcons name="source-commit-start-next-local" size={24} color="black" />
                    <Text style={[{fontWeight: 500}]}>Get Started</Text>
                </Pressable>
            </View>

            <View style={[{borderRadius: 30}, {overflow: 'hidden'}, {marginBottom: 20}, {padding: 30}, {backgroundColor: "rgba(117, 56, 212, .6)"}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>Pack medium</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>$</Text>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 40}]}>599</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>24 Creative Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>8 Landing Page Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>Lancement Ads</Text>
                </View>

                <Pressable onPress={() => setPressedMediaPack('Pack startup / $599')} style={[{alignSelf: 'flex-end'}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 40}, {marginTop: 20}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <MaterialCommunityIcons name="source-commit-start-next-local" size={24} color="black" />
                    <Text style={[{fontWeight: 500}]}>Get Started</Text>
                </Pressable>
            </View>

            <View style={[{borderRadius: 30}, {overflow: 'hidden'}, {marginBottom: 20}, {padding: 30}, {backgroundColor: "rgba(117, 56, 212, .9)"}]}>
                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'space-between'}]}>
                    <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>Pack expert</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 20}]}>$</Text>
                        <Text style={[{color: '#fff'}, {fontWeight: 800}, {fontSize: 40}]}>899</Text>
                    </View>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>45 Creative Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>15 Landing Page Pro</Text>
                </View>

                <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 20}, {marginTop: 10}]}>
                    <Ionicons name="checkmark-done" size={30} color="#fff" />
                    <Text style={[{color: '#fff'}, {fontWeight: 100}, {fontSize: 20}]}>Lancement Ads</Text>
                </View>

                <Pressable onPress={() => setPressedMediaPack('Pack startup / $899')} style={[{alignSelf: 'flex-end'}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 40}, {marginTop: 20}, {paddingHorizontal: 20}, {flexDirection: 'row'}, {alignItems: 'center'}, {gap: 10}]}>
                    <MaterialCommunityIcons name="source-commit-start-next-local" size={24} color="black" />
                    <Text style={[{fontWeight: 500}]}>Get Started</Text>
                </Pressable>
            </View>
        </ScrollView>
    </View>
  )
};

export default MBPacksPage;