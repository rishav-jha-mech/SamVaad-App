import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function OptionList(props) {
    return (
        <TouchableOpacity
            style={styles.butt}
        >
            <Text
                style={styles.thetext}
            >
                {props.data}</Text>
        </TouchableOpacity>
    )
}
{/*
<style>
    *{
        background-color: #6f00ff1e;
    }
</style>
*/}
const styles = StyleSheet.create({
    butt: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginVertical: 5,
        paddingVertical: 12,
        borderRadius: 16
    },
    thetext:{
        fontSize:18,
        color:'#666',
        textAlign:'center',
        fontWeight:'700',
        textTransform:'uppercase'
    }
})