import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Favorite from './Favorite/index'
const data =[{id:'1',anh:'./../../img/compuchino.png',name: 'Cappuccino'}]

const Favorites = () => {
  return (
    <View style={styles.container}>
        <View style = {styles.header}>
            <View style={styles.image}><Image  source={require('./../../img/icon1.png')} /></View>
            
            <Text style={styles.text}>Favorites</Text>
            <Image  source={require('./../../img/Intersect.png')}/>
        </View>
        
        <ScrollView style= {styles.contents}>
            
                <Favorite/>
                <Favorite/>
                <Favorite/>
            
            
            {/* <FlatList
            data={data}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            /> */}
        </ScrollView>
       
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingBottom:10
        
    },
    header: {
        margin:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray'
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
    contents: {
        width: '100%',
        
    }
    
})