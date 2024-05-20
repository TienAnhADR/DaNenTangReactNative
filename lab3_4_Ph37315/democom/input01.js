import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'

const input01 = () => {
    const [hoTen, setHoTen] = useState('');
  return (
    <View style = {st.khung}>
      <Text style = {st.tieuDe}>Demo thẻ InputText</Text>
        <TextInput onChangeText={(txt) => setHoTen(txt)}
        
        placeholder='Nhập'
        style ={st.input}/>
        <Text>Giá trị ô text: {hoTen}</Text>


        {/* <Image style={{width: 300,height: 300}} source={require('./aset/img/anh1.jpg')}/> */}
        <Image style={{width: 300,height: 300,resizeMode : 'stretch'}}  source={{uri : 'https://th.bing.com/th/id/OIP.FqmT4JbZ91EtQ3alfYvKqQHaK-?rs=1&pid=ImgDetMain'}}/>
    </View>
  )
}

export default input01

const st = StyleSheet.create({
    anh : {borderRadius :10},
    tieuDe: {fontSize : 40, color: 'blue'},
    khung : {backgroundColor:'yellow',margin:20},
    input : {fontSize:30,}
})