import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native';

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center',
    },
});

const Loader = ({ size }) => {
    return(
        <View styles={styles.loader}>
            <ActivityIndicator size={size || 'small'}/>
        </View>
    )
}

 export default Loader;

