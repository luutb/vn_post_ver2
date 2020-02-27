import React, { Component } from "react";
import { ScrollView, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, Button,View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';


export default class LoginView extends Component
{
    render()
    {
        return(
            <ScrollView style={{backgroundColor:"#FF9900"}}>
                <View style={{margin:20}}>
                    <View style={style.register}>
                        <Icon name="arrowleft" size={20} color="#900" onPress={()=>navigation.goBack(null)}></Icon>
                        <Text>Đăng ký</Text>
                    </View>
                    <View >
                        <View style={style.formLogin}>
                            <Icon name="user" size={20} color="#900" style={style.icon}></Icon>
                            <TextInput placeholder="Tài khoản ..."></TextInput>
                        </View>
                        <View style={style.formLogin}>
                            <Icon name="onepassword" size={20} color="#900" style={style.icon}></Icon>
                            <TextInput placeholder="Mật khẩu"></TextInput>
                        </View>
                        <Button title="Đăng Nhập"></Button>
                        <Text>Quên mật khẩu</Text>
                    </View> 
                </View>
            </ScrollView>
        );
    }

}
const style = StyleSheet.create(
    {
        formLogin:{
            backgroundColor:"#fff",
            flexDirection:"row",
            marginTop:10
            
        },
        form:{
            
        },
        icon:{
           margin:10
        },
        register:{
            flexDirection:"row",
            justifyContent:"space-between"
        }
}
);