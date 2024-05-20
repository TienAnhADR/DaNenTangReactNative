import React, { useState } from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const App = () => {
    const colors = [ 'red', 'green','yellow','blue'];
    const [refreshing, setRefreshing] = React.useState(false);
    const [barStyle,setBarStyle] = useState(colors[0])
   
    const setBarColor =()=>{
        
       
        MauSac = colors.indexOf(barStyle)+1;
        if (MauSac> (colors.length)) {
            setBarStyle(colors[0]);
        } else {    
            setBarStyle(colors[MauSac]);
        }

        
        
        
    }

    const onRefresh = React.useCallback(() => {
        
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        setBarColor();
        }, 1000);
        
    }, []);

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <StatusBar />
            <Text>kéo xuống để load màu StatusBar</Text>
            
        </ScrollView>

        <StatusBar
        animated={true}
        backgroundColor={barStyle}
        barStyle='light-content'
        
       
      />
      
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        padding: 10,
        flex:0.5
      },
      textStyle: {
        textAlign: 'center',
        marginBottom: 8,
      },
    });

    export default App;