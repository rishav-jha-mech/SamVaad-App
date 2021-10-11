import React from 'react'
import { StyleSheet, Text, ScrollView, RefreshControl } from 'react-native'
  

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
            <Text style={styles.Message}>
                Error Fetching The News
            </Text>
            <Text style={styles.Message}>
                Try Checking your internet connection and try again
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
        paddingVertical: '50%',

    },
    Message: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
    }

})
