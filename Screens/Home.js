import React, { useState,useEffect,useRef } from 'react'
import { ScrollView, StyleSheet, Text, View, RefreshControl, TouchableOpacity, FlatList, Pressable } from 'react-native'
import axios from 'axios'


import Topheader from '../Components/topheader'
import Card from '../Components/Card'

import LoadingCard from '../Components/LoadingCard'
import Error from '../Components/Error'

function Home({navigation}) {

  const [loading,setLoading]= useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError]= useState(false);

// Refreshing Option

  const [refreshing, setRefreshing] = React.useState(false);
    
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = React.useCallback(() => {
    FetchTheNews();
    setRefreshing(true);
    setCountry(country);
    setCategory(category);
  }, []);

// Refreshing Option


  const [showcountry, setShowCountry] = useState(false)
  const [showcategory, setShowCategory] = useState(false)

  const [category,setCategory] = useState("general") // Default Category General
  const [country,setCountry] = useState("in")  // Default India In

  const FetchTheNews = () => {
    setLoading(true);
    setError(false);
    setRefreshing(true);
    axios({
        headers:{'Content-Type': 'application/json',},
        method: 'GET',
        url: `hattps://samvaad-api.herokuapp.com/api/${country}/${category}/20}`,
    })
        .then((response) => {
            // console.log(response.data);
            setNewsData(response.data.articles);
            setLoading(false);
            setRefreshing(false);
        })
        .catch((error) => {
            setError(true)
        })
}

useEffect(() => {
  FetchTheNews();
  setShowCategory(false);
  setShowCountry(false);
},[country,category,onRefresh]);

// For Scroll To Top

const flatlistRef = useRef();

const onPressFunction = () => {
    flatlistRef.current.scrollToIndex({index: 0});
};

// For Scroll To Top
  return (
    <>
      <Topheader SendToFounder={() => navigation.navigate("Founder")}/>

    {error ? <></> :
      <View style={Select.container}>
        <TouchableOpacity
          style={Select.button}
          onPress={() => {setShowCategory(!showcategory);setShowCountry(false)}}
        >
          <Text
            style={Select.thetext}>
            {showcategory ? 'Categories' : `${category}`}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Select.button}
          onPress={() => {setShowCountry(!showcountry);setShowCategory(false)}}
        >
          <Text
            style={Select.thetext}
          >
            {showcountry ? 'Countries' : `${country}`}
          </Text>
        </TouchableOpacity>
      </View>
    }


      {showcategory ?
        <ScrollView style={choose.select}>
          <View style={Times.timesContainer}>
          <TouchableOpacity style={Times.button} onPress={() => {setShowCategory(!showcategory);}}>
            <Text style={Times.timesX}>&times;</Text>
          </TouchableOpacity>
          </View>

        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("general")}> 
          <Text style={optionListItem.thetext}>general</Text>
        </TouchableOpacity>
        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("business")}> 
          <Text style={optionListItem.thetext}>business</Text>
        </TouchableOpacity>
        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("entertainment")}> 
          <Text style={optionListItem.thetext}>entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("health")}> 
          <Text style={optionListItem.thetext}>health</Text>
        </TouchableOpacity>
        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("science")}> 
          <Text style={optionListItem.thetext}>science</Text>
        </TouchableOpacity>
        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("sports")}> 
          <Text style={optionListItem.thetext}>sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={optionListItem.butt} onPress={()=> setCategory("technology")}> 
          <Text style={optionListItem.thetext}>technology</Text>
        </TouchableOpacity>

        </ScrollView>
        :
        showcountry ?
        <ScrollView style={choose.select}>
          <View style={Times.timesContainer}>
          <TouchableOpacity style={Times.button} onPress={() => {setShowCountry(!showcountry)} }>
            <Text style={Times.timesX}>&times;</Text>
          </TouchableOpacity>
          </View>


          <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("in")}>
        <Text style={optionListItem.thetext}
            >India
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ae")}>
        <Text style={optionListItem.thetext}
            >United Arab Emirates 
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ar")}>
        <Text style={optionListItem.thetext}
            >Argentina
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("at")}>
        <Text style={optionListItem.thetext}
            >Austria
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("au")}>
        <Text style={optionListItem.thetext}
            >Australia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("be")}>
        <Text style={optionListItem.thetext}
            >Belgium
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("bg")}>
        <Text style={optionListItem.thetext}
            >Bulgaria
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("br")}>
        <Text style={optionListItem.thetext}
            >Brazil
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ca")}>
        <Text style={optionListItem.thetext}
            >Canada
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ch")}>
        <Text style={optionListItem.thetext}
            >Switzerland
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("cn")}>
        <Text style={optionListItem.thetext}
            >China
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("co")}>
        <Text style={optionListItem.thetext}
            >Colombia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("cu")}>
        <Text style={optionListItem.thetext}
            >Cuba
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("cz")}>
        <Text style={optionListItem.thetext}
            >Czech
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("de")}>
        <Text style={optionListItem.thetext}
            >Germany
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("eg")}>
        <Text style={optionListItem.thetext}
            >Egypt
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("fr")}>
        <Text style={optionListItem.thetext}
            >France
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("gb")}>
        <Text style={optionListItem.thetext}
            >United Kingdom
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("gr")}>
        <Text style={optionListItem.thetext}
            >Greece
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("hk")}>
        <Text style={optionListItem.thetext}
            >Hong Kong
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("hu")}>
        <Text style={optionListItem.thetext}
            >Hungary
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("id")}>
        <Text style={optionListItem.thetext}
            >Indonesia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ie")}>
        <Text style={optionListItem.thetext}
            >Ireland
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("il")}>
        <Text style={optionListItem.thetext}
            >Isreal
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("it")}>
        <Text style={optionListItem.thetext}
            >Italy
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("jp")}>
        <Text style={optionListItem.thetext}
            >Japan
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("kr")}>
        <Text style={optionListItem.thetext}
            >South Korea
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("lt")}>
        <Text style={optionListItem.thetext}
            >Lithuania
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("lv")}>
        <Text style={optionListItem.thetext}
            >Latvia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ma")}>
        <Text style={optionListItem.thetext}
            >Morocco
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("mx")}>
        <Text style={optionListItem.thetext}
            >Mexico
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("my")}>
        <Text style={optionListItem.thetext}
            >Malaysia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ng")}>
        <Text style={optionListItem.thetext}
            >Nigeria
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("nl")}>
        <Text style={optionListItem.thetext}
            >Netherlands
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("no")}>
        <Text style={optionListItem.thetext}
            >Norway
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("nz")}>
        <Text style={optionListItem.thetext}
            >New Zealand
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ph")}>
        <Text style={optionListItem.thetext}
            >Phillipines
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("pl")}>
        <Text style={optionListItem.thetext}
            >Poland
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("pt")}>
        <Text style={optionListItem.thetext}
            >Portugal
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ro")}>
        <Text style={optionListItem.thetext}
            >Romania
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("rs")}>
        <Text style={optionListItem.thetext}
            >Serbia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ru")}>
        <Text style={optionListItem.thetext}
            >Russia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("sa")}>
        <Text style={optionListItem.thetext}
            >South Africa
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("se")}>
        <Text style={optionListItem.thetext}
            >Sweden
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("sg")}>
        <Text style={optionListItem.thetext}
            >Singapore
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("si")}>
        <Text style={optionListItem.thetext}
            >Slovenia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("sk")}>
        <Text style={optionListItem.thetext}
            >Slovakia
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("th")}>
        <Text style={optionListItem.thetext}
            >Thailand
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("tr")}>
        <Text style={optionListItem.thetext}
            >Turkey
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("tw")}>
        <Text style={optionListItem.thetext}
            >Taiwan
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ua")}>
        <Text style={optionListItem.thetext}
            >Ukraine
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("us")}>
        <Text style={optionListItem.thetext}
            >United States of America
        </Text>
        </TouchableOpacity>
    <TouchableOpacity style={optionListItem.butt} onPress={()=> setCountry("ve")}>
        <Text style={optionListItem.thetext}
            >Venezuela
        </Text>
        </TouchableOpacity>


        </ScrollView>
        :
        error ?
        <Error ErrorOnRefresh = {onRefresh} />
        :
        loading ?
        <LoadingCard />
        :
        <>
        <FlatList 
          data={newsData}
          keyExtractor={(item,index)=> 'key' + index}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({item})=>{return (<Card item ={item}/>)}} 
          ref={flatlistRef}

        />
            <Pressable style={ScrollToTop.button} onPress={onPressFunction}>
                <Text style={ScrollToTop.arrow}>^</Text>
            </Pressable>
        </>
      }
    </>
  )
}

export default Home;

const ScrollToTop = StyleSheet.create({
    button: {
      position: 'absolute',
      width:  50,
      height: 50,
      borderRadius: 50 / 2,
      backgroundColor: '#6f00ff',
      alignItems: 'center',
      justifyContent: 'center',
      right:  20,
      bottom: 20,
      elevation:10
    },
    arrow: {
      color: '#fff',
      fontSize: 50,
    },
  });

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#444',
    },
    webview: {
      flex: 1,
    },
    modali: {
      width: 200,
      maxHeight: 100,
      backgroundColor: "#333"
    },
    Images:{
      width:'100%',
      minHeight:200,
    }
  })
  
  const choose = StyleSheet.create({
    select: {
      backgroundColor: '#f5f6',
      paddingTop: 3,
      paddingBottom: 100,
      paddingHorizontal: 8,  
    }
  })
  
  
  
  const Select = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    button: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: '#6f00ff',
      elevation: 3,
      borderRadius: 4
    },
    thetext: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fff',
      textTransform:'capitalize'
    }
  })
  
  const Times = StyleSheet.create({
    timesContainer:{
  
      borderRadius:8,
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'flex-end',
    },
    button:{
      width:70,
      // backgroundColor:'#fff',
      height:53
    },
    timesX:{
      textAlign:'right',
      paddingVertical: 0,
      paddingHorizontal: 8,
      fontSize: 55,
      fontWeight:'800',
      color:'#6f00ff',
      position:'relative',
      top: -18,
    }
  })
  
  
  const optionListItem = StyleSheet.create({
    butt: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginVertical: 5,
        paddingVertical: 12,
        borderRadius: 16
    },
    thetext:{
        fontSize:18,
        color:'#666',
        textAlign:'center',
        fontWeight:'700',
        textTransform:'uppercase'
    }
  })
  
  