import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';


export default class WebViewJS extends Component
{

    getParams(){
        console.log('test',this.props.Id)
        if(this.props.Id==1)
        {
            return(
                <WebView
                    source={{uri:"https://trieuquang204.github.io/banggia/"}}
                ></WebView>
            );
        }
        if(this.props.Id==2)
        {
            return(
                <WebView
                        source={{uri:"https://trieuquang204.github.io/banggia/emsprice.html"}}
                ></WebView>
            )
        }
        
    }

    render()
    { 
        return(
            <View style={{flex:1}}>
                {this.getParams()}
            </View>
        );
    }
}