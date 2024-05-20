import { StyleSheet, Text, View ,TextInput,Button, TouchableOpacity, Image} from 'react-native'
import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';

const UpdateProduct = (props) => {
    const {navigation} = props
    const item = props.route.params.item
    const [tenUser, settenUser] = useState(item.name)
    const [gioiTinh, setgioiTinh] = useState(item.gioitinh)
    const [hinhanh, sethinhanh] = useState(item.hinhanh)
    const [ngaySinh, setngaySinh] = useState(item.ngaysinh)
    const [hopDong, sethopDong] = useState(item.hopdong)
    const SaveProduct = () => {
        const valiDate =/^\d{4}-\d{2}-\d{2}$/;
        // tạo đối tượng dữ liệu
        if(tenUser.length==0){
            alert('Không để trống tên');
            return;
        }
        if(ngaySinh.length===0){
            alert('Không để trống ngày sinh')
            return
        }
        if(!valiDate.test(ngaySinh)){
            alert('sai định dạng ngày sinh')
            return
        }
        
        if(hinhanh.length=== 0){
            alert('Không để trống hình ảnh');
            return;
        }
        let objSP = { name: tenUser, gioitinh: gioiTinh,hinhanh:hinhanh,ngaysinh: ngaySinh,hopdong:hopDong };
        let url_api = 'http://192.168.0.104:90/users/'+item.id;

        fetch(url_api, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objSP)
        })
            .then((res) => {
                if (res.status == 200)
                    alert("Sửa thành công")
                navigation.navigate('Home')
            })
            .catch((ex) => {
                console.log(ex);
            });

    }
  return (
    <View style={{}}>
            <Text style={{color:'black', fontWeight:'bold', fontSize:30, textAlign:'center',margin:10}}>Sửa thông tin </Text>
            <View style={{width:'100%',height:100, alignItems:'center'}}>
            <Image source={{uri:hinhanh}} style={{width:100,height:100 ,borderRadius:10,borderColor:'red',borderWidth:1}}/>
            </View>
            
            <TextInput style={styles.input} placeholder="Nhập tên" value={tenUser}
                onChangeText={(txt) => { settenUser(txt) }} />
            <TextInput style={styles.input} placeholder="Nhập link hình ảnh" value={hinhanh}
                onChangeText={(txt) => { sethinhanh(txt) }}
            />
            <TextInput style={styles.input} placeholder="Nhập ngày sinh" value={ngaySinh}
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
            <TouchableOpacity onPress={SaveProduct} style={{backgroundColor:'#FFA500', justifyContent:'center',alignItems:'center', margin:20, borderRadius:20, height:50}}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={{backgroundColor:'#FFA500', justifyContent:'center',alignItems:'center', margin:20, borderRadius:20, height:50 }}>
                <Text>Quay lại</Text>
            </TouchableOpacity>
        </View>

  )
}

export default UpdateProduct

const styles = StyleSheet.create({})