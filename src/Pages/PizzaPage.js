import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import axios from 'axios'
import PizzaList from '../components/PizzaList';

function PizzaPage(props) {

  const {navigation} = props;

  const [pizzas,setPizzas] = useState([]);
  

  useEffect( () => {
      axios.get('http://localhost:3333/Pizzas').then(response => {
      console.log(response.data)
      setPizzas(response.data)
      setTimeout(() => {

      }, 2000)
    }).catch(error =>{
      console.log("erro")
    })
  }, []);
  
  return (
    <ScrollView>
    <View >
        <PizzaList p={pizzas} nextScreen={navigation}/>
    </View>
    </ScrollView>
  );
}

export default PizzaPage;
