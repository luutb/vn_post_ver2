import React,{Component} from "react"
import {View,Text} from "react-native"
import WebViewJS from "./webview.view"

export default class WebViewController extends Component
{


    componentDidMount()
    {
        console.log(this.props.route.params.Id);
    }

    render(){
        console.log(this.props.route.params.Id);
        return(
            <WebViewJS Id={this.props.route.params.Id}></WebViewJS>
        )
    }

}