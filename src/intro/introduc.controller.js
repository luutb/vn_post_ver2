import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IntroduceView from './introduce.view'
import MainActivityController from '../mainActivity/mainActivity.controller'




export default class IntroduceController extends Component
{
    
    constructor()
    {
        super();
        this.state={timePassed:false}
    }
    componentDidMount(){
      
        window.navigation = this.props.navigation;
        setTimeout(()=> {this.setTimePassed();},5000);
    }
    setTimePassed()
    {
        this.setState({timePassed: true});
    }



    render(){
       
        if(!this.state.timePassed)
            {
                return(
                
                    <IntroduceView></IntroduceView>     
              );
            }

        else{
            return(
                <MainActivityController {...this.props}></MainActivityController>
            );
           
        }
       
    }
}

