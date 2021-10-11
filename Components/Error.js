import React from 'react'
import { StyleSheet, Text, ScrollView, RefreshControl, Image, View } from 'react-native'


function Error( { ErrorOnRefresh } ) {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        ErrorOnRefresh();
    }, []);

    return (
        <ScrollView
            style={styles.Container}
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>

            <Image style={styles.ErrorImage} source={require ('./images/SnowBallSad.jpg')} />

            <Text style={styles.BigText}>
                Error Fetching News
            </Text>

            <Text style={styles.SmallText}>
                Try checking your internet connection and try again.
            </Text>

            <View Pressable style={styles.but} >
                <Text style={styles.butText}>
                    Swipe Down To Reload.
                </Text>
            </View>

        </ScrollView>
    )
}

export default Error
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        // backgroundColor: '#ff56',
        paddingHorizontal: 2,
        paddingVertical:16,
        paddingHorizontal:16,

    },
    ErrorImage:{
        maxHeight: 350,
        width: '100%',
        borderRadius: 18,
    },
    BigText: {
        fontSize: 36,
        letterSpacing: 1,
        fontWeight: '800',
        textAlign: 'center',
        marginVertical: 16,
        color:'#000000'
    },
    SmallText:{
        fontSize: 21,
        fontWeight:'700',
        textAlign:'center',
        color:'#333'
    },
    but:{
        marginTop: 40,
        backgroundColor:'#6f00ff',
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 5,
    },
    butText:{
        fontSize:18,
        textAlign:'center',
        fontWeight:'700',
        color:'white',
    }
})

