import React from 'react'
import { StyleSheet, Text, Pressable, Image } from 'react-native'

export default function topheader( { SendToFounder } ) {
    const callBack = () =>{
        SendToFounder();
    }

    return (
        <Pressable style={styles.Container} onPress={() => callBack()}>
            <Image style={styles.logo}
                source = {{ uri:'https://samvaad.pages.dev/SamVaadLogo.png' }}
            />
            <Text style={styles.Samvaad}>SamVaad</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    Container:{
        padding:15,
        backgroundColor: '#fff',
        elevation: 2
    },
    logo:{
        position:'absolute',
        top:15,
        left: 15,
        height: 46,
        width:  46
    },
    Samvaad:{
        fontSize: 36,
        color: '#6f00ff',
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.05)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15
    }
})
