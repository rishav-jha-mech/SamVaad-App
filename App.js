import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Topheader from './Components/topheader'
import CardContainer from './Components/CardContainer'

import CountriesList from './Components/Countries'
import CategoriesList from './Components/Categories'
import OptionList from './Components/OptionList'

export default function App() {
  const [modal, setModal] = useState(false)
  const [showcountry, setShowCountry] = useState(false)
  const [showcategory, setShowCategory] = useState(false)


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
            <OptionList key={item} data={item} />
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
            <OptionList key={item.code} data={item.country} />
          ))}

        </ScrollView>
        :
        <CardContainer />
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