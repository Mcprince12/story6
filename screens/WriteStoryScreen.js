import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import AppHeader from '../AppHeader'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
                <TextInput style = {styles.inputBox}/>
                <TextInput style = {styles.inputBox}/>
                <TextInput style = {styles.inputBox} multiline={true}/>
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
})