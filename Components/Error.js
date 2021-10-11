import React from 'react'
import { StyleSheet, Text, ScrollView, RefreshControl, Image } from 'react-native'


// https://i.pinimg.com/originals/8b/4e/b1/8b4eb142d86b7a1992186bc8175c23e4.jpg
// https://pbs.twimg.com/media/D9vBoveU0AAyNcw.jpg

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

            <Image style={styles.ErrorImage} source={{uri : 'https://i.pinimg.com/originals/8b/4e/b1/8b4eb142d86b7a1992186bc8175c23e4.jpg'}} />

            <Text style={styles.BigText}>
                Error Fetching News
            </Text>

            <Text style={styles.SmallText}>
                Try checking your internet connection and try again.
            </Text>

            
            <Text style={styles.SmallText}>
                Swipe Down To Reload.
            </Text>

        </ScrollView>
    )
}

export default Error
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#ff56',
        paddingHorizontal: 2,
        paddingVertical:16,
        paddingHorizontal:16,

    },
    ErrorImage:{
        minHeight: 340,
        width: '100%',
        borderRadius: 16,
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
        marginBottom: 60,
        color:'#333'
    }

})

