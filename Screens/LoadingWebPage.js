import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LoadingWebPage = () => {
    return (
        <View style={loading.Component}>
            <Text style={{fontSize:40}} >Loading ... </Text>
        </View>
    )
}

export default LoadingWebPage

const loading = StyleSheet.create({
    Component:{
        flex:1,
        backgroundColor:'#f6f5'
    }
})
