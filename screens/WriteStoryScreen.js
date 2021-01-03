import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import AppHeader from '../AppHeader'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
                
                <TextInput style = {styles.inputBox}
                placeholder={"Story Title"}/>
                <TextInput style = {styles.inputBox}
                placeholder={"Author"}/>
                <TextInput style = {styles.inputBox} multiline={true}
                placeholder={"Write Story Here"}/>

                <TouchableOpacity style={styles.button}>
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