import { View, Text, Pressable, TextInput } from 'react-native';
import BottomNav from '../components/BottomNav';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const createADPage = () => {

  const [licenseType, setLicenseType] = useState(null);

  return (
    <View style={[{flex: 1}, {padding: 40}]}>
      <View>
        <Text style={[{fontFamily: 'Ubuntu-Regular'}]}>License:</Text>

        <RNPickerSelect
          onValueChange={(value) => setLicenseType(value)}
          items={[
              { label: 'New license', value: 'new' },
              { label: 'Old license', value: 'old' }
          ]}
        />
      </View>

      {
        licenseType !== null && (
          <>
            {
              licenseType === 'new' ? (
                <TextInput style={[{borderBottomWidth: 3}]} />
              ) : (
                <RNPickerSelect
                  items={[
                      { label: 'License1', value: '1' },
                      { label: 'License2', value: '2' }
                  ]}
                />
              )
            }
          </>
        )
      }

      <BottomNav />
    </View>
  )
};

export default createADPage;