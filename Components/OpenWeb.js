import React, {useState} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native';

import ErrorLoadingWebPage from '../Screens/ErrorLoadingWebPage';


export default function OpenWeb( { route } ) {
  const navigation = useNavigation();
  const [error, setError] = useState(false)
  const { urlToWebSite } = route.params;

    return (  
      <>
        {error ? <ErrorLoadingWebPage /> 
          
          :

          <WebView
            source = {{ uri: 'http:hsrerjhse.com' }}
            style={styles.container}
            javaScriptEnabled={true}
            onError={() => setError(true)}
          />
        }
      </>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
