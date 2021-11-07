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
        borderRadius: 8,
        paddingVertical: 16,
        backgroundColor:'#6f00ff',
        marginVertical: 8,
        marginHorizontal: 24,
    },
    thetext: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1
    }
})
