import React,{useState} from 'react'
import { Pressable, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, Share,Dimensions,Linking } from 'react-native'
import styles from '../Components/Styles/FounderStyles'

// Fonts from Font Awesome

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

// Fonts from Font Awesome

const Founder = ({ navigation }) => {

    const [togg,setTogg] = useState(false)
  
    // To share the Website to other platforms
    const shareSamVaad = async () => {
        try {
          const result = await Share.share({
            message:"Visit the website to get Latest News From 7 categories across 50+ countries around in the world \n \nhttps://samvaad.pages.dev\n\n*Our App is Available now, you can download it directly from our website*",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };
    // To share the Website to other platforms

    // My Social Media URLS

    const facebookURL = "https://www.facebook.com/profile.php?id=100057462975710"
    const instagramURL = "https://www.instagram.com/r.i.s.h.a.v.j.h.a/"
    const githubURL = "https://github.com/rishav-jha-mech"
    const linkedinURL = "https://www.linkedin.com/in/rishav-jha-549b45203"
    const whatsappURL = "https://api.whatsapp.com/send?text=Hello%20Rishav%2c%0AI%20have%20come%20here%20from%20your%20SamVaad%20app%2E😏&phone=917439876937"
    
    // My Social Media URLS

    // There is, a very small probability that i wili either chane or delete my social media profiles so thi will not cause any error
    // Unless the sites i mentioned here, goes down.

    // To let the user visit my social media profiles
    const Facebook  = () =>{   Linking.openURL(facebookURL).catch((err) =>  alert('Link Not Available Right Now.', err));}
    const Instagram = () =>{   Linking.openURL(instagramURL).catch((err) => alert('Link Not Available Right Now.', err));}
    const Github    = () =>{   Linking.openURL(githubURL).catch((err) =>    alert('Link Not Available Right Now.', err));}
    const Linkedin  = () =>{   Linking.openURL(linkedinURL).catch((err) =>  alert('Link Not Available Right Now.', err));}
    const Whatsapp  = () =>{   Linking.openURL(whatsappURL).catch((err) =>  alert('Link Not Available Right Now.', err));}

    // To let the user visit my social media profiles

    return (
        <View style={styles.container}>
            
            <Pressable style={styles.Header}  onPress={() => {navigation.navigate("Home")} }>
                    <FontAwesomeIcon icon={faArrowLeft} size={22} color={'white'} />
                    <Text style={styles.Heading}> Developed By </Text>
            </Pressable>

            <ScrollView style={styles.Scrollview}>

                <View style={styles.Children1}>

                    <Image style={styles.ProfilePic} source={require ('../Components/images/SnowBall.jpg')} />
                    <TouchableOpacity onPress={() => setTogg(!togg)}>
                    {togg ?
                    <Text style={styles.primaryText}> ऋषभ झा </Text>
                    :
                    <Text style={styles.primaryText}> Rishav Jha </Text>
                    }
                    </TouchableOpacity>
                    <Text style={styles.secondaryText}> Full Stack Web &amp; App Developer</Text>
                    <View style={styles.SMcontainer}>
                        <Pressable  onPress={Facebook}      style={[styles.Facebook,styles.icons]}><FontAwesomeIcon icon={faFacebookF}   color={'white'}    size={22}           /></Pressable>
                        <Pressable  onPress={Instagram}     style={[styles.Instagram,styles.icons]}><FontAwesomeIcon icon={faInstagram}  color={'#ff156f'}    size={26}           /></Pressable>
                        <Pressable  onPress={Github}        style={[styles.Github,styles.icons]}><FontAwesomeIcon icon={faGithub}        color={'white'}    size={28}           /></Pressable>
                        <Pressable  onPress={Linkedin}      style={[styles.Linkedin,styles.icons]}><FontAwesomeIcon icon={faLinkedinIn}  color={'white'}    size={24}           /></Pressable>
                        <Pressable  onPress={Whatsapp}      style={[styles.Whatsapp,styles.icons]}><FontAwesomeIcon icon={faWhatsapp}    color={'white'}    size={26}           /></Pressable>
                    </View>
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
                        <Text style={styles.skillsElement}>Java Script</Text>
                        <Text style={styles.skillsElement}>Bootstrap</Text>
                        <Text style={styles.skillsElement}>Tailwind</Text>
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
                <View style={[styles.Children2,styles.lastContainer]}>
                <Text style={styles.primaryHeading}> About Samvaad </Text>
                    <View style={styles.samvaadContainer}>
                        <Text style={styles.samvaadText}>
                            Samvaad brings you the top news from 7 categories accross 50+ countries. The website is made using React &amp; Django. Django fetches the news from NewsApi which collects authentic and latest news across various categories and countries and sends the data to the client.
                        </Text>
                        <Text style={styles.samvaadText}>
                           Initially during the development phase of SamVaad both Web &amp; App were using Django but because because Django is slower and we dont really need a Database for this project we will be switching to Flask which is Lightweight and Fast and is a perfect match for SamVaad.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.Thebuttons} onPress={() => {
                            navigation.navigate('Web', {
                            itemId: "SamvaadWebsite",
                            urlToWebSite: "https://samvaad.pages.dev",
                            });
                        }}>
                            <Text style={styles.buttext}>Checkout our Website</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Thebuttons} onPress={() => {
                            navigation.navigate('Web', {
                            itemId: "SamvaadWebsite",
                            urlToWebSite: "https://samvaad.pages.dev/blogs", //Coming sooon on the website
                            });
                        }}>
                            <Text style={styles.buttext}>Read Blogs</Text>
                        </TouchableOpacity>
                    </View>
                    <Pressable style={styles.Thebuttons} onPress={shareSamVaad}>
                        <Text style={styles.buttext}>Share SamVaad</Text>
                    </Pressable>
                </View>
            </ScrollView>

            <ImageBackground
                style={[styles.fixed, styles.container, {zIndex: -1}]}
                source={require ('../Components/images/FounderBg.jpg')}
            />
        </View>
    )
}

export default Founder
