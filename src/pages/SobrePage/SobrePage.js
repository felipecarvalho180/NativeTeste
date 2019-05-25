import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Container, Content, Header, Left, Icon, Right} from 'native-base'

export default class SobrePage extends Component {
    render(){
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
                    justifyContent: 'center'
                }}>
                    <Text style={styles.sobre}>Sobre</Text>
                </Content>
            </Container>
        )
    }
}

SobrePage.navigationOptions = {
    title: 'Sobre'
  }

  const styles = StyleSheet.create({
    sobre: {
        fontSize: 20
    },
    head: {
        backgroundColor: '#666'
    }
})