import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';

const ErrorLoadingWebPage = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.Container}>

            <Text style={styles.bigText}>
                Error Loading Page !
            </Text>
            <Text style={styles.smallText}>
                The News which you are searching for may be moved or deleted
            </Text>
            <Button title="Go To Home" onPress={() => {navigation.navigate('Home')} }/>

        </View>
    )
}

export default ErrorLoadingWebPage

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        padding: 8
    },
    bigText:{
        fontSize: 35,
        marginVertical:40,
        fontWeight:'800',
        textAlign:'center'
    },
    smallText:{
        fontSize:18,
        marginVertical:40,
        fontWeight:'700',
        textAlign:'center'
    }
})
