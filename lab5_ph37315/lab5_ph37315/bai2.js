import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const bai2 = () => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.image} resizeMode="cover" source={{uri: "https://th.bing.com/th/id/OIP.0n5NiozCJG9WSqdQo8yjgwHaNK?rs=1&pid=ImgDetMain"}}>
          <Text style={styles.text}>Nguyễn Tiến Anh - PH37315</Text>
          <StatusBar
          animated={true}
          translucent backgroundColor="transparent"
        />
        </ImageBackground>
    </View>
    
  )
}

export default bai2

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        flex: 1,
        
        alignItems:'center'
    },
    text: {
      margin:50,
      color:'#fff',
      fontSize:20,
      fontWeight:'bold'
    }
})