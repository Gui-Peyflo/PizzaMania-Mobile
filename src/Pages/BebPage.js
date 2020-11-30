import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import axios from 'axios'
import BebList from '../components/BebList';

function BebPage(props) {

  const {navigation} = props;

  const [bebidas,setBebidas] = useState([]);
  

  useEffect(  () => {
       axios.get('http://localhost:3333/Bebidas').then(response => {
      console.log(response.data)
      setBebidas(response.data)
    }).catch(error =>{
      console.log("erro")
    })
  }, []);
  
  return (
    <ScrollView>
    <View >
        <BebList b={bebidas} nextScreen={navigation}/>
    </View>
    </ScrollView>
  );
}

export default BebPage;
