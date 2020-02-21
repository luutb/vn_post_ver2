import React, { Component } from 'react';

import MainActivityView from './mainActivity.view'

export default class MainActivityController extends Component
{
    componentDidMount(){
      
        window.navigation = this.props.navigation;
   
    }
    render(){
        return(          
                <MainActivityView
                    onClick ={this.onClick.bind(this)}
                ></MainActivityView>

        );
    }
    onClick(i)
    { 
        switch(i){
            case 1:{ this.props.navigation.navigate("Bang Gia");
            break;
            }
            case 2:{ this.props.navigation.navigate("Bảng Giá");
            break;
            }
            case 3:{ this.props.navigation.navigate("Bảng Giá");
            break;
            }
            case 4:{ this.props.navigation.navigate("Register");
            break;
            }
            case 5:{ this.props.navigation.navigate("Register");
            break;
            }
            case 6:{ this.props.navigation.navigate("Register");
            break;
            }

        }
    }
}

