import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Item from "./../item/Item";

const DATA = [
    {
        "name": "Nguyễn Tiến Anh",
        "email": "anhntph373815@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Anh Tiến",
        "email": "anhntph37310@.fpt.edu.vn",
        "position": "Giảng viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Hữu Đăng",
        "email": "dangntph37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Văn Đức",
        "email": "ducntph37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Văn Chiến",
        "email": "chienntph37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Tiến Anh",
        "email": "anhntph37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Anh Tiến",
        "email": "anhntph373410@.fpt.edu.vn",
        "position": "Giảng viên",
        "photo": "./../item/Intersect.png"

    },
    {
        "name": "Nguyễn Hữu Đăng",
        "email": "dangntphh37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"


    },
    {
        "name": "Nguyễn Văn Đức",
        "email": "ducnttph37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"
    },
    {
        "name": "Nguyễn Văn Chiến",
        "email": "chiennntph37315@.fpt.edu.vn",
        "position": "Sinh viên",
        "photo": "./../item/Intersect.png"

    },
]

const ListDanhBa = () => {
  return (
    <View>
      <FlatList
      data={DATA}
      renderItem={({item}) => <Item data = {item}/>}
      keyExtractor={item=>item.email}
      />
    </View>
  )
}

export default ListDanhBa

const styles = StyleSheet.create({})