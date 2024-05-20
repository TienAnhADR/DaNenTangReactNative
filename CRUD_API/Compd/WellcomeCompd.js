import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const WellcomeCompd = (props) => {
    const { navigation } = props;
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/16/logo-fpt-fpt-polytechnic-tach-nen_043151201.png' }}
                style={{ width: 400, height: 150, position: 'absolute', top: 0 }} />
            <View style={{position:'absolute',bottom:0,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'red', fontSize:30,fontWeight:'bold'}}>Nguyễn Tiến Anh</Text>
                <Text style={{color:'red', fontSize:30,fontWeight:'bold'}}>PH37315</Text>
            </View>
        </View>
    )
}

export default WellcomeCompd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})