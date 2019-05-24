import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomePage = () => ( 
    <View style={styles.container}>
        <Text style={styles.home}>Home</Text>
    </View>
)

HomePage.navigationOptions = {
    title: 'Home',
  }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    home: {
        fontSize: 20
    },
})

export default HomePage;