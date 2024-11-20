import React, { useState }from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { themas } from "../../global/themes";
//import style from '../login/style';


type CartItem = {
  id: string;
  titulo: string;
  preco: string;
  quantity: number;
};

const Cart = ({ route, navigation }: { route: any; navigation: any }) => {
  const [cart, setCart] = useState<CartItem[]>(route.params.cart); ;
  
    const total = cart.reduce((sum: number, item: { preco: string; quantity: number }) => {
      return sum + parseFloat(item.preco) * item.quantity;
    }, 0
);
const [isSaving, setIsSaving] = useState(false);
async function handleSaveCart() {
  try {
      setIsSaving(true);

      
      if (cart.length === 0) {
          setIsSaving(false);
          return Alert.alert("Aviso", "O carrinho está vazio!");
      }

      const response = await fetch("http://192.168.1.97:3001/cart", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              items: cart,
              total: total.toFixed(2),
              date: new Date().toISOString(),
          }),
      });

      if (!response.ok) {
          throw new Error("Erro ao salvar os itens do carrinho no servidor.");
      }

      Alert.alert("Sucesso", "Compra finalizada!",
        [
          {
            text: "OK",
            onPress: navigation.navigate("Cardapio")
          }
        ]
      );
  } catch (error) {
      console.error("Erro ao salvar o carrinho:", error);
      Alert.alert("Erro", "Não foi possível finalizar a compra.");
  } finally {
      setIsSaving(false);
  }
}

function handleRemoveItem(id: string) {
  const updatedCart = cart.filter((item => item.id !== id));
  setCart(updatedCart); // Atualiza o estado local
  Alert.alert("Item Removido", "O item foi removido do carrinho.");
}
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Seu Carrinho</Text>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.titulo}</Text>
              <Text>Quantidade: {item.quantity}</Text>
              <Text>Preço Unitário: R$ {item.preco}</Text>
              <Text>Subtotal: R$ {parseFloat(item.preco) * item.quantity}</Text>
              {/* Botão para remover item */}
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemoveItem(item.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
            </View>
          )}
        />
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSaveCart}
          disabled={isSaving}
        >
          <Text style={styles.buttonText}>
          {isSaving ? "Finalizando a compra..." : "Finalizar Compra"}
          </Text>
        </TouchableOpacity>


      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  item: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
    color: 'white',
    marginEnd: 20,
    marginVertical: 30,
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
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
    marginBottom:20,

},
buttonText:{ 
    fontSize:14,
    color:'#FFF',
    fontWeight:'bold' 
    

},
buttonSecundary:{
    width:250,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:themas.colors.gray,
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
removeButton: {
  marginTop: 10,
  padding: 10,
  backgroundColor: '#FF6347',
  borderRadius: 8,
},
removeButtonText: {
  color: '#fff',
  textAlign: 'center',
},

});

export default Cart;
