import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import logo from "../../../assets/logo.png";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');

    async function handleSignUp() {
        try {
            if (!email || !password || !name || !adress) {
                return Alert.alert("Error", "All fields are required.");
            }
            // Assuming JSON server is running on localhost:3000
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    name
                })
            });

            if (response.ok) {
                Alert.alert("Success", "User registered successfully!");
                // Navigate back to Login screen or other action
            } else {
                Alert.alert("Error", "Could not register user.");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "There was an error registering the user.");
        }
    }



return (
    <View style={style.container}>

        <View style={style.boxTop}>
            <Image 
                source={logo} 
                style={style.logo}
                resizeMode="contain"
            />
        </View>

        <View style={style.boxMid}>
            <Text style={style.titulo}>Nome</Text>
            <View style={style.boxInput}>
                <TextInput 
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    style={style.input}                    
                />
                </View>

            <Text style={style.titulo}>E-mail</Text>
            <View style={style.boxInput}>
                <TextInput 
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}                   
                />
                </View>

                <Text style={style.titulo}>Endereço Completo</Text>
            <View style={style.boxInput}>
                <TextInput 
                    placeholder="Endereço"
                    value={adress}
                    onChangeText={setAdress}
                    style={style.input}                   
                />
                </View>    

            <Text style={style.titulo}>Senha</Text>
            <View style={style.boxInput}>
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={style.input}
                    secureTextEntry                   
                />
                </View>
            
        </View>

        <TouchableOpacity style={style.button} onPress={handleSignUp}>
                <Text style={style.buttonText}>Register</Text>
            </TouchableOpacity>
    </View>
);
}



