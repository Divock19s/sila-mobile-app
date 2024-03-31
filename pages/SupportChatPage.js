import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

const SupportChatPage = () => {
  return (
    <View style={[{flex: 1}, {paddingTop: 40}]}>
        <WebView source={{uri: 'https://secure.livechatinc.com/customer/action/open_chat?license_id=17542350'}} />
    </View>
  )
};

export default SupportChatPage;