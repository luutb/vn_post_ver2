import React,{ Component } from "react";
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, Button, } from 'react-native';
import InforApp from "./infor.view"
import category from '../../callapi/category'
export default class InforController extends Component
{
    constructor(){
        super();
        this.state={
            value:'',
            data:''
        }
    }
   
    componentDidMount()
    {   
        id=this.props.route.params.data
        category.postApi({id}).then((response)=>{
            
            
            this.setState({data:response});
            
        }).catch((error)=>{
            console.log("Error",error);
        })
       
    }

    render()
    {  console.log("id2",this.state.data)
        
      //  console.log("id", this.props.route.params.data)
        return(
            <InforApp
                data={this.state.data}
            ></InforApp>
        );
    }

}