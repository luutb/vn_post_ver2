import React, { Component } from "react";
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput, ScrollView } from "react-native-gesture-handler";
import HeadersView from "../header/header";






export default class CalculateView extends Component
{

    constructor(){
        super();
        this.state={
            content:"Tính thử cước",
            
        }
    }
    // key: 'AIzaSyBDQHOnkXBu5C_CVGOuQ9F8UN2y09m6RL8',
   
    render()
    {
        console.log("sendperson", this.props.Send);
        return(
          <ScrollView style={{flex:1}}>
              
              <View>
                  <HeadersView content={this.state.content}></HeadersView>
              </View>           
            <View style={style.body}>
               <View >
                   <Text style={{size:30}}>Địa chỉ gửi(Quận, Huyện,...)</Text>  
                   <TouchableOpacity onPress={()=>this.searchSend(1)}  style={{borderColor:"#FF6600", borderWidth:0.5,borderRadius:5}}>        
                    <TextInput placeholder="Nhập địa chỉ" editable={false} value={this.props.Send} style={{color:"#000"}} ></TextInput>
                   </TouchableOpacity> 
               </View>
               <View>
                   <Text>Địa chỉ nhận(Quận, Huyện,...)</Text>
                   <TouchableOpacity onPress={()=>this.searchSend(2)}  style={{borderColor:"#FF6600", borderWidth:1,borderRadius:5}}>
                   <TextInput placeholder="Nhập địa chỉ" editable={false} value={this.props.Take}  style={{color:"#000"}} ></TextInput>
                   </TouchableOpacity>
               </View>
               <View style={style.view3}>
                    <View style={style.view3_1}>
                        <Text>Khối lượng</Text>
                        <TextInput placeholder="Khối lượng"  style={{borderColor:"#FF6600", borderWidth:0.5,borderRadius:5}}></TextInput>
                    </View>
                    <View style={style.view3_1}>
                        <Text>Số tiền COD(nếu có)</Text>
                        <TextInput placeholder="Số tiền COD"  style={{borderColor:"#FF6600", borderWidth:0.5,borderRadius:5}}></TextInput>
                    </View>
               </View>
               <View>
                   <Text>Thể tích</Text>
                   <View style={style.view3_4}>
                       <TextInput placeholder="Chiều dài"  style={{borderColor:"#FF6600", borderWidth:0.5, borderRadius:5, width:90}} ></TextInput>
                       <TextInput placeholder="Chiều rộng"  style={{borderColor:"#FF6600", borderWidth:0.5, marginLeft:10, borderRadius:5, width:90}}></TextInput>
                       <TextInput placeholder="Chiều cao"  style={{borderColor:"#FF6600", borderWidth:0.5, marginLeft:10, borderRadius:5, width:90}}></TextInput>
                   </View>
               </View>
            </View>
            <View style={{marginTop:10}}>
                <TextInput placeholder="Chuyển phát thường" editable={false}  style={{borderColor:"#000", borderWidth:0.5}}></TextInput>
                <TextInput placeholder="Chuyển phát nhanh" editable={false}  style={{borderColor:"#000", borderWidth:0.5}}></TextInput>
                <TextInput placeholder="Chuyển phát ECOD" editable={false}  style={{borderColor:"#000", borderWidth:0.5}}></TextInput>
            </View>
                  
        </ScrollView> 
        );
    }
    searchSend(i)
    {
        this.props.setSearch(i);
    }
   
}




const style =StyleSheet.create(
    {
        view3:{
            flexDirection:"row"
        },
        view3_1:{
            flex:2,
            marginRight:10
        },
        body:{
            borderBottomColor:"#000",
            borderRightWidth:1,
            elevation: 5,
            flex:4,
            padding:10
        },
        view3_4:{
            flexDirection:"row",
            
        },
        textmagin:{
            marginRight:10
        },
        text:{
            
        }
        
       
    }
);