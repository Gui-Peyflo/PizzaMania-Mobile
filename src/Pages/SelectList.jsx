import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Button} from 'react-native';
import icon from '../../assets/bebida.png'
import icon2 from '../../assets/pizza.png'




function SelectList({navigation}) {


    const Botoes = () => {
        return(
            <>
                <TouchableHighlight onPress={()=>{
                navigation.push("Lista de Pizzas")}}>
                    <View style={style.container}>
                        <Text style={style.titulo}>Pizza</Text>
                        <Image source={{uri: icon2}} style={style.img} />
                    </View>
                </TouchableHighlight>
                <br/>
                <TouchableHighlight  onPress={()=>{
            navigation.push("Lista de Bebidas")}}>
                    <View style={style.container}>
                        <Text style={style.titulo}>Bebidas</Text>
                        <Image source={{uri: icon}} style={style.img} />
                    </View>
                </TouchableHighlight>
            </>
        )
    }





  return (
      <>
    <ScrollView>
        <View>
            <Botoes />
        </View>
    </ScrollView>
    </>
  );
}


const style = StyleSheet.create({
  
    img:{
        alignSelf:'center',
        marginTop:20,
        width:100,
        height: 100,
        padding:10,
        aspectRatio:1,
        borderRadius:20,
    },
    titulo:{
        display:'flex',
        justifyContent: 'center',
        fontSize:30,
    },
    container:{
        backgroundColor: "#b07471",
        display: 'flex',
        justifyContent: 'center',
        padding:5,
    }
})

export default SelectList;