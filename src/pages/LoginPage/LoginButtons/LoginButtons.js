import React from 'react'
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native'

export default function LoginButtons(props) {
        const esqueceuSenha = () => {
            Alert.alert(
               'Isso ainda não foi implementado. Entre em contato com o suporte.'
            )
        }
        const criarConta = () => {
            Alert.alert(
               'Isso ainda não foi implementado. Entre em contato com o suporte.'
            )
        }
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={esqueceuSenha} >
                    <Text style={styles.EsqSenhaText}>Esqueceu sua senha ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.botao} style={styles.TouchLogin}>
                    <Text style={styles.TouchLoginText}>Fazer Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={criarConta} style={styles.TouchCriarConta}>
                    <Text style={styles.textStyle}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    EsqSenhaText: {
        color: '#666',
        textDecorationLine: 'underline',
        marginBottom: 50,
    },

    TouchLogin: {
        height: 45,
        borderRadius: 30,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginBottom: 10
    },

    TouchLoginText: {
        color: '#FFF',
    },

    TouchCriarConta: {
        height: 45,
        borderRadius: 30,
        borderColor: '#666',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150
    },

    textStyle: {
        color: '#666',
    }
})