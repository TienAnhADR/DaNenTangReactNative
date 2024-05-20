import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        
        height: 500,
        borderRadius: 20,
        backgroundColor: 'gray',
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    content:{
        position: 'absolute',
        
        width: '100%',
        height: '45%',
        

    },
    box :{
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        flex: 2,
        backgroundColor: 'rgba(20, 25, 33, 0.5)',        
        flexDirection: 'row'
    },
    box1: {
        flex: 1,
        backgroundColor: '#21262E',
        padding: 10,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15
    },
    text: {
        fontWeight: 'bold',
        color: '#AEAEAE',
        fontSize: 14
    },
    text1: {
        fontSize:12,
        color: '#fff'
    },
    content1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item_img: {
        width:50,
        height:50,
        borderRadius: 10,
        backgroundColor:'#141921',
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }
})
export default styles