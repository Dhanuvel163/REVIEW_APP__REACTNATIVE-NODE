import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

export default class Flatbutton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <TouchableOpacity onPress={this.props.Press}>
                <View style={{padding:20,backgroundColor:'coral',borderRadius:6,margin:10,marginBottom:30}}>
                    <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>
                    ADD
                    </Text>
                </View>
            </TouchableOpacity>
            </>
        );
    }
}

