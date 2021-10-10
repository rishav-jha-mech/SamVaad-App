import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'

const DummyData = [1,2,3,4,5,6,7,8]

const TheLoadingCard = () =>{
    return(
        <View style={loading.container}>
            <View useNativeDeicer="true"
                style={loading.thumbnail}
            />
            <Text style={loading.title} />
            <Text style={loading.title} />
            <Text style={[loading.title,loading.lessWidth]} />
        </View>
    )
}

const LoadingCard = () => {
    return (
        <FlatList data={DummyData} keyExtractor={(index)=> 'key' + index} renderItem={({item})=>{return (<TheLoadingCard item ={item}/>)}} />
    )
}

export default LoadingCard


const loading = StyleSheet.create({
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
        backgroundColor:'#999',
        opacity: 0.4
    },
    title:{
        fontWeight:'600',
        fontSize:14,
        marginTop:8,
        backgroundColor:'#999',
        borderRadius: 8,
        marginBottom: -2,
        opacity: 0.4,
    },
    lessWidth:{
        width:'65%'
    }
    
})