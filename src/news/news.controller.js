import React,{ Component } from "react";
import category from '../../callapi/category'
import NewsView from './news.view'


export default class NewsController extends Component

{

    constructor(){
        super();
        this.state = {
            data:null,
            
        }
    }
    componentDidMount()
    { 
         var id=4;
        category.allApi({id}).then((response)=>{
            
           
            this.setState({data:response});
        }).catch((error)=>{
            console.log("Error",error);
        })
    }      
    render()
    {        
        return( 
            <NewsView
                    data={this.state.data}
                    onSubmit={this.onSubmit.bind(this)}
            ></NewsView>
        );  
    }
    onSubmit(i)
    {
        this.props.navigation.navigate("infor",{data:i});
    }
 }
