import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
export default class Header extends Component{
    constructor(props){
        super(props);
}
    render(){
        return(
                <View style={{flex:1,flexDirection:'row'}}>
                    <MaterialIcons style={{color:'white'}} onPress={()=>this.props.navigation.openDrawer()} size={30} name="menu"/>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:20}}>
                        Reviewerz zone ! 
                    </Text>
                    </View>
                </View>
        );
    }
}