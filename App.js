import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import PizzaPage from './src/Pages/PizzaPage';
import PizzaDetail from './src/Pages/PizzaDetail';
import BebPage from './src/Pages/BebPage'
import BebDetail from './src/Pages/BebDetail'
import SelectList from './src/Pages/SelectList'
import img from './assets/icon.png'




function App(){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Selecionar Lista" component={SelectList} options={{title: "Pizza Mania",headerStyle: style.headerStyle, headerTitleStyle: style.headerTitleStyle, headerTitleAlign:'center'}} />

        <Stack.Screen name="Lista de Pizzas" component={PizzaPage}  options={style} />
        <Stack.Screen name="PizzaDetail" component={PizzaDetail} options={({route}) => {
          const title = route.params.pizza.pizza

          return({
            title: title,
            headerStyle: style.headerStyle,
            headerTitleStyle: style.headerTitleStyle,
          })
          }}/>

        <Stack.Screen name="Lista de Bebidas" component={BebPage}  options={style} />
        <Stack.Screen name="BebDetail" component={BebDetail} options={({route}) => {
        const title = route.params.bebida.bebida

        return({
          title: title,
          headerStyle: style.headerStyle,
          headerTitleStyle: style.headerTitleStyle,
        })
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const style = {
  headerStyle:{
    backgroundColor: '#560000',
  },
  headerTitleStyle:{
    color: 'white',
    fontSize: 25,
  }
}

export default App;
