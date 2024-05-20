import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProduct from './Compd/ListProduct';
import AddProduct from './Compd/AddProduct';
import UpdateProduct from './Compd/UpdateProduct';
import WellcomeCompd from './Compd/WellcomeCompd';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Wellcome" component={WellcomeCompd} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={ListProduct} options={{headerShown: false}} />
      <Stack.Screen name="AddSP" component={AddProduct} options={{headerShown: false}} />
      <Stack.Screen name="UpdateSP" component={UpdateProduct} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})