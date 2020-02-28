import React,
{ Component } from "react";
import CalculateView from "./calculate.view";

export default class CaculateController extends Component{

    constructor(){
        super();
        this.submitAddress = this.submitAddress.bind(this);
       
        this.state={
            SendPerson:"",
            TakePerson:""
        }
    }
    
    submitAddress(data){
          
            this.setState({SendPerson:data.structured_formatting.secondary_text})         
    }
  
    render()
    {
        console.log("testdata", this.state.SendPerson)
 
        return(
            <CalculateView 
                 setSearch={this.setSearch.bind(this)}
                 Send={this.state.SendPerson}
                 >
                
            </CalculateView>
        );
    }
    setSearch(i){
    
        
        this.props.navigation.navigate("search",{onSubmit:this.submitAddress})
    }
}