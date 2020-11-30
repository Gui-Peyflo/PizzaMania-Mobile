import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import DataBeb from './DataBeb';

function BebDetail({route}) {

  const {bebida} = route.params;
  console.log(bebida);
  return (
    <ScrollView>
      <Image source={{uri: bebida.imagem}} style={styles.foto}></Image>
      <DataBeb pizza={bebida.bebida} valor={bebida.preço}/>
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
      marginLeft:11,
  },
  infos:{
    backgroundColor:"#bac3cc",
    padding: 10,
    borderBottomWidth:1,
    fontSize:20,
  },
  container:{
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  subTitles:{
    fontSize:20,
    fontWeight: "bold",
  }
});

export default BebDetail;

