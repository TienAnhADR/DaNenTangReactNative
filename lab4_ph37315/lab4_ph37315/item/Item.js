import { Image, StyleSheet, Text, View,Pressable, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Item = (props) => {
    const {data} = props;
  return (
    <View style = {styles.container}>
      <Image style = {styles.img} source={require('./../item/Intersect.png')}/>
      <View style = {styles.content}>
        <Text style = {styles.name}>{data.name}</Text>
        <Text style = {styles.sdt}>{data.email}</Text>
        <Text style = {styles.sdt}>{data.position}</Text>
      </View>
      <TouchableOpacity style ={styles.buttom} onPress={()=> {}}>
          <Text style= {{color: '#fff'}}>Call</Text>
    </TouchableOpacity>
      
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#FFA500",
        margin: 10,
        borderRadius: 30
        

    },
    img: {
        
        width:70,
        height: 70,
        borderRadius: 35,
        borderColor: 'red',
        borderWidth: 1
    },
    content:{
        flexDirection: 'column'
    },
    name: {
        fontSize: 24,

    },
    buttom: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})