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