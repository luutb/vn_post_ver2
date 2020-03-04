import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import htmlMap from './map.html.js';
import {WebView} from 'react-native-webview';
import HeadersView from '../header/header.js';

export default class MyInlineWeb extends Component {

  constructor()
  {
    super();
    this.state={
      content:"Map"
    }
  }
  render() {
    return (
       <View style={{flex:1,flexDirection:'column'}}>
     
            <HeadersView content={this.state.content}></HeadersView>

            <WebView style={{flex:1, height:300}}
              
                source={{html:htmlMap }}
              
              >       
            </WebView>
            <View style={{position:"absolute", left:20, bottom:0, height:100, backgroundColor:"rgba(255,255,255,0.8)", width:400, }}>
              <Text>abc</Text>
            </View>
        
       </View>
      
    );
  }
}
const style = StyleSheet.create(
  {
    body:{
      flexDirection:"column"
    }
  }
);