import React from 'react'
import { StyleSheet, Text, Modal, Pressable, ScrollView } from 'react-native'
import NoOfNewsList from './NoOfNewsList'
import OptionListItemResult from './OptionListItemResult'

const ShowResults = (props) => {
    return (
        <Modal
            visible={true}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => props.setShow(false)}
        >
            <Pressable style={choose.innerContainer} onPress={() => props.setShow(false)}>
                <ScrollView style={choose.ScrollContainer}>
                    <Pressable>
                        <Text style={choose.Header}>Select Number Of Results</Text>                        
                        <Text style={choose.subHeader}> Currently : </Text>
                        {NoOfNewsList.map((data) => {
                            if (props.NoOfNews == data.Number)
                                return (
                                    <Text style={choose.CurrentItem}>
                                        {data.Letter}
                                    </Text>
                                )
                        })}
                        {NoOfNewsList.map((data, index) => {
                            if (props.NoOfNews != data.Number)
                            return(
                                <OptionListItemResult 
                                    key={index}
                                    Number={data.Number}
                                    Letter={data.Letter}
                                    setTheNoOfResults={(no) => props.settheResult(no)}
                                />
                            )
                        })}
                        <Text style={choose.Note}>Note :  This is the minimum number of news which you may get.</Text>
                    </Pressable>
                </ScrollView>
            </Pressable>
        </Modal>
    )
}

export default ShowResults


const choose = StyleSheet.create({
    ScrollContainer: {
        backgroundColor: '#fff',
        width:'100%',
        minHeight:'65%',
        maxHeight:'75%',
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
        fontSize: 24,
        fontWeight:'700',
        marginVertical: 20,
        color:'#000',
        textAlign:'center',
        letterSpacing:0.5
    },
    subHeader: {
        marginHorizontal: 24,
        fontWeight: '700',
        color: '#333',
        marginVertical: 6,
        fontSize: 18
    },
    CurrentItem: {
        backgroundColor: '#ff156f',
        borderRadius: 8,
        paddingVertical: 16,
        marginVertical: 8,
        marginHorizontal: 24,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1,
        textTransform:'capitalize'
    },
    Note:{
        fontWeight:'600',
        color:'#000',
        paddingVertical: 16,
        marginVertical: 8,
        marginHorizontal: 24,
    }
})
