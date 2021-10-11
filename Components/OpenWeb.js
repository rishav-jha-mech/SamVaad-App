import React, {useState} from 'react'
import {StyleSheet,Text,View} from 'react-native'
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native';

// import LoadingWebPage from '../Screens/LoadingWebPage';
import ErrorLoadingWebPage from '../Screens/ErrorLoadingWebPage';


export default function OpenWeb( { route } ) {
  const navigation = useNavigation();
  // const [loading, setLoading] = useState(true) //Cant givve loading here because Loading ends only when the website is completely loaded which takes too much time in some websites, which is annoying, so for now we wont be using it.
  const [error, setError] = useState(false)
  const { urlToWebSite } = route.params;


  // console.log(urlToWebSite)

    return (  
      <>
        {/* {loading ? <LoadingWebPage /> : <></>} */}

        {error ? <ErrorLoadingWebPage /> 
          
          :

          <WebView
            source = {{ uri: "https://google.com" }}
            style={styles.container}
            javaScriptEnabled={true}
            // onLoadStart={() => {setLoading(true);console.log("Loading Started")} }
            // onLoadEnd={() => {setLoading(false);console.log("Loading Ended")} }
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
