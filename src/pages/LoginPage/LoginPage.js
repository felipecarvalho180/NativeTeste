import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput} from 'react-native';
import LoginButtons from './LoginButtons/LoginButtons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class LoginPage extends Component{
  state ={
    email: '',
    senha: '',
    emailCadastrado: '123@gmail.com',
    senhaCadastrado: '123',
    error: false
  }

  botaoLogin = () => {
    const email1 = this.state.email;
    const senha1 = this.state.senha;
    const email2 = this.state.emailCadastrado;
    const senha2 = this.state.senhaCadastrado;
    
    if(email1 === email2 && senha1 === senha2){
        this.props.navigation.navigate('DrawerApp')
        this.setState({error: false})
    } else {
      this.setState({error: true})
    }
  }

  render(){
    return(
    <View style={styles.container}>
      <Icon name="lock" color='#666' size={80} style={styles.image}/>
      <TextInput
        placeholder='Email'
        style={styles.inputText}
        onChangeText={(text => this.setState({ email: text }))}
      ></TextInput>
      <TextInput
        placeholder='Senha'
        secureTextEntry
        style={styles.inputText}
        onChangeText={(text => this.setState({ senha: text }))}
      ></TextInput>
      {!this.state.error ? null : <Text style={styles.erro}>Email ou senha incorretos</Text>}
      <LoginButtons botao={this.botaoLogin}/>  
    </View>)}
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
    },
  
    image: {
      marginBottom: 20
    },
  
    erro: {
      color: 'red'
    },
  
    inputText: {
      height: 40,
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 5, 
      width: '80%', 
      margin: 10,
      color: 'gray',
      paddingLeft: 15,
      textDecorationLine: 'none'
    },
  
    botaoEsqSenha: {
      fontSize: 13,
      textAlign: 'center',
      margin: 10,
      textDecorationLine: 'underline',
      padding: 2
    },
  
    botaoLogin: {
      height: 45,
      width: 200,
      marginTop: 40,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#666'
    },
  
    botaoCriarConta: {
      height: 45,
      width: 150,
      margin: 20,
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    }
  });