import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler'
import db from '../config'

export default class ReadStoryScreen extends React.Component{
   constructor(){
       super();
       this.state={
           search:'',
           allInputs:[],
           lastVisibleSubmission:null,
       };
   }

   updateSearch=(search)=>{
       this.setState({search});
   }

   retrieveStory = async() =>{
        var text = this.state.search;
        var enteredText = text.split("");
        if(enteredText[0].toUpperCase()==='A'){
            const query = await db.collection("Story").where('Story', '==', text)
            .startAfter(this.state.lastVisibleSubmission).limit(10).get();
            query.docs.map((doc)=>{
                this.setState({
                    allInputs:[...this.state.allInputs, doc.data()],
                    lastVisibleSubmission:doc,
                })
            })
        } else if(enteredText[0].toUpperCase()==='A'){
            const query = await db.collection("Author").where('AuthorName', '==', text)
            .startAfter(this.state.lastVisibleSubmission).limit(10).get();
            query.docs.map((doc)=>{
                this.setState({
                    allInputs:[...this.state.allInputs, doc.data()],
                    lastVisibleSubmission:doc,
                })
            })      
         }
   }

   

    render(){
        return(
            <View style = {styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    style = {styles.searchBar}
                />
                <ScrollView style = {styles.bar}
data = {this.state.allInputs}>
                
                    
                    
                   
                        <View style = {{borderBottomWidth:2}}>
                            <Text>
                                {db.collection("Story").doc("Author").get()+this.state.lastVisibleSubmission}
                            </Text>
                            <Text>
                                {db.collection("Story").doc("Title").get()+this.state.lastVisibleSubmission}
                            </Text>
                            <Text>
                                {db.collection("Story").doc("Story").get()+this.state.lastVisibleSubmission}
                            </Text>

                        </View>
                   
                   
                   
                   
                    {this.retrieveStory}
                    
               
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({    
    container: {      flex: 1,     
         marginTop: 20    }, 

     searchBar:{      flexDirection:'row',      height:40,      width:'auto',      borderWidth:0.5,      alignItems:'center',      backgroundColor:'grey',      },   
    bar:{      borderWidth:2,      height:30,      width:300,      paddingLeft:10,    },    
    searchButton:{      borderWidth:1,      height:30,      width:50,      alignItems:'center',      justifyContent:'center',      backgroundColor:'green'    } 
 })