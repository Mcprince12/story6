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
    submitAuthor = async (text)=>{
       db.collection("Story").doc("Author").update({
           "Author Name":text
       })
    }
    submitTitle = async (text1)=>{
        db.collection("Story").doc("Title").update({
            "Title":text1
        })
    }
    submitStory = async (text2)=>{
        db.collection("Story").doc("Story").update({
            "Story":text2
        })
        
    }
    render(){
        return(
            <View>
                <AppHeader/>
                
                <TextInput style = {styles.inputBox}
                placeholder={"Story Title"}
                onChangeText={text1 => {
                    this.setState({ text1: text1 });
                  }}/>
                <TextInput style = {styles.inputBox}
                placeholder={"Author"}
                onChangeText={text => {
                    this.setState({ text: text });
                  }}/>
                <TextInput style = {styles.inputBox} multiline={true}
                placeholder={"Write Story Here"}
                onChangeText={text2 => {
                    this.setState({ text2: text2 });
                  }}/>

                <TouchableOpacity style={styles.button}
                onPress={async()=>{
                 this.submitAuthor(this.state.text);
                 this.submitTitle(this.state.text1);
                 this.submitStory(this.state.text2);
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