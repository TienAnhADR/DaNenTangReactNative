import { StyleSheet, Text, View, ActivityIndicator, Image, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const ListProduct = (props) => {
    const { navigation } = props
    const [listUser, setListUser] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [idUser, setidUser] = useState("");
    const [tenUser, settenUser] = useState('');
    const [gioiTinh, setgioiTinh] = useState('');
    const [ngaySinh, setngaySinh] = useState('');
    const [hopDong, sethopDong] = useState(true)
    const [modalVisible, setmodalVisible] = useState(false);
    const [hinhanh, sethinhanh] = useState('')
    const ItemFlastList = ({ item }) => {
        const xoaSP = () => {
            // link xóa
            let url_api_del = 'http://192.168.0.104:90/users/' + item.id;
            console.log(url_api_del);
            fetch(url_api_del, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then((res) => {
                    if (res.status == 200) {
                        alert("Đã xóa");
                        getListUser();
                    }

                })
                .catch((ex) => {
                    console.log(ex);
                });

        }

        return (
            <View style={styles.container_itemFL}>
                <Image style={styles.img_FL} source={{ uri: item.hinhanh }} />
                <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                    <View style={{flex:2}}>
                        <Text style={{ flex: 1.5, color: 'black', fontSize: 16 }} onPress={() => {
                            setgioiTinh(item.gioitinh);
                            sethinhanh(item.hinhanh);
                            setidUser(item.id);
                            settenUser(item.name);
                            sethopDong(item.hopdong)
                            setngaySinh(item.ngaysinh)
                            setmodalVisible(!modalVisible);
                        }}>Tên: {item.name}</Text>
                        <Text style={{ flex: 0.5, color: 'black', fontSize: 16 }}>{item.hopdong ? 'Chính thức' : 'Thử việc'}</Text>
                    </View>
                    <Text style={{ flex: 1, color: 'black', fontSize: 16, }}>Giới tính: {item.gioitinh}</Text>
                </View>

                <View style={styles.container_buttom}>
                    <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('UpdateSP', { item }) }}>
                        <Text style={styles.text} >Sửa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={xoaSP}>
                        <Text style={styles.text}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    const getListUser = async () => {
        let url_api = "http://192.168.0.104:90/users"
        try {
            const response = await fetch(url_api); // load dữ liệu

            const json = await response.json(); // chuyển dữ liệu thành json
            console.log(json);
            setListUser(json);// đổ dữ liệu vào state

        } catch (error) {
            console.error(error);
        } finally {
            // kết thúc quá trình load dữ liệu, kể cả có lỗi cũng gọi vào lệnh này
            setisLoading(false); // trạng thái không còn load nữa
        }
    }
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // cập nhật giao diện ở đây
            getListUser();

        });

        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={styles.container}>
            {
                (isLoading) ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        style={styles.flastList}
                        data={listUser}
                        renderItem={({ item }) => <ItemFlastList item={item} />}
                        keyExtractor={item => item.id}
                    />
                )
            }
            <TouchableOpacity onPress={() => { navigation.navigate('AddSP') }} style={styles.btn_add}>
                <Text style={styles.text}>Thêm</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible);
                }}>
                <View style={styles.container_molder}>
                    <Image style={styles.img_Modal} source={{ uri: hinhanh }} />
                    <Text style={{ color: "#fff", fontSize: 30, fontWeight: 'bold' }}>Tên: {tenUser}</Text>
                    <Text style={{ color: "#fff", fontSize: 30 }}>Ngày sinh: {ngaySinh}</Text>
                    <Text style={{ color: "#fff", fontSize: 25 }}>Giới tính: {gioiTinh}</Text>
                    <Text style={{ color: "#fff", fontSize: 25 }}>Nhân viên: {hopDong ? 'Chính thức' : 'Thử việc'}</Text>
                    <Pressable style={styles.btn_quaylai} onPress={() => { setmodalVisible(false) }}>
                        <Text style={{ color: "#fff", fontSize: 25 }}>Quay lại</Text>
                    </Pressable>

                </View>
            </Modal>
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    flastList: {
        flex: 1,
    },
    container_itemFL: {

        backgroundColor: 'yellow',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20
    },
    img_FL: {
        margin: 20,
        width: 100,
        height: 100,
        borderRadius: 20,
        borderColor:'red',
        borderWidth:1
    },
    container_buttom: {
        height: '100%',
        flex: 1,
        flexDirection:'row'

    },
    btn: {
        flex: 1,
        margin: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 10
    },
    btn_add: {
        width: 70,
        height: 70,
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 30,
        left: 30,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff'
    },
    container_molder: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    img_Modal: {
        width: 200,
        height: 200,
        borderRadius: 20,
        margin: 10
    },
    btn_quaylai: {
        backgroundColor: 'blue',
        width: 100,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    }
})