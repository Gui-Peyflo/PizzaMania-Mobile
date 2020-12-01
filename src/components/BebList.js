import React from 'react'
import {View,Text,Image,StyleSheet, TouchableHighlight, Button, ActivityIndicator} from 'react-native'

function BebList(props){
    let loading = true;
  
      const textElement =  props.b.map((bebida) => {
        return (
            loading = false,

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
    }

  });
export default BebList;