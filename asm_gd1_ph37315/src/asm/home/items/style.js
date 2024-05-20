import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        width:150,
        height:'100%',
        backgroundColor:'#262B33',
        marginEnd: 15,
        borderRadius: 20,
        padding:10
        
    },
    img: {
        flex:1,
        width:'100%',
        borderRadius:15,
        
    },
    content_text:{
        flex:1,
        marginTop:10
    },
    content_gia:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }

})
export default styles