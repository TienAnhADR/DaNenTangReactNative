import { StyleSheet, Text, View,ImageBackground,StatusBar, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const bai3 = () => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.image} resizeMode="cover" source={{uri: "https://top10quangnam.vn/wp-content/uploads/2021/08/hinh-anh-pho-co-hoi-an-8-min-1.jpg"}}>
          <StatusBar
          animated={true}
          translucent backgroundColor="transparent"
        />
        <View style={{flex:1}}></View>
        <View style={styles.content}>
            <View style={styles.sao}>
                <Image source={require('./sao.png')} />
                <Text style={{color:"#fff",fontSize:20,fontWeight:'bold'}}>5.0</Text>
            </View>
            <View style={styles.heart}>
                <Image  source={require('./heart1.png')}/>
            </View>
            <Text style={styles.text}>PHỐ CỔ HỘI AN</Text>
            <View style={styles.box1}>
                <View style={[styles.box1,{padding:30}]}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                        <Image style={{width:30,height:30,}} source={{uri:'https://static.vecteezy.com/system/resources/previews/008/089/677/non_2x/location-pin-icon-pin-location-icon-design-illustration-location-icon-simple-sign-free-vector.jpg'}}/>
                        <Text style={{color: 'blue',fontSize:20, fontWeight:'bold',flex:3}}>Quảng Nam</Text>
                        
                    </View>
                    
                    <Text style={{color: 'black',fontSize:18,marginTop: 5,
                    marginBottom:5,fontWeight:'bold'}}>Thông tin chuyến đi</Text>
                    <Text style={{color:'black'}}>Hội An – nơi mà cuộc sống cứ bình lặng như thế. Hội An – nơi mà dường như dòng chảy vô tình của thời gian chẳng thể nào vùi lấp đi cái không khí cổ xưa. Những mái ngói cũ phủ đầy rêu phong, những con đường ngập trong sắc đỏ của đèn lồng, tất cả như đưa ta về với một thế giới của vài trăm năm trước...</Text>
                </View>
                <View style = {styles.box2}>
                    <Text style={{color:'#fff',fontSize:20, fontWeight:'bold'}}>$100/Ngày</Text>
                    <TouchableOpacity style={styles.buttom}>
                        <Text style={{fontWeight: 'bold', color:'black'}}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
        </View>
        </ImageBackground>
    </View>
  )
}

export default bai3

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        flex: 1,

    },
    text: {
      margin:10,
      color:'#fff',
      fontSize:30,
      fontWeight:'bold',
      flex:0.5
    },
    content:{
        flex:1
    },
    box1:{
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        flex:3
    },
    box2:{
        backgroundColor:'blue',
        flexDirection: 'row',
        flex:1,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        justifyContent:'space-around',
        alignItems:'center'
    },
     heart:{
        width:50,
        height:50,
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent:'center',
        alignItems:'center',
        top: 50,
        right:50
     },
     sao: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        top: 20,
        right:50
     },
     buttom:{
        height:30,
        backgroundColor: '#fff',
        paddingEnd:30,
        paddingStart:30,
        borderRadius:5,alignItems: 'center',
        justifyContent:'center'
     }
})