import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import React from 'react'
import HomePage from './../pages/HomePage/HomePage';
import SobrePage from './../pages/SobrePage/SobrePage';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Container, Content, Header, Body, Icon, Footer, Button } from 'native-base';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import LoginPage from './../pages/LoginPage/LoginPage';



    const DrawerApp = createDrawerNavigator({
        HomePage: HomePage,
        SobrePage: SobrePage,
        LoginPage: LoginPage
    }, 
    {
        initialRouteName: 'HomePage',
        contentComponent: (props, {navigation}) => {
            return(
            <View style={{flex: 1}}>
                <Header androidStatusBarColor="#666" style={{height: 150, backgroundColor: '#666'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 60, height: 60}} source={require('../assets/user.png')}/>
                        <View>
                            <Text style={{fontSize: 15, marginLeft: 20, color: '#fff'}}>Milton Freedman</Text>
                            <Text style={{fontSize: 15, marginLeft: 20, color: '#fff'}}>Petrópolis, RJ</Text>
                        </View> 
                    </View>
                </Header>
                <SafeAreaView>
                    <DrawerItems activeTintColor='#000' {...props} />
                </SafeAreaView>
            </View>
            )
        },
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    },)



export default createAppContainer(DrawerApp);