import { StyleSheet, Text, View,Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Items from "./items/index";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    
    
    <View style= {styles.container}>
        <View style = {styles.header}>
            <View style={styles.image}><Image  source={require('./../../img/icon1.png')} /></View>
            
            <Text style={styles.text}>Home</Text>
            <Image  source={require('./../../img/Intersect.png')}/>
        </View>
        <ScrollView>
        <View style={styles.content_seach}>
            <Text style= {{fontSize:28, color:'#fff',width:'50%', fontWeight:'bold'}}>Find the best coffee for you</Text>
            <TextInput style={styles.input} placeholder='Find Your Coffee...' placeholderTextColor={'#fff'}/>
        </View>
        <View style={styles.contents}>
            <ScrollView horizontal style={styles.box1}>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                
            </ScrollView>
            <Text style={{color: '#fff',fontSize: 16,fontWeight:'bold'}}>Coffee beans</Text>
            
                <ScrollView horizontal style={styles.box1}>
                    <Items/>
                    <Items/>
                    <Items/>
                    <Items/>
                    
                </ScrollView>
            
        </View>
        </ScrollView>
        
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        
    },
    header: {
        margin:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray'
    },
    content_seach: {
        width: '100%',
        padding: '5%'
    },
    text: {
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 30,
        height: 30,     
        backgroundColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8   
    },
    input: {
        width: '100%',
        backgroundColor: 'gray',
        borderRadius:20,
        padding:10,
        marginTop:10
    },
    contents: {
        width: '100%',
        padding: '5%',
        
    },
    box1: {
        width: '100%',
        height: 220,
        flexDirection: 'row',
        
    }


})