import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const OptionListItemCountry = (data) => {
    return (
        <TouchableOpacity style={styles.butt} onPress={() => data.setTheCountry(data.CountryCode)}>
            <Text style={styles.thetext}>
                {data.CountryName}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionListItemCountry

const styles = StyleSheet.create({
    butt: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 8,
        paddingVertical: 16,
        backgroundColor:'#6f00ff',
        marginVertical: 8,
        marginHorizontal: 24,
    },
    thetext: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1
    }
})
