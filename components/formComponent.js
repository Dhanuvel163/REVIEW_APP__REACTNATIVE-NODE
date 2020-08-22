import React, { Component } from 'react';
import { Text, View} from 'react-native';
import {Formik} from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';
import Flatbutton from './button';
const reviewSchema=yup.object({
    title:yup.string().min(3).required(),
    des:yup.string().min(3).required(),
    rating:yup.string().required().test('isnum','Rating must be 1 to 5',(val)=>{return parseInt(val)<6 && parseInt(val)>0 }),
})

export default class Forms extends Component{
    constructor(props){
        super(props);
}
    render(){
        return(
                <View>
                    <Formik initialValues={{title:'',rating:'',des:''}}
                    validationSchema={reviewSchema} 
                    onSubmit={(values,actions)=>{
                        this.props.formsubmit(values);
                        actions.resetForm();
                    }}
                    >
                    {(props)=>(
                        <View>
                            <TextInput
                             style={{borderColor:'black',borderWidth:2,borderRadius:3,margin:9,height:50,padding:10}}
                             placeholder="Title"
                             onChangeText={props.handleChange('title')}
                             onBlur={props.handleBlur('title')}
                             value={props.values.title}
                              />
                              <Text>{props.touched.title && props.errors.title}</Text>
                            <TextInput placeholder="Rating"
                             style={{borderColor:'black',borderWidth:2,borderRadius:3,margin:9,height:50,padding:10}}
                            keyboardType="numeric" 
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            value={props.values.rating}
                            />
                              <Text>{props.touched.rating && props.errors.rating}</Text>
                            <TextInput placeholder="Description"
                             style={{borderColor:'black',borderWidth:2,borderRadius:3,margin:9,height:30,padding:10}}
                            multiline minHeight={60}
                             onChangeText={props.handleChange('des')}
                             onBlur={props.handleBlur('des')}
                             value={props.values.des}
                              />
                              <Text>{props.touched.des && props.errors.des}</Text>
                            <Flatbutton Press={props.handleSubmit}/>
                        </View>
                    )}
                    </Formik>
                </View>
        );
    }
}