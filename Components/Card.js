import React from 'react'
import { StyleSheet, Text, View,Image, Pressable, Share, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Fonts from Font Awesome

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAlignRight, faShareAlt } from '@fortawesome/free-solid-svg-icons'

// Fonts from Font Awesome

export default function Card({item}) {
    const navigation = useNavigation();
    
    // To share the Website to other platforms
    const shareNews = async (newsURL,newsTITLE) => {
        try {
          const result = await Share.share({
            message: newsTITLE + " \n\n" + newsURL + "\n\n Visit\n https://samvaad.pages.dev \n for latest news \n\n Download our App\n https://samvaad.pages.dev/download",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };
    // To share the Website to other platforms


    return (
        <>
        <Pressable style={styles.container} 
              onPress={() => {
                navigation.navigate('Web', {
                  itemId: item.title,
                  urlToWebSite: item.url,
                });
              }}
            >
            <TouchableOpacity 
                style={styles.share}
                onPress={() => {shareNews(item.url,item.title)}}
                >
                <FontAwesomeIcon icon={faShareAlt} style={{margin:10,}} size={16} color={'white'} />
            </TouchableOpacity>
            <Image 
                style={styles.thumbnail}
                source={{uri: item.urlToImage }}
            />

        <Text style={styles.title} numberOfLines={3}>
            {item.title}
        </Text>
        </Pressable>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        minHeight: 300,
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:18,
        borderBottomColor:'#d7d9db',
        borderBottomWidth:1,
    },
    thumbnail:{
        minHeight:200,
        width:'100%',
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor:'#ddd',
    },
    title:{
        fontWeight:'600',
        fontSize:16,
        marginTop:8,
        minHeight:50,
        lineHeight:24,
        justifyContent:'center',
    },
    share:{
        position:'absolute',
        right: 15,
        top:23,
        zIndex:1,
        backgroundColor:'#6f00ff',
        borderTopRightRadius:10
    }

})