import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { themas } from "../../global/themes";
//import style from '../login/style';

const Cart = ({ route, navigation }: { route: any; navigation: any }) => {
    const { cart } = route.params;
  
    const total = cart.reduce((sum: number, item: { preco: string; quantity: number }) => {
      return sum + parseFloat(item.preco) * item.quantity;
    }, 0
);
    
  
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
            </View>
          )}
        />
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Compra finalizada!')}
        >
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </TouchableOpacity>


      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom:200,

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

}
});

export default Cart;
