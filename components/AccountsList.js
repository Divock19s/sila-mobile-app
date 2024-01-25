import { View, Text, ScrollView, Pressable, TextInput } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const AccountsList = () => {

    const [openBMInput, setOpenBMInput] = useState(false);

  return (
    <View style={[{marginTop: 30}, {height: 600}]}>
      <ScrollView>
        <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <Fontisto name="database" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>License name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Test test</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <FontAwesome name="id-card-o" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
            </View>

            <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
                <Pressable onPress={() => setOpenBMInput(true)} style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                    <FontAwesome name="share-alt" size={24} color="#000" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>BM share</Text>
                </Pressable>
            </View>

            {
                openBMInput && (
                    <>
                        <TextInput style={[{borderBottomWidth: 3}, {borderColor: '#fff'}, {color: '#fff'}, {fontFamily: 'Ubuntu-Regular'}, {fontSize: 16}]} placeholder='BM share ID...' placeholderTextColor={'gray'} />
                        <View style={[{flexDirection: 'row'}, {justifyContent: 'flex-end'}, {gap: 30}]}>
                            <Pressable onPress={() => setOpenBMInput(false)} style={[{borderWidth: 2}, {borderColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Cancel</Text>
                            </Pressable>

                            <Pressable style={[{backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>Share</Text>
                            </Pressable>
                        </View>
                    </>
                )
            }
        </View>

        <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <Fontisto name="database" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>License name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Test test</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <FontAwesome name="id-card-o" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
            </View>

            <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
                <Pressable style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                    <FontAwesome name="share-alt" size={24} color="#000" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>BM share</Text>
                </Pressable>
            </View>
        </View>

        <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <Fontisto name="database" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>License name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Test test</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <FontAwesome name="id-card-o" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
            </View>

            <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
                <Pressable style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                    <FontAwesome name="share-alt" size={24} color="#000" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>BM share</Text>
                </Pressable>
            </View>
        </View>

        <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <Fontisto name="database" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>License name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Test test</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <FontAwesome name="id-card-o" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
            </View>

            <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
                <Pressable style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                    <FontAwesome name="share-alt" size={24} color="#000" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>BM share</Text>
                </Pressable>
            </View>
        </View>

        <View style={[{backgroundColor: '#000'}, {borderRadius: 30}, {padding: 20}, {gap: 20}, {marginBottom: 20}]}>
            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <Fontisto name="database" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>License name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Test test</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <FontAwesome name="id-card-o" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad ID:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>35895734578353</Text>
            </View>

            <View style={[{flexDirection: 'row'}, {alignItems: 'center'}, {gap: 13}]}>
                <MaterialIcons name="drive-file-rename-outline" size={24} color="#fff" />
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>Ad name:</Text>
                <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#fff'}]}>fake ad name</Text>
            </View>

            <View style={[{alignItems: 'center'}, {justifyContent: 'center'}]}>
                <Pressable style={[{flexDirection: 'row'}, {alignItems: 'center'}, {justifyContent: 'center'}, {gap: 15}, {backgroundColor: '#fff'}, {padding: 10}, {borderRadius: 20}]}>
                    <FontAwesome name="share-alt" size={24} color="#000" />
                    <Text style={[{fontFamily: 'Ubuntu-Regular'}, {color: '#000'}]}>BM share</Text>
                </Pressable>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default AccountsList