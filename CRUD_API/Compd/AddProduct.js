import { StyleSheet, Text, View ,TextInput,Button} from 'react-native'
import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';

const AddProduct = (props) => {
    const {navigation} = props
    const [tenUser, settenUser] = useState('')
    const [gioiTinh, setgioiTinh] = useState('')
    const [hinhanh, sethinhanh] = useState('')
    const [ngaySinh, setngaySinh] = useState('')
    const [hopDong, sethopDong] = useState(true)
    const SaveProduct = () => {
        const valiDate =/^\d{4}-\d{2}-\d{2}$/;
        // tạo đối tượng dữ liệu
        if(tenUser.length==0){
            alert('Không để trống tên');
            return;
        }
        if(gioiTinh.length===0){
            alert('Vui lòng chọn giới tính');
            return
        }
        if(hinhanh.length===0){
            alert('Không để trống hình ảnh');
            return
        }
        if(!valiDate.test(ngaySinh)){
            alert('sai định dạng ngày sinh');
            return;
        }
        let objSP = { name: tenUser, gioitinh: gioiTinh,hinhanh:hinhanh,ngaysinh: ngaySinh,hopdong:hopDong };
        let url_api = 'http://192.168.0.104:90/users';

        fetch(url_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objSP)
        })
            .then((res) => {
                if (res.status == 201)
                    alert("Thêm thành công")
                navigation.navigate('Home')
            })
            .catch((ex) => {
                console.log(ex);
            });

    }
  return (
    <View style={{}}>
            <Text style={{color:'black', fontWeight:'bold', fontSize:30, textAlign:'center',margin:10}}>Thêm User</Text>
            <TextInput style={styles.input} placeholder="Nhập tên"
                onChangeText={(txt) => { settenUser(txt) }} />
            <TextInput style={styles.input} placeholder="Nhập link hình ảnh"
                onChangeText={(txt) => { sethinhanh(txt) }}
            />
            <TextInput style={styles.input} placeholder="Nhập ngày sinh"
                onChangeText={(txt) => { setngaySinh(txt) }} />
            <Text style={{margin:10}}>Chọn giới tính:</Text>
            <Picker style ={styles.picker}
                selectedValue={gioiTinh}
                onValueChange={(itemValue) => setgioiTinh(itemValue)}
            >
                <Picker.Item label="Nam" value="Nam" />
                <Picker.Item label="Nữ" value="Nữ" />
            </Picker> 
            <Text style={{margin:10}}>Chọn hợp đồng:</Text>
            <Picker style ={styles.picker}
                selectedValue={hopDong}
                onValueChange={(itemValue) => sethopDong(itemValue)}
            >
                <Picker.Item label="Chính thức" value={true} />
                <Picker.Item label="Thử việc" value={false} />
            </Picker>
            
            <Button title="Save" onPress={SaveProduct} />



        </View>

  )
}

export default AddProduct

const styles = StyleSheet.create({
    input:{
        borderRadius:10,
        borderColor: 'red',
        borderWidth:1,
        margin:10
    },
    picker:{
        margin:10
    }
})