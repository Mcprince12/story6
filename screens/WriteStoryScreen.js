import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            text1:'',
            text2:''
        }
    }
    submitAuthor = ()=>{
       db.collection("Story").doc("Author").update({
           'AuthorName':this.state.text
       })
    }
   submitTitle =  ()=>{
        db.collection("Story").doc("Title").update({
            'Title':this.state.text1
        })
    }
    submitStory = ()=>{
        db.collection("Story").doc("Story").update({
            'Story':this.state.text2
        })
        
    }
    render(){
        return(
            <View>
                <AppHeader/>
                
                <TextInput style = {styles.inputBox}
                placeholder={"Story Title"}
                onChangeText={(text1) => {
                    this.setState({ text1: text1 });
                    
                  }}
                  value = {this.state.text1}/>
                <TextInput style = {styles.inputBox}
                placeholder={"Author"}
                onChangeText={(text) => {
                    this.setState({ text: text });
                  }}
                  value = {this.state.text}/>
                <TextInput style = {[styles.inputBox, {height: 400}]} multiline={true}
                placeholder={"Write Story Here"}
                onChangeText={(text2) => {
                    this.setState({ text2: text2 });
                  }}
                  value = {this.state.text2}/>

                <TouchableOpacity style={styles.button}
                onPress={()=>{
                this.submitAuthor();
                this.submitTitle();
                 this.submitStory();
                }}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
      },
      
      button: {
        marginLeft: 50,
        marginTop: 50,
        width: 120,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
    
      buttonText: {
        fontFamily: 'Arial',
        fontSize: 14,
        textAlign: 'center',
        color:'red'
      },
})