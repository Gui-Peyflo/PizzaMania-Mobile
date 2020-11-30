import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';


function DataPizzas(props){
    return(
        <>
        <View style={styles.container}>
          <Text style={styles.infos}><Text style={styles.subTitles}>Nome da Pizza:</Text> {props.pizza}</Text>
          <Text style={styles.infos}><Text style={styles.subTitles}>Preço: </Text>R$ {props.valor}</Text>
        </View>
        </>
    )
}



const styles = StyleSheet.create({
    foto:{
        width: 400,
        aspectRatio:1,  
        borderRadius:20,
        marginTop:10,
        marginLeft:11,
    },
    infos:{
      padding: 10,
      borderBottomWidth:2,
      fontSize:20,
    },
    container:{
      marginTop: 5,
      padding: 5,
    },
    subTitles:{
      fontSize:20,
      fontWeight: "bold",
    }
  });


export default DataPizzas;