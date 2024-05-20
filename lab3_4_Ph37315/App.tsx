import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View,Modal, Image } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [so1,setSo1] = useState(0);
  const [so2,setSo2] = useState(0);
  const [ketQua,setKetQua] = useState(0);
  const [showModal2,setShowModal2] = useState(false);
  const [showModal,setShowModal] = useState(false);
  
  
  return (
    <View style={styles.container}>
      <View><Text style= {{fontSize: 30, color: 'black', fontWeight: 'bold'}}>Máy tính điện tử</Text></View>
      <Text style={{fontSize:25}} >Kết quả: {ketQua}</Text>
      <TextInput style = {styles.input} onChangeText={(txt)=>{setSo1(Number(txt))}}
      keyboardType='numeric'
      placeholder='Nhập số thứ nhất'/>
      <TextInput style = {styles.input} onChangeText={(txt)=>{setSo2(Number(txt))}}
      keyboardType='numeric'
      placeholder='Nhập số thứ hai'/>
      <View style = {styles.khungButtom}>
        <Pressable style ={styles.buttom} onPress={()=> {setKetQua((so1)+(so2))}}>
          <Text style= {styles.text}>+</Text>
        </Pressable>
        <Pressable style ={styles.buttom} onPress={()=> Alert.alert('kết quả: '+(so1-so2))}>
          <Text style= {styles.text}>-</Text>
        </Pressable>
        <Pressable style ={styles.buttom} onPress={()=> {console.log(so1*so2)}}>
          <Text style= {styles.text}>*</Text>
        </Pressable>
        <Pressable style ={styles.buttom} onPress={()=> {setShowModal2(true)}}>
          <Text style= {styles.text}>/</Text>
        </Pressable>
      </View>
      <Pressable style={{backgroundColor: 'green', padding: 10, borderColor: 'red',borderWidth: 1,borderRadius: 10}}
       onPress={()=> {setShowModal(true)}}>
          <Text style= {styles.text}>INFOR</Text>
        </Pressable>
        <Modal animationType='slide'
      visible = {showModal2}
      transparent = {true}
      onRequestClose={() =>{
        console.log("Tắt modal");
        setShowModal2(false);
      }}>
        <View style={styles.khung}>
          <View style={styles.dialog}>
            
            <Text style= {styles.text2}>Kết quả: {so1/so2}</Text>
            <Button title='Quay lại' onPress={() => setShowModal2(false)}/>
          </View>
        </View>
      </Modal>
        <Modal animationType='slide'
      visible = {showModal}
      transparent = {true}
      onRequestClose={() =>{
        console.log("Tắt modal");
        setShowModal(false);
      }}>
        <View style={styles.khung}>
          <View style={styles.dialog}>
            <Image style= {{width: 200,height:200, borderRadius: 100, margin:50}} source={require('./democom/aset/img/img.png')}/>
            <Text style= {styles.text2}>Nguyễn Tiến Anh - PH37315</Text>
            <Button title='Quay lại' onPress={() => setShowModal(false)}/>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  khungButtom : {
    width: '90%',
    flexDirection : 'row',
    justifyContent: 'space-around'
  },
  input: {
    width:'80%',
    fontSize: 25,
    borderColor: 'black',
    borderWidth: 1,
    margin:10,
    borderRadius: 10,
    padding:10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    margin: 20,
    borderWidth: 1
  },
  buttom: {
    backgroundColor: 'green',
    flex:1,
    margin:10,
    justifyContent: 'center',
    alignItems:'center',
    padding:5,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize:30,
    fontWeight: 'bold'
  },
    khung : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: 'gray',
        
      },
      dialog : {
        borderColor: '#fff',
        borderWidth:1,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      text2: {
        fontSize: 25,
        fontWeight:'bold',
        color: '#fff',
        margin: 20
      }
})