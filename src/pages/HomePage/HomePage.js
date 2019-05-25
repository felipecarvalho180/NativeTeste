import React, {Component} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import {Container, Content, Header, Left, Icon, Right} from 'native-base'


export default class HomePage extends Component {
    render() {
        return(
            <Container>
                <Header androidStatusBarColor="#666" style={styles.head}> 
                    <Left> 
                        <Icon 
                            name='ios-menu'
                            onPress={() => {this.props.navigation.openDrawer()}} />
                    </Left> 
                    <Right></Right>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={styles.home}>Home</Text>
                </Content>
            </Container>
        )
    }
}

HomePage.navigationOptions = {
    title: 'Home',
  }

const styles = StyleSheet.create({
    home: {
        fontSize: 20
    },
    head: {
        backgroundColor: '#666' 
    }
})
