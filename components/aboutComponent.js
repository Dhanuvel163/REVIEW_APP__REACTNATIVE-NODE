import React, { Component } from 'react';
import {  Text, View,ImageBackground } from 'react-native';

export default class About extends Component{
    render(){
        return(
            <View>
                <ImageBackground source={require('../assets/anim.png')} style={{height:'100%',width:'100%'}}>
                <View style={{padding:40,backgroundColor:'#ed2471',borderRadius:10,marginTop:10,margin:15}}> 
                    <Text style={{textAlign:'center',fontWeight:'bold',color:'white'}}>
                        Hii ! There Welcome
                    </Text>
                </View>
                <View style={{padding:40,backgroundColor:'#a031d4',borderRadius:10,marginTop:300,margin:15}}> 
                    <Text style={{textAlign:'center',fontWeight:'bold',color:'white'}}>
                        Here You can add review about your favourite movie and games!!
                        What are you waiting for ! Go get Started :)
                    </Text>
                </View>
                </ImageBackground>
            </View>
        );
    }
}