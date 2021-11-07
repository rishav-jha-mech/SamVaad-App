import React from 'react'
import { StyleSheet, Text, Modal, Pressable, ScrollView } from 'react-native'
import CountriesList from './CountriesList'
import OptionListItemCountry from './OptionListItemCountry'


const ShowCountry = (props) => {

    console.log(props.country)

    return (
        <Modal
            visible={true}
            transparent={true}
            animationType={'fade'}
        >
            <Pressable style={choose.innerContainer} onPress={() => props.setShow(false)}>
                <ScrollView style={choose.ScrollContainer}>
                    <Pressable>
                        <Text style={choose.Header}>Select Country</Text>
                        <Text style={choose.subHeader}> Current Country : </Text>
                        {CountriesList.map((data) => {
                            if (props.country == data.CountryCode)
                                return (
                                    <Text style={choose.CurrentCountry}>
                                        {data.CountryName}
                                    </Text>
                                ) // 3000 IQ 😂
                        })}
                        {CountriesList.map((data, index) => {
                            if (props.country != data.CountryCode) // So the selected Country will not be shown as an option
                                return (
                                    <OptionListItemCountry 
                                        key={index}
                                        CountryCode={data.CountryCode}
                                        CountryName={data.CountryName}
                                        setTheCountry={(CountryCode) => props.settheCountry(CountryCode)} />
                                )
                        })}
                    </Pressable>
                </ScrollView>
            </Pressable>
        </Modal>
    )
}

export default ShowCountry

const choose = StyleSheet.create({
    ScrollContainer: {
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '75%',
        maxHeight: '81%',
        borderRadius: 6,
        elevation: 8,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 14
    },
    Header: {
        fontSize: 32,
        fontWeight: '700',
        marginVertical: 20,
        color: '#000',
        textAlign: 'center',
        letterSpacing: 0.5
    },
    subHeader: {
        marginHorizontal: 24,
        fontWeight: '700',
        color: '#333',
        marginVertical: 6,
        fontSize: 18
    },
    CurrentCountry: {
        backgroundColor: '#ff156f',
        borderRadius: 8,
        paddingVertical: 16,
        marginVertical: 8,
        marginHorizontal: 24,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1
    }
})