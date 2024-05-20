import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './style';

const Item = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./../../../img/compuchino.png')}/>
      <View style={styles.content_text}>
        <Text style={{color: '#fff',fontWeight:'bold' ,fontSize:13}}>Cappuccino</Text>
        <Text style={{color: '#fff',fontSize:9}}>With Steamed Milk</Text>
      </View>
      <View style={styles.content_gia}>
        <Text style={{color:'#fff'}}>$4.20</Text>
        <TouchableOpacity style={{width:26,height:26,borderRadius:7,backgroundColor:'#D17842',justifyContent:'center',alignItems:'center'}}>   
        <Image source={require('./../../../img/add.png')}/>  
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Item