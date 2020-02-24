import React,{ Component } from "react";

import category from '../../callapi/category'
import NewsView from './news.view'


export default class NewsController extends Component

{

    constructor(){
        super();
        this.state = {
            data:null
        }
    }
    componentDidMount()
    {   var id=4;
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
            <NewsView
                    data={this.state.data}
            ></NewsView>
        );  
    }
 }