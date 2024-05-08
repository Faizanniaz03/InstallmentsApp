import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RegularFont, primaryColor, white } from '../utils/Style'

const CustomButton = (props) => {
  return (
    <View>
        <TouchableOpacity style={{
            width:'30%',
            alignSelf:'center',
            backgroundColor:primaryColor,
            paddingHorizontal:20,
            alignContent:'center',
            paddingVertical:8,
            borderRadius:10
        }} onPress={props.action} >
            <Text style={{
                fontFamily:RegularFont,
                color:white,
                fontSize:20,
                textAlign:'center'
            }}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})