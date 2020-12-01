import React from 'react'
import {View,Text,Image,StyleSheet, TouchableHighlight, ActivityIndicator} from 'react-native'


function PizzaList(props){
     let loading = true;

      const textElement =  props.p.map((pizza) => {
        return (
            loading = false,
            
            <TouchableHighlight onPress={()=>{
                props.nextScreen.navigate("PizzaDetail", {pizza})
            }} key={pizza.id}> 
                <View style={styles.container}>
                    <Image source={{uri: pizza.imagem}} style={styles.foto}/>
                    <Text style={styles.text} >{`${pizza.pizza}`}</Text>
                </View>
            </TouchableHighlight>   
            )
        });
      return( 
          <View>
            {loading && <ActivityIndicator size="large" style={styles.load} animating={loading}/>}
            {textElement}
          </View>
      );
 
}


const styles = StyleSheet.create({
    foto:{
        width:50,
        height:50,
        aspectRatio:1,  
        borderRadius: 50,
    },
    container:{
          backgroundColor: '#b07471',
          padding:10,
          borderBottomColor: 'black',
          borderBottomWidth:1,
          flexDirection: 'row',
          alignItems: 'center',
         
          
    },
    text:{
        fontSize:20,
        paddingLeft: 20,
    },
    load: {
        padding:10,
      }

  });
export default PizzaList;