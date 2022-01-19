import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
    title: string

}

export function Button({title, ...rest}:ButtonProps){
    //export function Button({onPress}:ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.button}
        {...rest}
    >
        <Text style={styles.buttonText}> {title}</Text>
    </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    
      button:{
          backgroundColor:'#A370F7',
          padding: 15,
          borderRadius:7,
          alignItems:'center',
          marginTop:20
      },
      buttonText:{
          color: '#FFF',
          fontSize:17,
          fontWeight:'bold'
      } 
});