import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./style";

const Item_favorite = () => {
  return (
    <View style ={styles.container}>
      <Image source={require('./../../../img/compuchino.png')} style={{width: '100%',height: '100%',borderRadius:20}}/>
      <View style = {styles.content}>
        <View style ={styles.box}>
            <View style={styles.content1}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Cappuccino</Text>
                <Text style={{color:'rgba(174, 174, 174, 1)',fontSize:12}} >With Steamed Milk</Text>
                <View style={{flex: 1,justifyContent: 'space-around',alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={require('./../../../img/Group.png')}/>
                    <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>4.5</Text>
                    <Text style={{color:'rgba(174, 174, 174, 1)',fontSize:12}}>(6,879)</Text>
                </View>
            </View>
            <View style={styles.content1}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'baseline'}}>
                    <View style={styles.item_img}>
                        <Image source={require('./../../../img/iconCoffee.png')}/>
                        <Text style={{color: 'rgba(174, 174, 174, 1)' , fontSize: 10}}>Coffee</Text>
                    </View>
                    <View style={styles.item_img}>
                        <Image source={require('./../../../img/drop.png')}/>
                        <Text style={{color: 'rgba(174, 174, 174, 1)' , fontSize: 10}}>Milk</Text>
                    </View>
                </View>
                <View style={{width:118, height: 40,borderRadius: 10, backgroundColor:'#141921', justifyContent:'center', alignItems:'center', margin:10}}>
                    <Text style={{color: 'rgba(174, 174, 174, 1)' , fontSize: 10,}}>Medium Roasted</Text>
                </View>
            </View>
        </View>
        <View style ={styles.box1}>
            <Text style={styles.text}>Description</Text>
            <Text style= {styles.text1}>Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.</Text>
        </View>
      </View>
    </View>
  )
}

export default Item_favorite

