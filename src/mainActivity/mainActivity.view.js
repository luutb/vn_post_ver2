import React, { Component } from "react";
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, } from 'react-native';
import Slider1 from '../img/image_slider1.png';
import Slider2 from '../img/image_slider2.png';


const imgArr=[Slider1,Slider2];
export default class MainActivityView extends Component
{
        render()
        {
            return(
            <View style={style.viewAll}>
                    <View  style={style.img}>
                        <ImageBackground
                                source={require('../img/bg_header.png')}
                                style={style.imgBackground}
                        ></ImageBackground>
                    </View>
                    <View style={style.img2}>
                        <View style={style.imgSlider} >
                            
                        </View>
                    </View>
                    <View style={style.img3} >
                        
                            <View style={style.img3_1}>
                                <TouchableOpacity style={style.icon}  onPress={()=>this.setClick(1)}>
                                     <Image source={require('../img/icon1.png')}></Image>
                                     <Text style={style.text}>Tra cứu bưu cục</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.icon}  onPress={()=>this.setClick(2)}>
                                     <Image source={require('../img/icon2.png')}></Image>
                                     <Text style={style.text}>Bảng Giá</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.icon}>
                                     <Image source={require('../img/icon3.png')}></Image>
                                     <Text style={style.text}>Hỏi Đáp</Text>
                                </TouchableOpacity>   
                            </View>                                                                                                      
                            <View style={style.img3_1}>
                                <TouchableOpacity style={style.icon} onPress={()=>this.setClick(4)} >
                                     <Image source={require('../img/icon4.png')} ></Image>
                                     <Text style={style.text}>Có gì mới</Text>
                                    
                                </TouchableOpacity>
                                <View style={style.icon}>
                                     <Image source={require('../img/icon5.png')}></Image>
                                     <Text style={style.text}>Thông tin ứng dụng</Text>
                                </View>
                                <View style={style.icon}>
                                     <Image source={require('../img/icon6.png')}></Image>
                                     <Text style={style.text}>Tính thử cước</Text>
                                </View>   
                            </View>                          
                    </View>
                </View>           
            );
        }
        setClick(i){
            this.props.onClick(i);
            }
}


const style = StyleSheet.create(
    {
        imgBackground:{
           
            width: "100%",
            height: "100%",
        },
        imgSlider:{
            flex:2,
            width:"100%",
            height:"100%"
        },
        viewAll:{
            flex:1,
            flexDirection:"column",
            height:"100%"
        },
        img:{
            flex:0.8
        },
        img2:{
            flex:3
        },
        img3:{
            flex:2.2,
            
            flexDirection: "column"
        },
        img3_1:{
            flex:3,
            
            flexDirection:"row",
            
        },
        icon:{
                flex:2,
                marginTop:10,
                alignItems:"center",
                borderBottomColor:'white',
                flexDirection:"column",
                justifyContent:"flex-start",
                alignContent:"center"             
            },
        text:{
                
            
        }  
                
        }
    
);