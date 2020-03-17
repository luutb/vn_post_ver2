import React, { Component } from "react";
import { ScrollView, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, Button,View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';


export default class LoginView extends Component
{
    constructor()
    {
        super();
        this.state={
            username:'',
            password:'',
            text:''
        }
    }
    render()
    {
        return(
            <ScrollView style={{backgroundColor:"#FF9900"}}>
                <View style={{margin:20}}>
                    <View style={style.register}>
                        <Icon name="arrowleft" size={20} color="#900" onPress={()=>navigation.goBack(null)}></Icon>
                        <Text style={{color:"#fff"}}>Đăng ký</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row", marginTop:10}}>
                        <Image source={require('../img/bg_header.png')} style={{flex:1}} ></Image>
                    </View>
                    <View >
                        <View style={style.formLogin}>
                            <Icon name="user" size={20} color="#900" style={style.icon}></Icon>
                    <TextInput placeholder="Tài khoản ..." onChangeText={(text)=>this.setState({username:text})}></TextInput>
                        </View>
                        <View style={style.formLogin}>
                            <Icon name="textbox-password" size={20} color="#900" style={style.icon}></Icon>
                            <TextInput placeholder="Mật khẩu" secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})}></TextInput>
                        </View>
                        <View style={{marginTop:10, backgroundColor:"#000099", height:40,justifyContent:"center"}}>
                            <Text style={style.button} onPress={this.onClick.bind(this)}>Đăng Nhập</Text>
                        </View>
                        <Text>Quên mật khẩu</Text>
                    </View> 
                </View>
            </ScrollView>
        );
    }
    onClick(){
        var{username,password}= this.state
        this.props.onSubmit(username,password);
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
        },
         button:{
            textAlign:"center",
            color:"#FFF", 
            
            fontFamily:"lucida grande", 
            fontWeight:"bold"
        }
    }
);