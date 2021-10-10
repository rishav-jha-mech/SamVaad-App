import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Error() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Message}>
                Error Fetching The News 
            </Text>
            <Text style={styles.Message}>
                Try Checking your internet connection and try again 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    Container:{
        flex:1,
        backgroundColor:'#ff56',
        paddingHorizontal: 2,
        paddingVertical:'50%',
        
    },
    Message:{
        fontSize:22,
        fontWeight:'700',
        textAlign:'center',
        marginBottom: 8,
    }

})
