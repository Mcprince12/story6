import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    Read Story
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:40,
        fontFamily:'Times New Roman',
        textAlign:'center'
    },

    container:{
        alignSelf:'center',
        justifyContent:'center'
    }
})