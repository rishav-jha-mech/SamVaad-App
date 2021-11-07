import React from 'react'
import { StyleSheet, Text, Modal, Pressable, ScrollView } from 'react-native'
import CategoriesList from './CategoriesList'
import OptionListItemCategory from './OptionListItemCategory'

const ShowCategory = (props) => {
    return (
        <Modal
            visible={true}
            transparent={true}
            animationType={'fade'}
        >
            <Pressable style={choose.innerContainer} onPress={() => props.setShow(false)}>
                <ScrollView style={choose.ScrollContainer}>
                    <Pressable>
                        <Text style={choose.Header}>Select Category</Text>
                        {CategoriesList.map((data, index) => {
                            return (
                                <OptionListItemCategory key={index} data={data} setTheCategory={(TheCategory) => props.settheCategory(TheCategory)} />
                            )
                        })}
                    </Pressable>
                </ScrollView>
            </Pressable>
        </Modal>
    )
}

export default ShowCategory

const choose = StyleSheet.create({
    ScrollContainer: {
        backgroundColor: '#fff',
        width:'100%',
        minHeight:'75%',
        maxHeight:'81%',
        borderRadius: 6,
        elevation:8,
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)',
        paddingHorizontal: 14
    },
    Header:{
        fontSize: 32,
        fontWeight:'700',
        marginVertical: 20,
        color:'#000',
        textAlign:'center',
        letterSpacing:0.5
    },
})
