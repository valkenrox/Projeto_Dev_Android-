import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import logo from "../../../assets/logo.png";
import back_bacon from "../../../assets/background_bacon.png";
import smash_tudo from "../../../assets/smash_tudo.png";
import smash_farofa from "../../../assets/smash_duplo_farofa.png";
import tri_chedar from "../../../assets/triplo_cheddar.png";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function handleSignUp() {
        try {
            if (!email || !password || !name) {
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
          <View style={style.logoContainer}>
              <Image 
                  source={back_bacon} 
                  style={style.back_image}
                  resizeMode="contain"
              />
              <Image 
                  source={logo} 
                  style={style.logo2}
                  resizeMode="contain"
              />

              

              

              

          </View>
  
          <View style={style.boxMid}>
              <Text style={style.tit_burguer}>Artesanais de 120g e 160g</Text>

              <Image 
                  source={smash_tudo} 
                  style={style.smash_tudo}
                  resizeMode="contain"
              />
              <Text style={style.titulo}>Smash - tudo R$ 45,99</Text>

              <Image 
                  source={smash_farofa} 
                  style={style.smash_farofa}
                  resizeMode="contain"
              />
              <Text style={style.titulo}>Smash Duplo R$ 49,99</Text>

              <Image 
                  source={tri_chedar} 
                  style={style.tri_chedar}
                  resizeMode="contain"
              />
              <Text style={style.titulo}>Triplo Cheddar R$ 56,99</Text>

          </View>
      </View>
  );
  
}

