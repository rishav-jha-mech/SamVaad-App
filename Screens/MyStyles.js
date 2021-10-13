
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
        fontWeight:'700'
    },
    secondaryText:{
        color:'rgba(225,255,255,0.8)',
        textAlign:'center',
        fontSize: 17,
        fontWeight:'700',
        letterSpacing:1
    },
    primaryHeading:{
        color:'rgba(225,255,255,0.8)',
        fontSize: 28,
        fontWeight:'700',
        letterSpacing: 2,
        marginVertical:10

    },
    textContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        minHeight:200,
        marginVertical:14,
        borderRadius:12,
        elevation:5,
        paddingVertical:12,
        paddingHorizontal:16
    },
    normalText:{
        fontSize:15,
        color:'lightblue',
        lineHeight:23,
    },
    skillsContainer:{
        padding:8,
        backgroundColor:'rgba(10, 25, 47, 0.8)',
        borderRadius:12,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:16,
        paddingVertical:12,
        paddingHorizontal:16,
        marginVertical:14,

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
        elevation:5
    }

});

export default styles;
