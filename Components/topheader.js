import React from 'react'
import { StyleSheet, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function topheader( props ) {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.Container} onPress={() => navigation.navigate("Founder")}>

            <Image style={styles.logo}
                source = {{ uri:'https://samvaad.pages.dev/SamVaadLogo.png' }}
            />

            <Text style={styles.Samvaad}>SamVaad</Text>

            {props.isError ? <></> : // If there is any error this badge will not be shown
                <Pressable style={styles.resultsContainer} onPress={() => props.setshowResults(true)}>
                    <Text style={styles.resultsText}>{props.results}</Text>
                </Pressable>
            }

        </Pressable>
    )
}

const styles = StyleSheet.create({

    Container:{
        padding:15,
        backgroundColor: '#fff',
        elevation: 2,
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
        textShadowRadius:15,
    },
    resultsContainer:{
        position:'absolute',
        top:'38%',
        right: 14,
        backgroundColor:'#6f00ff',
        width:  46,
        paddingHorizontal:8,
        paddingVertical:10,
        borderRadius: 100,
    },
    resultsText:{
        fontSize: 19,
        fontWeight:'700',
        textAlign:'center',
        textAlignVertical:'center',
        color:'#fff'
    }
})
