import React,{ Component } from "react";
import PricelistView from './banggia.view'
import { HeaderTitle } from "@react-navigation/stack";
import category from '../../callapi/category'




export default class PricelistController extends Component

{

    constructor(){
        super();
        this.state = {
            data:null
        }
    }
    componentDidMount()
    {   var id=2;
        category.categoryApi({id}).then((response)=>{
            
             console.log(response);
            this.setState({data:response});
        }).catch((error)=>{
            console.log("Error",error);
        })
    }      
    render()
    {        
        return(
            <PricelistView
                    data={this.state.data}
                    setId ={this.setId.bind(this)}
            ></PricelistView>
        );  
    }
    setId(i){
        this.props.navigation.navigate("webview",{Id:i})
    }
 }
