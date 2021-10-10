import React, { useState,useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import axios from 'axios'

import Topheader from './Components/topheader'
import CardContainer from './Components/CardContainer'

import CountriesList from './Components/Countries'
import CategoriesList from './Components/Categories'
import OptionList from './Components/OptionList'
import Card from './Components/Card'

export default function App() {

  const [loading,setLoading]= useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError]= useState(false);


  const [showcountry, setShowCountry] = useState(false)
  const [showcategory, setShowCategory] = useState(false)

  const [category,setCategory] = useState("general") // Default India In
  const [country,setCountry] = useState("in")  // Default India In

  const FetchTheNews = () => {
    setLoading(true)
    setError(false)
    axios({
        headers:{'Content-Type': 'application/json',},
        method: 'GET',
        url: `https://samvaad-api.herokuapp.com/api/${country}/${category}/2}`,
    })
        .then((response) => {
            console.log(response.data);
            setNewsData(response.data.articles);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setError(true)
        })
}

useEffect(() => {
  FetchTheNews();
},[country,category]);

console.log(category)

  return (
    <>
      <Topheader />


      <View style={Select.container}>
        <TouchableOpacity
          style={Select.button}
          onPress={() => {setShowCategory(!showcategory);setShowCountry(false)}}
        >
          <Text
            style={Select.thetext}>
            {showcategory ? 'Show Modal' : 'Categories'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Select.button}
          onPress={() => {setShowCountry(!showcountry);setShowCategory(false)}}
        >
          <Text
            style={Select.thetext}
          >
            {showcountry ? 'Show Modal' : 'Countries'}
          </Text>
        </TouchableOpacity>
      </View>



      {showcategory ?
        <ScrollView style={choose.select}>
          <View style={Times.timesContainer}>
          <TouchableOpacity style={Times.button} onPress={() => setShowCategory(!showcategory)}>
            <Text style={Times.timesX}>&times;</Text>
          </TouchableOpacity>
          </View>
          {CategoriesList.map((item) => (
            <OptionList key={item} data={item} onPress={() => {setCategory(`${item}`);}}/>
          ))}

        </ScrollView>
        :
        showcountry ?
        <ScrollView style={choose.select}>
          <View style={Times.timesContainer}>
          <TouchableOpacity style={Times.button} onPress={() => setShowCountry(!showcountry)}>
            <Text style={Times.timesX}>&times;</Text>
          </TouchableOpacity>
          </View>
          {CountriesList.map((item) => (
            <OptionList key={item.code} data={item.country} onPress={() => {setCountry(`${item.code}`);setShowCountry(!showcountry)}}/>
          ))}

        </ScrollView>
        :
        <FlatList data={newsData} keyExtractor={(item,index)=> 'key' + index} renderItem={({item})=>{return (<Card item ={item}/>)}} />
      }
    </>
  )
}

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
    // paddingTop:50,

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