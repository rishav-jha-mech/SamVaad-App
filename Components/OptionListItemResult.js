import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const OptionListItemResult = ( props ) => {

    return (
        <TouchableOpacity style={styles.butt} onPress={() => props.setTheNoOfResults(props.Number)}>
            <Text style={styles.thetext}>
                {props.Letter}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionListItemResult

const styles = StyleSheet.create({
    butt: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 8,
        paddingVertical: 12,
        backgroundColor:'#6f00ff',
        marginVertical: 6,
        marginHorizontal: 26,
    },
    thetext: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'capitalize',
        letterSpacing: 1
    }
})
