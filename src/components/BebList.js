import React from 'react'
import {View,Text,Image,StyleSheet, TouchableHighlight, Button} from 'react-native'

function BebList(props){
  
      const textElement =  props.b.map((bebida) => {
        return (
        <TouchableHighlight onPress={()=>{
            props.nextScreen.navigate("BebDetail", {bebida})
        }} key={bebida.id}> 
            <View style={styles.container}>
                <Image source={{uri: bebida.imagem}} style={styles.foto}/>
                <Text style={styles.text} >{`${bebida.bebida}`}</Text>
            </View>
        </TouchableHighlight>   
        )
      });
      return( 
          <View>
             
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
    }

  });
export default BebList;