import React,{ Component } from "react";
import category from '../../callapi/category'
import QuestionView from './question.view'


export default class QuestionController extends Component

{

    constructor(){
        super();
        this.state = {
            data:null
        }
    }
    componentDidMount()
    {   var id=3;
        category.allApi({id}).then((response)=>{
            
            console.log("data", response)
            this.setState({data:response});
        }).catch((error)=>{
            console.log("Error",error);
        })
    }      
    render()
    {        
        return(
            <QuestionView
                    data={this.state.data}
                    onSubmit ={this.onSubmit.bind(this)}
            ></QuestionView>
        );  
    }
    onSubmit(i)
    {
        this.props.navigation.navigate("infor",{data:i});
    }
 }
