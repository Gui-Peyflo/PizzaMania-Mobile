import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import DataPizzas from './DataPizzas';

function PizzaDetail({route}) {

  const {pizza} = route.params;
  console.log(pizza);
  return (
    <ScrollView >
      <View >
        <Image source={{uri: pizza.imagem}} style={styles.foto}></Image>
        <DataPizzas pizza={pizza.pizza} valor={pizza.preço} desc={pizza.descrição} />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  foto:{

      width: 300,
      height:300,
      aspectRatio:1,  
      borderRadius:20,
      marginTop:10,
      alignSelf:'center',
      
  },
  infos:{
    backgroundColor:"#bac3cc",
    padding: 10,
    borderBottomWidth:1,
    fontSize:20,
  },
  container:{
    display: "flex",
   
    padding: 20,
  },
  subTitles:{
    fontSize:20,
    fontWeight: "bold",
  }
});

export default PizzaDetail;

