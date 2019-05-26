import React, {Component} from 'react'
import { Text, StyleSheet} from 'react-native'
import {Container, Content, Header, Left, Icon, Right} from 'native-base'


export default class HomePage extends Component {
    static navigationOptions = {
        title: 'Home'
      };

    render() {
        
        return(
            <Container>
                <Header androidStatusBarColor="#fff" style={styles.head}> 
                    <Left> 
                        <Icon 
                            name='ios-menu'
                            color='#fff'
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

const styles = StyleSheet.create({
    home: {
        fontSize: 20
    },
    head: {
        backgroundColor: '#fff' 
    }
})
