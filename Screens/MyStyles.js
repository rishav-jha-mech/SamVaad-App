
import { Dimensions, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height //for full screen
    },
    fixed: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:'white'
    },
    Scrollview:{
        flex:1
    },
    Header:{
        paddingVertical:18,
        paddingLeft: 10,
        backgroundColor:'rgba(255,255,255,0.16)',
        elevation:10,
        flexDirection:'row',
        alignItems:'center',
    },
    Heading:{
        color:'#fff',
        fontWeight:'800',
        fontSize: 30,
        marginLeft: 4,
        letterSpacing:1,
        textShadowColor: 'rgba(0, 0, 0, 0.20)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15
    },
    Children1:{
        minHeight:400,
        padding:5,
        backgroundColor:'rgba(255,255,255,0.05)',
        borderBottomWidth:1,
        borderBottomColor:'rgba(255,255,255,0.4)',
    },
    Children2:{
        minHeight:350,
        padding:5,
        backgroundColor:'rgba(255,255,255,0.05)',
        borderBottomWidth:1,
        borderBottomColor:'rgba(255,255,255,0.4)',
    },
    ProfilePic:{
        height: 250,
        width:  250,
        borderRadius:125,
        alignSelf:'center',
        marginTop: 16,
        borderColor:'#6f00ff',
        borderWidth:5,
        marginBottom: 5,
    },
    primaryText:{
        color:'#ccd6f6',
        textAlign:'center',
        fontSize: 38,
        fontWeight:'700',
        textShadowColor: 'rgba(0, 0, 0, 0.60)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15,
        letterSpacing:1
    },
    secondaryText:{
        color:'rgba(225,255,255,0.8)',
        textAlign:'center',
        fontSize: 17,
        fontWeight:'700',
        letterSpacing:1,
        
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15
    },
    primaryHeading:{
        color:'rgba(225,255,255,0.8)',
        fontSize: 28,
        fontWeight:'700',
        letterSpacing: 2,
        marginVertical:10,
        textShadowColor: 'rgba(0, 0, 0, 0.60)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15,
    },
    textContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        minHeight:200,
        marginVertical:14,
        borderRadius:12,
        elevation:5,
        paddingVertical:12,
        paddingHorizontal:16,
        textShadowColor: 'rgba(0, 0, 0, 0.60)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15,
    },
    normalText:{
        fontSize:15,
        color:'lightblue',
        lineHeight:23,
    },
    skillsContainer:{
        padding:8,
        backgroundColor:'rgba(0,0,0,0.5)',
        borderRadius:12,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:16,
        paddingVertical:12,
        paddingHorizontal:16,
        marginVertical:14,
        elevation:5,

    },
    skillsElement:{
        fontSize:15,
        color:'#64ffda',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius:16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor:'#233554',
        letterSpacing: 1,
        elevation:5,
    },
    samvaadContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        minHeight:200,
        marginVertical:14,
        borderRadius:12,
        elevation:5,
        paddingVertical:12,
        paddingHorizontal:16,
        textShadowColor: 'rgba(0, 0, 0, 0.60)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius:15,
        marginHorizontal: 3
    },
    samvaadText:{
        color:'#64ffda',
        letterSpacing:1,
        lineHeight:22,
        fontSize:15,
    },
    lastContainer:{
        marginBottom:100,
    },
    Thebuttons:{
        backgroundColor: '#0a192f',
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:5,
        marginHorizontal: 10,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
    },
    buttext:{
        color:'lightblue',
        fontWeight:'700',
        flex:1
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
    },

});

export default styles;
