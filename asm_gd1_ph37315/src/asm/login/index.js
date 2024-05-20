import { Image, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = (props) => {
  const {navigation} = props;
  return (
    <View style = {styles.container}>
      <View style={styles.box1}>
        <Image  source={require('./../../img/welcome.png')}
        style={{width: 142 , height: 142 , }}/>
        <Text style = {styles.text}>Welcome to Lungo!!</Text>
        <Text style= {{fontSize: 12, color:'#828282', margin:15}}>Login to Continue</Text>
      </View>
      <View>
      <View style= {styles.from}>
      <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor = "gray" />
      <TextInput style={styles.input} placeholder='Password' placeholderTextColor = "gray" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StackHome')}>
        <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}} >Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>   
        <Image source={require('./../../img/gg.png')}/>  
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}} >Sign in with Google</Text>
        <Text>{}</Text>
      </TouchableOpacity>
      <Text onPress={()=>{navigation.navigate('StackDangKy')}} style={{color: 'gray',margin: 20}}>Don’t have account? Click <Text style= {{color:'#D17842'}}>Register</Text></Text>
      <Text style={{color: 'gray',margin: 20}}>Forget Password? Click <Text style= {{color:'#D17842'}}>Reset </Text></Text>
    </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    box1: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 26,
      fontWeight: 'bold'
    },

    input: {
      margin:10,
      width: 350,
      height: 45,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      padding : 15,
      color:'#fff'
  },
  from: {
      margin: 20,
      justifyContent: 'center',
      alignItems:'center'
  },
  button: {
      height: 57,
      width:350,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#D17842',
      borderRadius: 15,
      marginTop: 50,
      marginBottom:10
  },
  button2:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      height: 57,
      width:350,
      justifyContent: 'space-around',
      alignItems:'center',
      borderRadius: 15,
      margin: 10
  } 
})