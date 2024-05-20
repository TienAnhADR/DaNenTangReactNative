import { Image, StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'


const DangKy = (props) => {
  const {navigation} = props;

  return (
    <View style = {styles.container}>
      <View style={styles.box1}>
        <Image source={require('./../../img/welcome.png')}
        style={{width: 142 , height: 142 }}/>
        <Text style = {styles.text}>Welcome to Lungo!!</Text>
        <Text style= {{fontSize: 12, color:'#828282', margin:15}}>Register to Continue</Text>
      </View>
      <View style= {styles.from}>
      <TextInput style={styles.input} placeholder='Name' placeholderTextColor = "gray" />
      <TextInput style={styles.input} placeholder='Email' placeholderTextColor = "gray" keyboardType='email-address' />
      <TextInput style={styles.input} placeholder='Password' placeholderTextColor = "gray" keyboardType='visible-password' />
      <TextInput style={styles.input} placeholder='Re-type password' placeholderTextColor = "gray"  keyboardType='visible-password'/>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: '#fff', fontSize: 14, fontWeight: 'bold'}} >Register</Text>
      </TouchableOpacity>
      <Text onPress={()=> navigation.navigate('StackLogin')} style={{color: 'gray',margin: 20}}>You have an account? Click <Text style= {{color:'#D17842'}}>Sign in</Text></Text>
      
    </View>
    </View>
  )
}

export default DangKy

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
      marginTop: 20
  },
  button2:{
      backgroundColor: '#fff',
      height: 57,
      width:350,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 15,
      margin: 10
  } 
})