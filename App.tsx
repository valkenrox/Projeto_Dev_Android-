import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login/index';
import SignUp from './src/pages/login/signup';
import Cardapio from './src/pages/cardapio/cardapio';
import Carrinho from './src/pages/cardapio/carrinho';

// Define types for the navigation stack
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Cardapio: undefined;
  Cart: { cart: any[] };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ title: 'Sign Up' }} 
        />

        <Stack.Screen 
          name="Cardapio" 
          component={Cardapio} 
          options={{ title: 'Cardapio' }} 
        />
        <Stack.Screen name="Cart" component={Carrinho} 
        options={{title:'Cart'}}
        />
      
      


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
