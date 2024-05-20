import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from "./item/Item";
import Bai2 from "./bai2/bai2";
import Bai3 from "./bai3/bai3";

import DanhBa from "./bai1/ListDanhBa";

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <DanhBa/> */}
      <Bai2/>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})