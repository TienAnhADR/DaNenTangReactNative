// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native';

// const KeyboardAvoidingComponent = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray'
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// });

// export default KeyboardAvoidingComponent;
import { 
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
    ScrollView,
    Image,
    Touchable,
    TouchableOpacity,
 } from 'react-native'
import React, { useState } from 'react'



const bai3 = () => {
const [password, setPassword] = useState('');
const [hienPassword, setHienPassword] = useState(false);
const [imgEye,setImgEye] = useState()

const buttonHienPassword = () => {
    setHienPassword(!hienPassword);
};
  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{flex:1}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hi Welcome Back!</Text>
        <Text style={{fontSize: 20, marginTop:20}}>Hello again you have been missed!</Text>
        <Image source={require('./doremon.jpg')} style={{width:370,height: 300,marginTop:20,marginBottom:20 ,borderRadius:30}}/>
        <Text>Email address</Text>
        <TextInput placeholder='Enter your email address'        
        style ={{width:'100%', height: 60, borderRadius: 20, borderColor: 'black',borderWidth: 1, padding:10}}/>
        <Text>Password</Text>
        <View style={{flexDirection:'row',alignItems:'center', width:'100%', height: 60, borderRadius: 20, borderColor: 'black',borderWidth: 1, padding:10}}>
        <TextInput placeholder='Enter your password' 
        secureTextEntry={!hienPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{flex:1,height:'100%'}}
        />
        <TouchableOpacity style={{flex:0.1}} onPress={buttonHienPassword}>
        <Image  style={{width: 30,height:30}} source={require('./OIP.jpg')}/>
        </TouchableOpacity>        
        </View>
        <View style={{flexDirection:'row',width:"100%", marginTop:20 }}>
          <View style={{borderColor: 'black',borderWidth:0.5 ,margin:10 ,flex:1}}/>
          <Text>Or Login with</Text>
          <View style={{borderColor: 'black',borderWidth:0.5 ,margin:10 ,flex:1}}/>
        </View>
        <View style={{flexDirection:'row',width:"100%", marginTop:20, }}>
          <View style={{borderColor: 'black',borderWidth:1 ,margin:10 ,flex:1,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./face.png')} style={{width:40,height:40}}/>
            <Text style={{fontSize:22,margin:5}}>Facebook</Text>
          </View>
          
          <View style={{borderColor: 'black',borderWidth:1 ,margin:10 ,flex:1,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('./gg.png')} style={{width:30,height:30}}/>
            <Text style={{fontSize:22,margin:5}}>Facebook</Text>
          </View>
        </View>
          

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default bai3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        
    },
          
})