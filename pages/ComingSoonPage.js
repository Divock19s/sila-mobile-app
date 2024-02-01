import { View, Text, ImageBackground, Image } from 'react-native';

const ComingSoonPage = () => {
  return (
    <View style={[{flex: 1}]}>
      <ImageBackground resizeMode='cover' style={[{flex: 1}, {justifyContent: 'center'}, {alignItems: 'center'}]} source={require('../assets/images&logos/10074879.jpg')}>
        <View style={[{height: 200}, {width: 200}, {borderRadius: 30}, {overflow: 'hidden'}]}>
          <Image style={[{height: '100%'}, {width: '100%'}]} source={require('../assets/images&logos/clock-gif.gif')} />
        </View>
        <Text style={[{marginTop: 20}, {fontFamily: 'Ubuntu-Bold'}, {fontSize: 20}, {color: 'purple'}]}>Coming Soon!</Text>
      </ImageBackground>
    </View>
  )
}

export default ComingSoonPage