import { Dimensions, StyleSheet } from "react-native";
import{themas} from '../../global/themes'

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        padding:20,
        backgroundColor: 'black'
    },
    boxTop:{
        height:Dimensions.get('window').height/4,
        width:520,
        //backgroundColor:themas.colors.white,
        alignItems: 'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:"blue",
        paddingHorizontal: 37,
        marginBottom:20,
    
    },
    boxBottom:{
        
        height:Dimensions.get('window').height/4,
        width:'100%',
        //backgroundColor:'green',
        alignItems: 'center'
    },
    logo:{
        alignItems: 'center',
        height: 150,
        width: 150,
        justifyContent:'center'
    },

    logo2: {
        position: 'absolute',
        width: 250,
        height: 100,
        top: -165,
        left: -250,
        zIndex: 2,  
    },  

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:themas.colors.white
    },

    titulo:{
        fontSize:18,
        fontFamily: 'Arial',
        color: themas.colors.white,
        fontWeight:'semibold',
        marginLeft: 5,
        marginTop:5,
    },

    boxInput:{
        width: '100%',
        height: 40,
        borderWidth:1,
        borderRadius:20,
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        paddingHorizontal: 10,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray

    },
    input:{
        height: '100%',
        width: '90%'
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
    buttonCreate:{
        

    },

    back_image: {
        position: 'absolute',
        width: 500,
        height: 120,
        top: -180,
        left: -250,
        zIndex: 1,
    },

    tit_burguer:{
        fontSize:18,
        fontFamily: 'Arial',
        color: themas.colors.white,
        fontWeight:'semibold',
        marginLeft: -50,
        marginTop:-50,
    },

    smash_tudo: {
        position: 'absolute',
        width: 300,
        height: 125,
        top: -10,
        left: -80,  
    }, 

    smash_farofa: {
        position: 'absolute',
        width: 300,
        height: 125,
        top: -10,
        right: -80,  
    }, 

    tri_chedar: {
        position: 'absolute',
        width: 300,
        height: 125,
        top: 200,
        left: -80,  
    },

});