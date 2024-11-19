import React, { useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { Text, Image, TextInput } from "react-native";
import { style } from "./style";
import logo from "../../../assets/logo.png";  // Adjusted import path
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import Signup from "./signup";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import cardapio from "../cardapio/cardapio";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getLogin() {
    if (!email || !password) {
      return Alert.alert("Atenção", "Informe os campos obrigatórios");
    }
    console.log("Logado com sucesso!");
  }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={logo} 
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.title}>Bem vindo ao Mags Brasas Burguer!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titulo}>Login</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        accessibilityLabel="Email input"
                    />
                    <MaterialIcons 
                        size={20}
                        name="mail"
                        color={themas.colors.white}
                    />
                </View>

                <Text style={style.titulo}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Senha"
                        secureTextEntry={true}
                        accessibilityLabel="Password input"
                    />
                    <MaterialIcons 
                        size={20}
                        name="lock"
                        color={themas.colors.white}
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity 
                    style={style.button} 
                    onPress={getLogin}
                    accessibilityLabel="Login button"
                >
                    <Text 
                        style={{ color: themas.colors.white, fontWeight: "bold" }}
                        onPress={() => navigation.navigate('Cardapio')}
                    >
                        Entrar
                    </Text>

                </TouchableOpacity>
            </View>

            <Text style={{ color: themas.colors.white }}>
        Não tem conta?{" "}
        <Text 
          style={{ color: themas.colors.primary, fontWeight: "bold" }}
          onPress={() => navigation.navigate('SignUp')}
        >
          Crie aqui!
        </Text>
      </Text>
        </View>
    );
}
