import React from 'react'
import { Pressable, StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft, faArrowLeft, } from '@fortawesome/free-solid-svg-icons'
import { Dimensions } from 'react-native'
import styles from './MyStyles'


const Founder = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const bgpic1 = { uri: "https://i.pinimg.com/736x/a3/77/dc/a377dc63e6359b0af98451eec36fc023.jpg" };
    const bgpic2 = { uri: "https://www.personality-database.com/profile_images/30000.png" };

    return (
        <View style={styles.container}>
            
            <Pressable style={styles.Header}  onPress={() => {navigation.navigate("Home")} }>
                    <FontAwesomeIcon icon={faArrowLeft} size={22} color={'white'} />
                    <Text style={styles.Heading}> SamVaad </Text>
            </Pressable>

            <ScrollView style={[styles.Scrollview]}>

                <View style={styles.Children1}>

                    <Image style={styles.ProfilePic} source={bgpic2} />
                    
                    {/* <Text style={styles.TheText}> ऋषभ झा </Text> */}
                    <Text style={styles.primaryText}> Rishav Jha </Text>
                    <Text style={styles.secondaryText}> Full Stack Web &amp; App Developer</Text>

                </View>
                <View style={styles.Children2}>
                    <Text style={styles.primaryHeading}> About Me </Text>
                    <View style={styles.textContainer}>
                    <Text style={styles.normalText}>
                        I am Rishav Jha, a Full stack Web &amp; App Developer. I am currently pursuing Btech. in Mechanical Engineering From National Institute of Technology Durgapur. I use Django &amp; Flask for making the Backend of most of my websites and i will be using Node/Express in my futture projects. For the Frontend i use React Js and sometimes Jinja2 the templating engine provided by Django, and for the App development i use React Native though i am planning to move on to Native App Developement for Android.
                    </Text>
                    </View>
                </View>
                <View style={styles.Children2}>
                <Text style={styles.primaryHeading}> My Skills </Text>
                    <View style={styles.skillsContainer}>
                        <Text style={styles.skillsElement}>HTML</Text>
                        <Text style={styles.skillsElement}>CSS</Text>
                        <Text style={styles.skillsElement}>Bootstrap</Text>
                        <Text style={styles.skillsElement}>Tailwind</Text>
                        <Text style={styles.skillsElement}>Material UI</Text>
                        <Text style={styles.skillsElement}>React</Text>
                        <Text style={styles.skillsElement}>React Native</Text>
                        <Text style={styles.skillsElement}>Flask</Text>
                        <Text style={styles.skillsElement}>Django</Text>
                        <Text style={styles.skillsElement}>SQLite3</Text>
                        <Text style={styles.skillsElement}>GIT</Text>
                        <Text style={styles.skillsElement}>Heroku</Text>
                        <Text style={styles.skillsElement}>Python</Text>
                        <Text style={styles.skillsElement}>Java</Text>
                        <Text style={styles.skillsElement}>C</Text>
                        <Text style={styles.skillsElement}>C++</Text>
                    </View>
                </View>
                <View style={styles.Children2}>
                    
                </View>
            </ScrollView>


            <ImageBackground
                style={[styles.fixed, styles.container, {zIndex: -1}]}
                source={bgpic1}
            />
        </View>
    )
}

export default Founder
