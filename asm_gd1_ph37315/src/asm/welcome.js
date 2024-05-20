import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const welcome = () => {
  return (
    <View style = {styles.container}>
      <Image source={require('./../img/welcome.png')}
      style={{width: 189 , height: 189 }} />
    </View>
  )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})