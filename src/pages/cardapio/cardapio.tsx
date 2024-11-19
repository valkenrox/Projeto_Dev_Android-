import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import logo2 from "../../../assets/logo.png";
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
//import Ionicons from '@expo/vector-icons/Ionicons';
import back_bacon from "../../../assets/back-bacon.jpg";
import { style } from './style';
import { themas } from "../../global/themes";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import Carrinho from "../cardapio/carrinho"

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const ofertas = [
  {
    id: 1,
    titulo: "Smash Tudo ",
    descricao: "Este prato é composto por um smash de 80g com presunto, cheddar derretido, bacon crocante e ovo, acompanhado de salada com alface americana, cebola roxa, picles e batata palha.",
    preco: "45,99",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/28f3a836-186e-4b27-8279-f4f6d6ddf52b/202401161203_TR3K_i.jpg"
  },
  {
    id: 2,
    titulo: "Smash Duplo com Farofa de Bacon",
    descricao: "São dois smash de 80g defumados com farofa de bacon. Você escolhe qual das nossas maioneses artesanais ou molho para deixar seu burguer ainda mais gostoso.",
    preco: "49,99",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/28f3a836-186e-4b27-8279-f4f6d6ddf52b/202404291559_W425_i.jpg"
  },
  {
    id: 3,
    titulo: "Triplo Cheddar",
    descricao: "",
    preco: "56,99",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/28f3a836-186e-4b27-8279-f4f6d6ddf52b/202310040440_4O50_i.jpg"
  },
  {
    id: 4,
    titulo: "Batata Mag's",
    descricao: "Batata Crinkle média, crocante por fora e macia por dentro, coberta com Cheddar Melt e cubos de bacon crocantes, formando uma combinação indulgente e saborosa.",
    preco: "35,99",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/28f3a836-186e-4b27-8279-f4f6d6ddf52b/202401222031_4EJ0_i.jpg"
  },
  {
    id: 5,
    titulo: "Porção de Anéis de Cebola M",
    descricao: "Porção de 10 anéis de cebola crocantes, acompanhados de maionese ou molho à escolha.",
    preco: "27,00",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/28f3a836-186e-4b27-8279-f4f6d6ddf52b/202401222120_86DP_i.jpg"
  },
  {
    id: 6,
    titulo: "Ginseng Guaraviton 500ml",
    descricao: "Embalagem 500ml",
    preco: "8,00",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202303281154_i0m5k53odxf.jpg"
  },
  {
    id: 7,
    titulo: "Coca-Cola Zero 350ml",
    descricao: "Lata 350ml",
    preco: "9,00",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210182256_z5wpdgncho.jpg"
  }
];

const App = ({ navigation }:   LoginProps ) => {

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((i) => i.id === item.id);

      
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }

      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };
  return (
    <ScrollView style={styles.container}>

      <View style={style.bannerContainer}>
        <Image source={back_bacon} style={style.back_image} />
        <Image source={logo2} style={style.logo2} />
      </View>

      {ofertas.map(oferta => (
        <View key={oferta.id} style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{oferta.titulo}</Text>
            <Text style={styles.description}>{oferta.descricao}</Text>
            <Text style={styles.price}> R$ {oferta.preco}</Text>
          </View>
          <Image source={{ uri: oferta.imagem }} style={styles.image} />
          <TouchableOpacity onPress={() => addToCart(oferta)}>
            <AntDesign size={40} name="pluscircle" color={themas.colors.primary} />
          </TouchableOpacity>
          
        </View>
      ))}
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart', { cart })}>
          <Text style={styles.buttonText}>Ir para o Carrinho</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000'
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    paddingRight: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  price: {
    fontSize: 16,
    color: '#333'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 5
  },
  icon: {
    marginTop: 5
  },
  button:{
    width:250,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:themas.colors.primary,
    borderRadius:40,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:3
    },
    shadowOpacity:0.29,
    shadowRadius:4.65,
    elevation:7,
    pointerEvents:'box-none',
    marginBottom:200,

},
buttonText:{ 
  fontSize:14,
  color:'#FFF',
  fontWeight:'bold' 

}
});

export default App;
