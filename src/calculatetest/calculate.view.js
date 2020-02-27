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
          <ScrollView >
              <View>
                  <HeadersView content={this.state.content}></HeadersView>
              </View>           
            <View style={style.body}>
               <View>
                   <Text>Địa chỉ gửi(Quận, Huyện,...)</Text>  
                   <TouchableOpacity onPress={()=>this.searchSend("nhan")}>        
                    <TextInput placeholder="Nhập địa chỉ" editable={false} value={this.props.Send} style={{color:"#000"}} ></TextInput>
                   </TouchableOpacity> 
               </View>
               <View>
                   <Text>Địa chỉ nhận(Quận, Huyện,...)</Text>
                   <TouchableOpacity onPress={()=>this.searchTake()}>
                   <TextInput placeholder="Nhập địa chỉ" enablesReturnKeyAutomatically={false}></TextInput>
                   </TouchableOpacity>
               </View>
               <View style={style.view3}>
                    <View style={style.view3_1}>
                        <Text>Khối lượng</Text>
                        <TextInput placeholder="Khối lượng"></TextInput>
                    </View>
                    <View style={style.view3_1}>
                        <Text>Số tiền COD(nếu có)</Text>
                        <TextInput placeholder="Số tiền COD"></TextInput>
                    </View>
               </View>
               <View>
                   <Text>Thể tích</Text>
                   <View style={style.view3_4}>
                       <TextInput placeholder="Chiều dài"  ></TextInput>
                       <TextInput placeholder="Chiều rộng"></TextInput>
                       <TextInput placeholder="Chiều cao"></TextInput>
                   </View>
               </View>
            </View>
            <View>
                <TextInput placeholder="Chuyển phát thường" editable={false}></TextInput>
                <TextInput placeholder="Chuyển phát nhanh" editable={false}></TextInput>
                <TextInput placeholder="Chuyển phát ECOD" editable={false}></TextInput>
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
        },
        body:{
            borderBottomColor:"#000",
            borderRightWidth:1,
            elevation: 5,
            flex:4,
            padding:10
        },
        view3_4:{
            flexDirection:"row"
        }
       
    }
);