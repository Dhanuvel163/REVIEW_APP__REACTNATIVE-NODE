import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
export default class Review extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <View> 
                <Card 
                    key={this.props.navigation.getParam('_id').toString()}
                    title={this.props.navigation.getParam('title')}
                    >
                        <Text style={{marginBottom: 10,textAlign:'center'}}>
                            {this.props.navigation.getParam('des')}
                        </Text>
                        <Button
                        icon={{name: 'star'}}
                        backgroundColor='#03A9F4'
                        fontFamily='Lato'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title={'Rating : '+this.props.navigation.getParam('rating').toString()}
                        />
                </Card>
                </View>
            </View>
        );
    }
}