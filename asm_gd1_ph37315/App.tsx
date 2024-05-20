import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from "./src/asm/welcome";
import Login from "./src/asm/login/index";
import DangKy from "./src/asm/dangKy/index";
import Favorites from "./src/asm/Favorites/index";
import Home from "./src/asm/home/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabb =()=>{
  return(
   
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            if (route.name === 'Home') {
              return <Image source={require('./src/img/home.png')}/>
            } else if (route.name === 'Favorite') {
              return <Image source={require('./src/img/heard.png')}/>
            } else if (route.name === 'GioHang'){
              return <Image source={require('./src/img/gio.png')}/>
            } else if(route.name === 'ThongBao'){
              return <Image source={require('./src/img/alert.png')}/>
            }

          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'red',
          tabBarStyle: {
            backgroundColor: 'black'
          }
          
        })}>
          <Tab.Screen name='Home' component={Home} options={{headerShown: false, tabBarLabel:''}}/>
          <Tab.Screen name='Favorite' component={Favorites} options={{headerShown: false, tabBarLabel: ''}}/>
          <Tab.Screen name='GioHang' component={Home} options={{headerShown: false, tabBarLabel:''}}/>
          <Tab.Screen name='ThongBao' component={Home} options={{headerShown: false, tabBarLabel:''}}/>
          
        </Tab.Navigator>
   
  )
  
}

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='StackLogin'>      
      <Stack.Screen name='StackLogin' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name='StackHome' component={Tabb} options={{headerShown: false}}/>
      <Stack.Screen name='StackDangKy' component={DangKy} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
    
  
      
      
    
  )
}



export default App

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    
  }
})