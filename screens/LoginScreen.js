import React from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import AppHeader2 from '../AppHeader2';

export default class LoginScreen extends React.Component
{
    constructor ()
    {
        super();
        this.state = {
            emailId: '',
            password: '',
        }
    }
   
   
        login = async(emailId, password) => {
    if(emailId && password){
        try{
            const response = await firebase.auth()
            .signInWithEmailAndPassword(emailId, password);
            if(response){
                this.props.navigation.navigate('TabNavigator');
            } 
        }
        catch(error){ 
            switch(error.code){
                case 'auth/user-not-found': 
                alert("User doesn't exist");
                break;
                case 'auth/invalid-email':
                alert("Incorrect email or password");
                break;
            }
        }
    } else {
        alert("Enter email and password");
    }
}
    
    render ()
    {
        return (
            <KeyboardAvoidingView style={{ backgroundColor: 'aqua', alignItems: 'center', alignSelf: 'center' }}>
                <AppHeader2/>
            <View>
                    <Image source={require( '../assets/bebe.jpeg' )}
                           style={{width:200, height:200}}
                    />
                </View>
                <View>
                    <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text,
                        })
                    }}
                    value={this.state.emailId}
                    />
                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        placeholder="enter password"
                        onChangeText={(text)=>{
                            this.setState({
                                password:text,
                            })
                        }}
                        value={this.state.password}
                        />
                        <TouchableOpacity
                        style={{ height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5 }}
                        onPress={()=>{
                            this.login(this.state.emailId, this.state.password);
                        }}
                    >
                        <Text style={{textAlign:'center'}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({ loginBox: { width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin:10, paddingLeft:10 } })