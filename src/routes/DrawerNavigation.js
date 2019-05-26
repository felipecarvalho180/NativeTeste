import { createAppContainer, createDrawerNavigator} from 'react-navigation';
import React from 'react'
import HomePage from './../pages/HomePage/HomePage';
import SobrePage from './../pages/SobrePage/SobrePage';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

    const DrawerApp = createDrawerNavigator({
        HomePage: {
            screen: HomePage,
            
        },
        SobrePage: {
            screen: SobrePage
        }
    },{
        initialRouteName: 'HomePage',
        contentComponent: props => {
            const styles = StyleSheet.create({
                container: {
                    flex: 1
                },
                header: {
                    height: 150,
                    backgroundColor: '#808080',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    padding: 10
                },
                headerInform1: {
                    paddingLeft: 10,
                    color: '#fff',
                    fontSize: 20
                },
                headerInform2: {
                    paddingLeft: 10,
                    color: '#fff'
                },
                logOutContainer: {
                    justifyContent: 'flex-end', 
                    alignItems: 'center',
                    backgroundColor: 'black'
                },
                logOutButton: {
                    backgroundColor: '#808080',
                    height: 50,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                logOutButtonText: {
                    color: '#fff',
                    fontSize: 15
                }
            })

            return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon name="user-circle-o" size={60} color='#fff'/>
                    <View >
                        <Text style={styles.headerInform1}>Milton Freedman</Text>
                        <Text style={styles.headerInform2}>Petrópolis, RJ</Text>
                    </View>
                </View>
                <ScrollView>
                    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                    </SafeAreaView>
                </ScrollView>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity 
                        style={styles.logOutButton}
                        onPress={() => props.navigation.navigate('LoginPage')}>
                        <Text style={styles.logOutButtonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }   
    }) 


export default createAppContainer(DrawerApp);