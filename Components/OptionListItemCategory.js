import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const OptionListItemCategory = (prop) => {

    return (
        <TouchableOpacity style={styles.butt} onPress={() => prop.setTheCategory(prop.data)}>
            <Text style={styles.thetext}>
                {prop.data}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionListItemCategory

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
