import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";

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
            <Text style={style.title}>Sign Up</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={style.input}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={style.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={style.input}
                secureTextEntry
            />
            <TouchableOpacity style={style.button} onPress={handleSignUp}>
                <Text style={style.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}
