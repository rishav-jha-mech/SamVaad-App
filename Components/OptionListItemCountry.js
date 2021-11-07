import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const OptionListItem = (data) => {
    console.log(data)
    return (
        <TouchableOpacity style={styles.butt} onPress={() => data.setTheCountry(data.CountryCode)}>
            <Text style={styles.thetext}>
                {data.CountryName}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionListItem

const styles = StyleSheet.create({
    butt: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginVertical: 5,
        paddingVertical: 12,
        borderRadius: 16
    },
    thetext: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase'
    }
})
