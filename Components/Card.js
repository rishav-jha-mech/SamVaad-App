import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function Card() {
    return (
        <>
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://images.indianexpress.com/2021/06/Modi-16-1.jpg'}}
            />
        <Text style={styles.author}>
            Nrendra Damodardas Modi
        </Text>
        <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/13/w900X450/Mamata_Banerjee_PTI.jpg?w=400&dpr=2.6'}}
            />
        <Text style={styles.author}>
            Mamta Banerjee
        </Text>
        <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
        
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://c.ndtvimg.com/2019-03/aennqr2c_amit-shah-pti_625x300_04_March_19.jpg'}}
            />
        <Text style={styles.author}>
            Amit Shah
        </Text>
        <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
        
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/yogi_0.jpg?xw4HjZqA1TULuMDxESxKLhy4RxdHsqPY&size=770:433'}}
            />
        <Text style={styles.author}>
            Yogi Adityanath
        </Text>
        <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
        
        <View style={styles.container}>
            <Image 
                style={styles.thumbnail}
                source={{uri:'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/9/27/w900X450/Rahul_PTI.jpg?w=400&dpr=2.6'}}
            />
        <Text style={styles.author}>
            Rahul Gandhi
        </Text>
        <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum laudantium magnam sed sunt aperiam mollitia esse
        </Text>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginVertical:10,
        borderRadius:8,
        minHeight: 300,
        width:'100%',
        elevation:3,
        paddingHorizontal:15,
        paddingVertical:18
    },
    thumbnail:{
        minHeight:200,
        width:'100%',
        borderRadius:5,
        marginVertical: 5,
    },
    author:{
        fontWeight:'700',
        fontSize:18,
        marginBottom:4
    },
    title:{
        fontWeight:'600',
        fontSize:14
    }

})