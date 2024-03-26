import { View, Text, ImageBackground, Image } from 'react-native';
import { useTranslation } from 'react-i18next';

const ComingSoonPage = () => {

  const {t} = useTranslation();

  return (
    <View style={[{flex: 1}]}>
      <ImageBackground resizeMode='cover' style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}]} source={require('../assets/images&logos/10074879.jpg')}>
        <View style={[{height: 200}, {width: 200}, {borderRadius: 30}, {overflow: 'hidden'}]}>
          <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/images&logos/clock-gif.gif')} />
        </View>
        <Text style={[{marginTop: 20}, {fontSize: 20}, {color: '#7538D4'}]}>{t('coming-soon')}</Text>
      </ImageBackground>
    </View>
  )
}

export default ComingSoonPage