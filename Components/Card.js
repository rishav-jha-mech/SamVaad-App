import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function Card() {
    return (
        <>
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://images.indianexpress.com/2021/06/Modi-16-1.jpg'}}
            />
        <Text style={styles.title} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/13/w900X450/Mamata_Banerjee_PTI.jpg?w=400&dpr=2.6'}}
            />
        <Text style={styles.title} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
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
        marginTop:8
    }

})