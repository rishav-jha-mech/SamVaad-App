import React from 'react'
import {StyleSheet,Text,Button} from 'react-native'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native';

export default function OpenWeb( { route } ) {
  const navigation = useNavigation();
  const { itemId, urlToWebSite } = route.params;
  // console.log(urlToWebSite)
  
    return (  
      <WebView
      source = {{ uri: (urlToWebSite) }}
      style={styles.container}
      javaScriptEnabled={true}
      />
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
