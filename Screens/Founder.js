import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";

const prof = { uri: "https://static.wikia.nocookie.net/animated-animals/images/8/8b/766857_008.jpg/revision/latest?cb=20190702040613" }

const Founder = () => (
    <>
        <Text style={styles.text}>Developed By</Text>
        <ScrollView style={styles.container}>
            <View style={styles.ProfileContainer}>
                <Image style={styles.profilePic} source={prof} />
                <Text style={styles.myname}> Rishav Jha </Text>
                <Text style={styles.myskill}> Full Stack Developer </Text>
            </View>
            <ScrollView style={styles.Description}>
            <View style={styles.Contents}>
                <Text style={styles.heading}> About Me </Text>
                <Text style={styles.detail}> Full Stack Developer </Text>
            </View>
            <View style={styles.Contents}>
                <Text style={styles.heading}> About Me </Text>
                <Text style={styles.detail}> Full Stack Developer </Text>
            </View>
            <View style={styles.Contents}>
                <Text style={styles.heading}> About Me </Text>
                <Text style={styles.detail}> Full Stack Developer </Text>
            </View>
            
            </ScrollView>
        </ScrollView>
    </>
);




const styles = StyleSheet.create({
    Description:{
        backgroundColor:'#fff',
        borderTopLeftRadius:  20,
        borderTopRightRadius: 20,
        marginHorizontal: 8,
        elevation:4

    },
    Contents:{
        backgroundColor:'#ff2',
        minHeight:320,
        marginHorizontal: 4
    },
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    image: {
        flex: 1,
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#CBE4F9",
        letterSpacing: 2,
        paddingVertical: 10,
        color:"#000",
        elevation: 6
    },
    ProfileContainer: {
        // backgroundColor:'lightblue',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: 'lightblue'
    },
    profilePic: {
        height: 240,
        width: 240,
        borderRadius: 120,
    },
    myname: {
        fontSize: 35,
        fontWeight: '700',
        color: '#000'
    },
    myskill: {
        fontSize: 16,
        fontWeight: '800',

    }
});

export default Founder;