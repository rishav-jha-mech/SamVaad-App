import React from 'react'
import { Pressable, StyleSheet, Text, ScrollView, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native';


const ErrorLoadingWebPage = () => {
    const navigation = useNavigation();
    // https://www.monstersandcritics.com/wp-content/uploads/2016/03/secret-life-of-pets-happy-easter.jpg
    return (
        <ScrollView style={styles.Container}>
            <Image style={styles.ErrorImage} source={{uri : 'https://capestylemag.com/wp-content/uploads/2018/04/Snowball-from-The-Secret-Life-of-Pets.jpg'}} />
            <Text style={styles.bigText}>
                Error Loading Page !
            </Text>
            <Text style={styles.smallText}>
                The News which you are searching for may be moved or deleted
            </Text>
            <Text style={styles.smallText}>
                or try checking your internet connection.
            </Text>
            <Pressable style={styles.but} onPress={() => {navigation.navigate('Home')} }>
            <Text style={styles.butText}> Go To Home </Text>
            </Pressable>
        </ScrollView>
    )
}

export default ErrorLoadingWebPage

const styles = StyleSheet.create({
    Container:{
        flex:1,
        padding: 8,
    },
    ErrorImage:{
        minHeight: 320,
        borderRadius:18,
        resizeMode:'cover',
    },
    bigText:{
        fontSize: 35,
        marginVertical:40,
        fontWeight:'800',
        textAlign:'center',
        color:'#000000',
        letterSpacing:1.5
    },
    smallText:{
        fontSize: 24,
        marginVertical: 10,
        fontWeight:'700',
        textAlign:'center',
    },
    but:{
        marginTop: 40,
        backgroundColor:'#6f00ff',
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 5,
    },
    butText:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'700',
        color:'white',
    }
})
