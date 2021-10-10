import React from 'react'
import { StyleSheet, Text, View,Image, Pressable } from 'react-native'

export function Card({item}) {
    return (
        <>
        <Pressable style={styles.container} onPress={() => console.log("Clicked !")}>
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
    },
    title:{
        fontWeight:'600',
        fontSize:16,
        marginTop:8,
        minHeight:50
    }

})
