import React, { useState, useEffect, useRef, useCallback } from 'react'
import { StyleSheet, Text, View, RefreshControl, TouchableOpacity, FlatList, Pressable } from 'react-native'
import axios from 'axios'

import Topheader from '../Components/topheader'
import Card from '../Components/Card'

import LoadingCard from '../Components/LoadingCard'
import Error from '../Components/Error'

// Fonts from Font Awesome

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

// Fonts from Font Awesome

// Container of Countries and & Categories
import ShowCountry from '../Components/ShowCountry'
import ShowCategory from '../Components/ShowCategory'
// Container of Countries and & Categories

function Home({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [newsData, setNewsData] = useState([]);
    const [error, setError] = useState(false);
    const [showcountry, setShowCountry] = useState(false)
    const [showcategory, setShowCategory] = useState(false)
    const [category, setCategory] = useState("general") // Default Category General
    const [country, setCountry] = useState("in")  // Default India In
    const [showup,setShowup] = useState(false) // Hook for arrow up button
    const [results, setResults] = useState()

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        FetchTheNews();
        setRefreshing(true);
        setCountry(country);
        setCategory(category);
    }, []);

    // Refreshing Option

    const FetchTheNews = () => {
        setResults(0)
        setLoading(true);
        setError(false);
        setRefreshing(true);
        axios({
            headers: { 'Content-Type': 'application/json', },
            method: 'GET',
            url: `https://samvaad-api.herokuapp.com/api/${country}/${category}/20}`,
        })
            .then((response) => {
                // console.log(response.data);
                setNewsData(response.data.articles);
                setLoading(false);
                setRefreshing(false);
                setResults(response.data.articles.length)
            })
            .catch((error) => {
                setError(true)
                console.error(error)
            })
    }

    useEffect(() => {
        FetchTheNews();
        setShowCategory(false);
        setShowCountry(false);
    }, [country, category, onRefresh]);
    
    // For Scroll To Top

    const flatlistRef = useRef();

    const scrollToTop = () => {
        flatlistRef.current.scrollToOffset({ animated: true,offset:0 });
    };

    // For Scroll To Top
    return (
        <>
            <Topheader 
              results={results}
              isError ={error}
            />
            {error ? <></> :
                <View style={Select.container}>
                    <TouchableOpacity
                        style={Select.button}
                        onPress={() => setShowCategory(!showcategory)}
                    >
                        <Text
                            style={Select.thetext}>
                            {category}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Select.button}
                        onPress={() => setShowCountry(!showcountry)}
                    >
                        <Text
                            style={Select.thetext}
                        >
                            {country}
                        </Text>
                    </TouchableOpacity>
                </View>
            }


            {showcategory ?
                <ShowCategory
                    settheCategory={(somecategory) => setCategory(somecategory)}
                    setShow={(show) => setShowCategory(show)}
                />
                : <></>}
            {showcountry ?
                <ShowCountry
                    country={country}
                    settheCountry={(TheCountry) => setCountry(TheCountry)}
                    setShow={(show) => setShowCountry(show)}
                />
                : <></>}

            {error ?
                <Error ErrorOnRefresh={onRefresh} />
                :
                loading ?
                    <LoadingCard />
                    :
                    <>
                        <FlatList
                            data={newsData}
                            keyExtractor={(item, index) => 'key' + index}
                            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                            renderItem={({ item }) => { return (<Card item={item} />) }}
                            ref={flatlistRef}
                            onScroll={(data) => {
                                if (data.nativeEvent.contentOffset.y >= 600) {
                                    setShowup(true)
                                }else{
                                    setShowup(false)
                                }
                            }
                            
                            }
                        />
                        {showup ? 
                            <Pressable style={ScrollToTop.button} onPress={scrollToTop}>
                                <FontAwesomeIcon icon={faArrowUp} color={'white'} size={22} />
                            </Pressable>
                        :<></>}
                    </>
            }
        </>
    )
}

export default Home;

const ScrollToTop = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#6f00ff',
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        elevation: 10
    },
});

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
        textTransform: 'capitalize'
    }
})