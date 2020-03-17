import React, { Component } from 'react';

import MainCenterView from './mainCenter.view'

export default class MainCenterController extends Component
{
    componentDidMount(){
      
        window.navigation = this.props.navigation;
   
    }
    render(){
        return(          
                <MainCenterView
                    onClick ={this.onClick.bind(this)}
                ></MainCenterView>

        );
    }
    onClick(i)
    { 
        switch(i){
            case 1:{ this.props.navigation.navigate("abc");
            break;
            }
            case 2:{ this.props.navigation.navigate("Bang Gia");
            break;
            }
            case 3:{ this.props.navigation.navigate("question");
            break;
            }
            case 4:{ this.props.navigation.navigate("news");
            break;
            }
            case 5:{ this.props.navigation.navigate("infor");
            break;
            }
            case 6:{ this.props.navigation.navigate("calulate");
            break;
            }
            case 7:{ this.props.navigation.navigate("Main");
            break;
            }

        }
    }
}

