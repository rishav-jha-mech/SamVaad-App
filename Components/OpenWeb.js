import React from 'react'
import {StyleSheet} from 'react-native'
import { WebView } from 'react-native-webview'

export default function OpenWeb() {
    return (  
      <WebView
      source = {{ uri:'https://samvaad.pages.dev' }}
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
